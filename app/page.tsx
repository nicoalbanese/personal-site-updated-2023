import { BlogPosts } from "app/components/posts";
import { ExternalLink } from "./components/external-link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Nico Albanese
      </h1>
      <p className="mb-4">
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
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
