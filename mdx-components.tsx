import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 className="font-medium text-2xl text-zinc-800 my-4 dark:text-zinc-100">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-medium text-xl text-zinc-800 mt-8 mb-2 dark:text-zinc-100">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-medium text-lg text-zinc-800 mt-8 mb-2 dark:text-zinc-100">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-zinc-500 font-medium text-sm m-0 mb-4 p-0">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-l-[#407C4A] pl-4 italic py-1 my-4 font-light text-zinc-500 dark:text-zinc-300">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-8 text-zinc-600 dark:text-zinc-300">
        {children}
      </ul>
    ),
    p: ({ children }) => <p className="my-4">{children}</p>,
  };
}
