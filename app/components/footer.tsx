import { ArrowUpIcon, ArrowUpRightIcon } from "lucide-react";

const FooterLink = ({ href, children }) => (
  <a
    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
    rel="noopener noreferrer"
    target="_blank"
    href={href}
  >
    <ArrowUpRightIcon className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
    <p className="ml-2 h-7">{children}</p>
  </a>
);

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <FooterLink href="https://github.com/nicoalbanese">github</FooterLink>
        </li>
        <li>
          <FooterLink href="https://x.com/nicoalbanese10">twitter</FooterLink>
        </li>
        <li>
          <FooterLink href="https://www.youtube.com/@nicoalbanese10">youtube</FooterLink>
        </li>
      </ul>
      {/* <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} MIT Licensed
      </p> */}
    </footer>
  );
}
