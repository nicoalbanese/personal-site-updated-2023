import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import rehypeExternalLinks from "rehype-external-links";

export type Post = {
  id: string;
  title: string;
  date: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents) as {
      data: { title?: string; description?: string; date?: string };
    };

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    // @ts-ignore
    if (a.date > b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(rehypeExternalLinks, { rel: ["noreferrer"], target: "_blank" })
  //   .use(html)
  //   .process(matterResult.content);
  // const contentHtml = processedContent.toString();

  const startPoint = fileContents.indexOf("#");
  const markdown = fileContents.slice(startPoint);

  // Combine the data with the id and contentHtml
  return {
    id,
    markdown,
    ...matterResult.data,
  };
}

export const generateLinkForPostId = (id: string) => {
  return `/writing/${id}`;
};
