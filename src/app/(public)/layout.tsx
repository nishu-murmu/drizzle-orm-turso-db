import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  console.log(session, "session");
  if (session?.user?.name) {
    redirect("/profile");
  }
  return <div>{children}</div>;
};

export default PublicLayout;
