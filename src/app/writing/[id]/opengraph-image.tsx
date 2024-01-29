import { getPostData } from "@/lib/posts";
import { ImageResponse } from "next/og";
import NextImage from "next/image";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }: { params: { id: string } }) {
  // Font
  const capitalWords = ["vc", "os"];
  const formattedTitle = params.id
    .split("-")
    .map((word) =>
      capitalWords.includes(word)
        ? word.toUpperCase()
        : word[0].toUpperCase() + word.slice(1),
    )
    .join(" ");

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 28, color: "#71717a" }}>
            nicoalbanese.com/writing
          </span>
          <span
            style={{
              fontSize: 120,
              color: "#407C4A",
              paddingTop: "3rem",
              paddingBottom: "4rem",
              fontWeight: "900",
            }}
          >
            {formattedTitle}
          </span>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      // fonts: [
      //   {
      //     name: "Inter",
      //     data: await interSemiBold,
      //     style: "normal",
      //     weight: 400,
      //   },
      // ],
    },
  );
}
