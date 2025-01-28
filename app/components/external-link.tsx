import Link from "next/link";
import type { LinkProps } from "next/link";

interface ExternalLinkProps extends LinkProps {
  children: React.ReactNode;
}

export const ExternalLink = ({ children, ...props }: ExternalLinkProps) => {
  return (
    <Link {...props} target="_blank" className={"hover:text-primary underline [text-underline-offset:2px] decoration-1 decoration-neutral-600 dark:decoration-neutral-400 hover:decoration-primary"} rel="noopener noreferrer">
      {children}
    </Link>
  );
};
