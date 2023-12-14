import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { CMS_NAME } from "@/lib/constants";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { getMenuItems } from "@/lib/api";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Next.js Blog Example with ${CMS_NAME}`,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = await getMenuItems();
  console.log(navItems)
  return (
    <html lang="en" className="bg-black text-white" suppressHydrationWarning>
      <body className={montserrat.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
