import { Projects } from "app/components/projects";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>
      <p className="mb-4">
        I love building things that can help make life better in any way. I also
        love building things to learn how to use something new. Here are a few
        projects I&apos;ve built or worked on.
      </p>
      <div className="my-8">
        <Projects />
      </div>
    </section>
  );
}
