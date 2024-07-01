import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

console.log(
  process.env.TURSO_DATABASE_URL,
  process.env.TURSO_AUTH_TOKEN,
  "check"
);
const client = createClient({
  url: process.env.TURSO_DATABASE_URL as string,
  authToken: process.env.TURSO_AUTH_TOKEN as string,
});

export const db = drizzle(client);
