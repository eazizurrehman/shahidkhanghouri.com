import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { ThemeProvider } from "@/app/_components/theme-provider";
import { Toaster } from "@/app/_shadcn/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const title = "Shahid Khan Ghouri | LLB Candidate, Hazara University";
const description =
  "LLB candidate at Hazara University, Mansehra, with experience in legal research, case-law analysis, and constitutional and human rights research.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shahidkhanghouri.com"),
  title,
  description,
  authors: [
    { name: "Shahid Khan Ghouri", url: "https://shahidkhanghouri.com" },
  ],
  keywords: [
    "Shahid Khan Ghouri",
    "LLB",
    "Law Student",
    "Hazara University",
    "Mansehra",
    "Legal Research",
    "Constitutional Law",
    "Human Rights",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Shahid Khan Ghouri",
    locale: "en_GB",
    title,
    description,
    firstName: "Shahid Khan",
    lastName: "Ghouri",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <head>
        <link
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='8' fill='%23faf7f0' stroke='%239a7b4f' stroke-width='4'/><text x='50' y='68' font-family='Georgia,serif' font-size='52' font-weight='600' text-anchor='middle' fill='%237a1f2b'>SG</text></svg>"
          rel="icon"
        />
        <link
          href="/llms.txt"
          rel="alternate"
          title="LLM-friendly version"
          type="text/markdown"
        />
        <noscript>
          <style
            // biome-ignore lint/security/noDangerouslySetInnerHtml: static style
            dangerouslySetInnerHTML={{
              __html: ".reveal{opacity:1}.stagger>*{opacity:1}",
            }}
          />
        </noscript>
      </head>
      <body
        className={`${inter.variable} ${sourceSerif.variable} min-h-dvh max-w-dvw overflow-x-hidden bg-background antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
          enableSystem={false}
        >
          {children}
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
