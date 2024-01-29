import { getAllPostIds, getPostData } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "../../../../mdx-components";
import Link from "next/link";
export async function generateStaticParams() {
  return getAllPostIds();
}

interface MdxParams {
  id: string;
}
function getPost(params: MdxParams) {
  const post = getPostData(params.id);

  return post;
}

export default async function RemoteMdxPage({ params }: { params: MdxParams }) {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  // const markdown = await getPostData()
  const markdown = await getPost(params);
  return (
    <main className="max-w-3xl">
      <Link href="/writing" className="mb-4 block">
        back
      </Link>
      <MDXRemote source={markdown.markdown} components={useMDXComponents({})} />
    </main>
  );
}
