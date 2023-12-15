"use client";
import Link from "next/link";
import React, { FC } from "react";
import PopupComponent from "./PopupComponent";
import MobileNav from "./MobileNav";
import { Logo } from "../ui/icons";
import { INavLinks } from "@/types/generated";

export const Navbar: FC<{ navLinks: INavLinks[] }> = ({ navLinks }) => {
  return (
    <header className="w-full">
      <nav className="container h-32">
        <div className="flex items-center justify-between h-full">
          <Link href={"/"}>
            <Logo width={149} height={25} />
          </Link>
          <div className="hidden sm:flex items-center gap-6">
            {navLinks.map(({ label, childItems: { nodes } }) => (
              <PopupComponent key={label} triggerText={label} content={nodes} />
            ))}
          </div>
          <MobileNav navLinks={navLinks} />
        </div>
      </nav>
    </header>
  );
};
