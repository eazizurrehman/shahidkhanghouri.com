import { env } from "@/env";

export async function GET() {
  const upstream = await fetch(`${env.CV_LINK}/export?format=pdf`, {
    cache: "no-store",
  }).catch(() => null);

  if (!upstream?.ok || !upstream.body) {
    return new Response("Could not fetch the CV.", { status: 502 });
  }

  return new Response(upstream.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Shahid Khan Ghouri - CV.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
