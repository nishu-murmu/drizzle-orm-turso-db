import { auth } from "auth";
import { redirect } from "next/navigation";
import React from "react";

const ProtectedLayout = async ({ children }: any) => {
  const session = await auth();
  if (!session?.user.id) {
    redirect("/login");
  }
  return <div>{children}</div>;
};

export default ProtectedLayout;
