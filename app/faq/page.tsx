import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Nico Albanese.",
};

const faqs = [
  {
    question: "What do you currently work on?",
    answer:
      "I work on the AI SDK at Vercel, helping developers build AI-powered applications with ease.",
  },
  {
    question: "What is Kirimase?",
    answer:
      "Kirimase is a tool I created that provides the fastest way to start Next.js applications. It scaffolds projects with best practices and essential configurations out of the box.",
  },
  {
    question: "What is the AI SDK?",
    answer:
      "The AI SDK is an open-source library by Vercel that makes it easy to build AI-powered streaming text and chat UIs with any LLM provider.",
  },
  {
    question: "Where did you study?",
    answer:
      "I studied at USC (University of Southern California), HKUST (Hong Kong University of Science and Technology), and Bocconi University.",
  },
  {
    question: "What did you do before Vercel?",
    answer:
      "Before Vercel, I was investing in pre-seed startups at Ascension, a venture capital firm.",
  },
  {
    question: "Are you available for consulting or freelance work?",
    answer:
      "I'm currently focused on my work at Vercel. The best way to reach me is through my social links.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I primarily work with TypeScript, Next.js, React, and various AI/ML tools and APIs.",
  },
];

export default function FAQPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-neutral-200 dark:border-neutral-800 pb-6">
            <h2 className="text-lg font-medium mb-2 text-neutral-900 dark:text-neutral-100">
              {faq.question}
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
