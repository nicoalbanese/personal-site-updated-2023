import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nico Albanese",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={inter.className.concat(
          "font-light text-zinc-600 dark:text-zinc-300 dark:bg-zinc-800",
        )}
      >
        <main className="sm:pl-10 sm:py-16 pl-4 py-10 space-y-4 ">
          {children}
        </main>
      </body>
    </html>
  );
}
