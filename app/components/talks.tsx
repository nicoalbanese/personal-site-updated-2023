import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type TTalk = {
  title: string;
  event: string;
  url: string;
  videoId: string;
  description?: string;
};

const talks: TTalk[] = [
  {
    title: "Build a Coding Agent with the AI SDK",
    event: "Vercel Ship 2025",
    url: "https://www.youtube.com/watch?v=1bx-eosOOkE",
    videoId: "1bx-eosOOkE",
    description: "Using AI SDK 5, Vercel AI Gateway, and Vercel Sandbox.",
  },
  {
    title: "AI SDK Masterclass: Deep Research Agent",
    event: "AI Engineer Summit 2025",
    url: "https://www.youtube.com/watch?v=kDlqpN1JyIw",
    videoId: "kDlqpN1JyIw",
    description: "Learn how to build a Deep Research Agent with the AI SDK.",
  },
  {
    title: "Build a VC DD Agent in 10 mins with AI SDK 5",
    event: "AI Demo Days London",
    url: "https://www.youtube.com/watch?v=TjAbtsPC-Sw",
    videoId: "TjAbtsPC-Sw",
    description: "Quick demonstration of building an AI agent using AI SDK 5.",
  },
  {
    title: "Multi-Step (Agentic) Generation with the AI SDK",
    event: "Vercel",
    url: "https://www.youtube.com/watch?v=ZmPGr1WHS_s",
    videoId: "ZmPGr1WHS_s",
    description: "Walking through the new maxSteps feature with the AI SDK.",
  },
  {
    title: "Talk to your database with Next.js and the AI SDK",
    event: "Nico Albanese",
    url: "https://www.youtube.com/watch?v=EW35xR3jPsE",
    videoId: "EW35xR3jPsE",
    description:
      "Quick walkthrough of the Natural Language PostgreSQL template.",
  },
  {
    title: "Introduction to AI SDK",
    event: "Datastax Berlin Meetup",
    url: "https://www.youtube.com/watch?v=R7xDgMfXKiE",
    videoId: "R7xDgMfXKiE",
    description:
      "Technical deep dive into structured extraction, validation, generative UI, and more.",
  },
  {
    title: "Building AI Applications with the AI SDK",
    event: "Vercel",
    url: "https://www.youtube.com/watch?v=8xZ__S9rzZU",
    videoId: "8xZ__S9rzZU",
    description:
      "Getting started with AI development in the modern JavaScript ecosystem.",
  },
  {
      title: "AI SDK 3.1",
      event: "Vercel",
      description: "Learn about AI SDK 3.1.",
      url: "https://www.youtube.com/watch?v=UDm-hvwpzBI",
      videoId: "UDm-hvwpzBI",
    },
];

export const Talks = ({ homePage }: { homePage?: boolean }) => {
  const show = 3;
  const t = homePage ? talks.slice(0, show) : talks;

  return (
    <div>
      {t.map((talk, index) => (
        <div key={index} className="mb-4">
          <Talk {...talk} />
        </div>
      ))}
      {homePage && (
        <Link href="/talks" className="block mt-6 hover:opacity-80">
          <div className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
            View all talks
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </Link>
      )}
    </div>
  );
};

const Talk = ({ title, event, url, videoId, description }: TTalk) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-4 hover:opacity-75 transition-opacity duration-300"
    >
      <div className="flex-shrink-0 w-32 h-18 relative overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
        <Image
          src={thumbnailUrl}
          alt={`${title} thumbnail`}
          fill
          className="object-cover"
          sizes="128px"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="w-full flex space-x-0 justify-between items-start">
          <div className="flex-1">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {title}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {event}
            </p>
            {description && (
              <p className="sm:block hidden text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                {description}
              </p>
            )}
          </div>
          <ArrowUpRight className="h-4 w-4 text-neutral-600 dark:text-neutral-400 flex-shrink-0 ml-2" />
        </div>
      </div>
    </Link>
  );
};
