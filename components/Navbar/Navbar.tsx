"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.svg";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import PopupComponent from "./PopupComponent";
import MobileNav from "./MobileNav";

type INavLinks = {
  label: string;
  childItems: {
    nodes: {
      label: string;
      description: string;
      url: string;
      target: "_blank" | null;
    }[];
  };
};

const navLinks: INavLinks[] = [
  {
    title: "Our Apps",
    children: [
      {
        title: "Procreate for iPad",
        text: "Sketch. Paint. Create.",
        image:
          "https://procreate-assets-cdn.procreate.art/img/procreate.8901aaa.png",
        href: "/",
      },
      {
        title: "Procreate Dreams",
        text: "Edit. Animate. Create.",
        image:
          "https://procreate-assets-cdn.procreate.art/img/dreams.f2bc29c.png",
        href: "/",
      },
      {
        title: "Procreate Pocket",
        text: "Sketch & Paint on iPhone.",
        image:
          "https://procreate-assets-cdn.procreate.art/img/pocket.13aba37.png",
        href: "/",
      },
    ],
  },
  {
    title: "Explore",
    children: [
      {
        title: "Stories & Insight",
        text: "Discover the latest news.",
        href: "/",
      },
      {
        title: "Education",
        text: "Learn with Procreate.",
        external_link: "/",
      },
      {
        title: "Press",
        text: "Media and editorial resources.",
        href: "/",
      },
    ],
  },
  {
    title: "Support",
    children: [
      {
        title: "Support",
        text: "Get your questions answered.",
        external_link: "/",
      },
      {
        title: "Community",
        text: "Share your art with the world.",
        external_link: "/",
      },
      {
        title: "Beginners Series",
        text: "Learn by doing.",
        href: "/",
      },
    ],
  },
];

export const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="container h-32">
        <div className="flex items-center justify-between h-full">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={149} height={25} />
          </Link>
          <div className="hidden sm:flex items-center gap-6">
            {navLinks.map(({ title, children }) => (
              <PopupComponent
                key={title}
                triggerText={title}
                content={children}
              />
            ))}
          </div>
          <MobileNav navLinks={navLinks} />
        </div>
      </nav>
    </header>
  );
};
