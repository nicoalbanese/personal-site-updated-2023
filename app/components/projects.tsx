import { ArrowUp, ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";

type TProject = {
  title: string;
  description: string;
  url: string;
  repo?: string;
};

const projects: TProject[] = [
  {
    title: "Kirimase",
    description:
      "The fastest way to start Next.js projects. Open-source CLI inspired by the Ruby on Rails CLI and Ruby Gems.",
    url: "https://kirimase.dev",
    repo: "https://github.com/nicoalbanese/kirimase",
  },
  {
    title: "Semantic Image Search",
    description: "A simple image search engine using the AI SDK and Postgres.",
    url: "https://semantic-image-search.vercel.app",
    repo: "https://github.com/vercel-labs/semantic-image-search",
  },
  {
    title: "Natural Language Postgres",
    description:
      "Query a PostgreSQL database with natural language, using the AI SDK.",
    url: "https://natural-language-postgres.vercel.app",
    repo: "https://github.com/vercel-labs/natural-language-postgres",
  },
  {
    title: "AI Facts",
    description: "Validate spoken statements with Perplexity and OpenAI.",
    url: "https://ai-facts.vercel.app",
    repo: "https://github.com/vercel-labs/ai-facts",
  },
  {
    title: "RAG Chatbot",
    description:
      "Next.js app that uses RAG to respond with proprietary information.",
    url: "https://ai-sdk-preview-rag.vercel.app/",
    repo: "https://github.com/vercel-labs/ai-sdk-preview-rag",
  },
  {
    title: "Chrome AI Chatbot",
    description: "Chatbot using the model built-in to Chrome browsers.",
    url: "https://ai-sdk-chrome-ai.vercel.app/",
    repo: "https://github.com/nicoalbanese/ai-sdk-chrome-ai",
  },
  {
    title: "Karozu (WIP)",
    description: "A type-safe declarative approach to dynamic code generation.",
    url: "https://github.com/nicoalbanese/karozu",
  },
  {
    title: "Dealflow OS",
    description:
      "Dealflow management system built with Next.js on top of Airtable.",
    url: "https://github.com/nicoalbanese/df-hub-opensource",
  },
  {
    title: "Portfolio Management System",
    description: "Airtable base for tracking VC portfolio.",
    url: "https://www.airtable.com/universe/expoadDDTsK4qWIzz/vc-portfolio-database-template",
  },
];

export const Projects = () => {
  return (
    <div>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li key={index} className="mb-4">
            <Project {...project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const getGithubStars = async (repo?: string) => {
  if (!repo) return null;
  try {
    const response = await fetch(
      repo.replace("github.com", "api.github.com/repos"),
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    );
    const data = await response.json();
    return data.stargazers_count as number;
  } catch (error) {
    console.error("Error fetching stars:", error);
    return null;
  }
};

const Project = async ({ title, description, url, repo }: TProject) => {
  const stars = await getGithubStars(repo);
  return (
    <Link
      href={url}
      target="_blank"
      className="w-full cursor-pointer select-none group hover:opacity-80 transition-opacity flex items-center justify-between"
    >
      <div className="flex-1">
        <div className="flex space-x-3">
          <h2>{title}</h2>
          {stars && (
            <div className="flex items-center text-neutral-600 dark:text-neutral-400 text-sm">
              <Star className="h-3 w-3 mr-1" />
              <span>{stars}</span>
            </div>
          )}
        </div>
        <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>
      <div className="w-14 flex justify-end">
        <ArrowUpRight className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
      </div>
    </Link>
  );
};
