import Header from "@/components/Header";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Presto - Convert ideas into realistic drawings",
  description: "Transform your ideas with Artificial Intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx("flex flex-col min-h-screen bg-slate-100")}>
        <Header />
        {children}
        <div className="flex-grow" />
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
