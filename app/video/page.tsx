import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo Video",
  description: "A demo of the FAQ page.",
};

export default function VideoPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Demo Video
      </h1>
      <video controls src="/demo.webm" className="w-full rounded-lg" />
    </section>
  );
}
