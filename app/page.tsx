import { BlogPosts } from "app/components/posts";
import { ExternalLink } from "./components/external-link";
import { Projects } from "./components/projects";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Nico Albanese
      </h1>
      <p className="dark:text-neutral-100 text-neutral-900">
        Currently working on the{" "}
        <ExternalLink href="https://sdk.vercel.ai">AI SDK</ExternalLink> at{" "}
        <ExternalLink href="https://vercel.com">Vercel</ExternalLink>. Created{" "}
        <ExternalLink href="https://kirimase.dev">Kirimase</ExternalLink>, the
        fastest way to start{" "}
        <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>{" "}
        applications. Previously investing in pre-seed startups at{" "}
        <ExternalLink href="https://ascension.vc">Ascension</ExternalLink>.
        Studied at USC, HKUST and Bocconi. Unfortunate Arsenal fan. Below
        average sense of humor.
      </p>
      <div className="my-12">
        <h2 className="text-xl pb-4">Projects</h2>
        <p className="mb-4 dark:text-neutral-100 text-neutral-900">
          I like to build things.
        </p>
        <Projects homePage />
      </div>
      <div className="my-12">
        <h2 className="text-xl pb-4">Writing</h2>
        <p className="mb-4 dark:text-neutral-100 text-neutral-900">
          I occasionally write about things that the things I build.
        </p>
        <BlogPosts />
      </div>
    </section>
  );
}
