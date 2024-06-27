import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "sqlite", // "mysql" | "sqlite" | "postgresql"
  schema: "./src/db/schemas",
  driver: "turso",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL as string,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
});
