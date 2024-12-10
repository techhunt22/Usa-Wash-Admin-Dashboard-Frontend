import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "USA-WASH",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-full bg-background ">{children}</body>
    </html>
  );
}
