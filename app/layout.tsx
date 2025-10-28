import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

export const metadata: Metadata = {
  title: "SetKit V2 - Cinema Equipment Database",
  description: "Browse cameras, lenses, and accessories for cinema production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <div className="flex h-screen overflow-hidden bg-[#fafafa]">
          <Sidebar />
          <div className="flex-1 flex flex-column overflow-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
