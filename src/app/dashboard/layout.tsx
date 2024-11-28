// DashboardLayout.tsx
import SideNav from "@/components/Side-Nav/SideNav";
import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full min-h-screen flex">
      <SideNav />
      <div className="flex-1 ml-[15%] ">{children}</div>{" "}
    </main>
  );
}
