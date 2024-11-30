import { Avatar } from "@/components/avatar/Avatar";
import { SideNav } from "../../components/side-nav/SideNav";
import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-full flex">
      <SideNav />
      <div className="flex-1 ml-[20%] ">
        <div className="w-full h-[85px] flex items-end justify-end px-4">
          <Avatar />
        </div>
        {children}
      </div>
    </main>
  );
}
