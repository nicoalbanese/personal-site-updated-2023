import { Talks } from "app/components/talks";

export default function TalksPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Talks
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        A collection of talks I've given at conferences, meetups, and events.
      </p>
      <Talks />
    </section>
  );
}

export const metadata = {
  title: "Talks",
  description: "Conference talks and presentations by Nico Albanese on AI development, full-stack engineering, and developer tools.",
};