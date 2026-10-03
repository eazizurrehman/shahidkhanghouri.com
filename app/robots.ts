import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/mail", "/email", "/whatsapp", "/cv"],
    },
    sitemap: "https://shahidkhanghouri.com/sitemap.xml",
  };
}
