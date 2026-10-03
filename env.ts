import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import "dotenv/config";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(
      ["development", "production"],
      "NODE_ENV is required and must be 'development' or 'production'",
    ),
    CV_LINK: z.url("CV_LINK is required and must be a valid URL"),
  },
  client: {},
  emptyStringAsUndefined: true,
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    CV_LINK: process.env.CV_LINK,
  },
});
