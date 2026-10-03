import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Shahid Khan Ghouri — LLB Candidate, Hazara University";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const fonts = join(process.cwd(), "app", "_fonts");
  const [serif, sans] = await Promise.all([
    readFile(join(fonts, "SourceSerif4-SemiBold.ttf")),
    readFile(join(fonts, "Inter-Regular.ttf")),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#faf7f0",
        color: "#1b1f2a",
        fontFamily: "Inter",
        border: "16px solid #fffdf8",
      }}
    >
      <div
        style={{
          fontSize: 24,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#5a5f6b",
          marginBottom: 28,
        }}
      >
        LLB Candidate · Hazara University
      </div>
      <div
        style={{
          fontFamily: "Source Serif",
          fontSize: 96,
          fontWeight: 600,
          lineHeight: 1.05,
        }}
      >
        Shahid Khan Ghouri
      </div>
      <div
        style={{
          width: 96,
          height: 3,
          background: "#7a1f2b",
          marginTop: 36,
          marginBottom: 36,
        }}
      />
      <div
        style={{
          fontSize: 30,
          color: "#5a5f6b",
          maxWidth: 940,
          lineHeight: 1.4,
        }}
      >
        Legal research, case-law analysis, and constitutional and human rights
        research.
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 64,
          left: 80,
          fontSize: 26,
          color: "#7a1f2b",
        }}
      >
        shahidkhanghouri.com
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Source Serif", data: serif, weight: 600, style: "normal" },
        { name: "Inter", data: sans, weight: 400, style: "normal" },
      ],
    },
  );
}
