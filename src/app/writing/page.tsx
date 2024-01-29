import { generateLinkForPostId, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default async function WritingPage() {
  const posts = getSortedPostsData();
  return (
    <main>
      <Link href="/" className="mb-4 block">
        Home
      </Link>
      <h1 className="text-lg font-medium">Writing</h1>
      <ul className="list-disc pl-4 mt-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <Link href={generateLinkForPostId(post.id)}>{post.title}</Link>
            </li>
          ))
        ) : (
          <p>No posts yet.</p>
        )}
      </ul>
    </main>
  );
}
