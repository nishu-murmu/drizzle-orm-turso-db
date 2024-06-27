"use server";

import { db } from "@/db";
import { users_table } from "@/db/schemas/users";

export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  const user = db
    .insert(users_table)
    .values({ name, email, password })
    .returning();
};
