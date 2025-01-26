import { Projects } from "app/components/projects";
import { ExternalLink } from "../components/external-link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>
      <p className="mb-4">
        I love building things that can help make life better in any way. I also
        love building things to learn how to use something new. I&apos;m lucky
        to spend my days thinking of cool things to build with the <ExternalLink href="https://sdk.vercel.ai">AI SDK</ExternalLink>. Here
        are a few projects I&apos;ve built.
      </p>
      <div className="my-8">
        <Projects />
      </div>
    </section>
  );
}
