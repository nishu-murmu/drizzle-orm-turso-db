"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import RootLayout from "../_components/layouts/RootLayout";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const auth_paths = ["/login"];
  const navigate = useRouter();
  useEffect(() => {
    (async () => {
      // if (auth_paths.includes(path) && user?.id) {
      //   navigate.push("/profile");
      // } else {
      //   navigate.push("/login");
      // }
    })();
  }, [path]);

  return (
    <div>
      <RootLayout>{children}</RootLayout>
      {/* {children} */}
    </div>
  );
};

export default PublicLayout;
