import {
  integer,
  sqliteTable,
  text,
  primaryKey,
} from "drizzle-orm/sqlite-core";
import { users } from "./index";

export const books = sqliteTable("books", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  genre: text("genre"),
  user_id: text("user_id").references(() => users.id),
  image: text("image"),
});
