import { BlogPosts } from "app/components/posts";
import { ExternalLink } from "./components/external-link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Nico Albanese
      </h1>
      <p className="mb-4">
        Currently working at{" "}
        <ExternalLink href="https://vercel.com">Vercel</ExternalLink> on the{" "}
        <ExternalLink href="https://sdk.vercel.ai">AI SDK</ExternalLink>.
        Creator of{" "}
        <ExternalLink href="https://kirimase.dev">Kirimase</ExternalLink>, the
        fastest way to build{" "}
        <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>{" "}
        applications.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
