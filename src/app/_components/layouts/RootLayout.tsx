import { auth } from "@/auth";
import React from "react";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  console.log(session, "hdec");
  return <>{children}</>;
};

export default RootLayout;
