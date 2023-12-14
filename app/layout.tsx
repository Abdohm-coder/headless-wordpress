import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { CMS_NAME } from "@/lib/constants";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Next.js Blog Example with ${CMS_NAME}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
