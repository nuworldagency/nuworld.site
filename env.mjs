import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    EMAIL_HOST: z.string(),
    EMAIL_PORT: z.string().transform((val) => parseInt(val, 10)),
    EMAIL_SECURE: z
      .enum(["true", "false"])
      .transform((value) => value === "true"),
    EMAIL_USER: z.string().email(),
    EMAIL_PASSWORD: z.string(),
    N8N_WEBHOOK_URL: z.string().url(),
    NODE_ENV: z.enum(["development", "production", "test"]).optional(),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_PORT: process.env.EMAIL_PORT,
    EMAIL_SECURE: process.env.EMAIL_SECURE,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    N8N_WEBHOOK_URL: process.env.N8N_WEBHOOK_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
})
