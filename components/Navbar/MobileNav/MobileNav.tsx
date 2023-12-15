"use client";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { FC, useState } from "react";
import NavItem from "../NavItem";
import { Logo } from "@/components/ui/icons";

type INavLinks = {
  title: string;
  children: {
    title: string;
    text: string;
    image?: string;
    href?: string;
    external_link?: string;
  }[];
};

export const MobileNav: FC<{ navLinks: INavLinks[] }> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={handleOpen}
        className="sm:hidden w-9 h-5 flex flex-col items-end justify-between"
      >
        <div
          className={`w-8 h-[2px] bg-white mr-2 transition-all duration-300`}
        />
        <div className={`w-6 h-[2px] bg-white`} />
        <div className={`w-7 h-[2px] bg-white mr-2`} />
      </button>
      <div
        className={`fixed overflow-y-scroll w-screen z-10 inset-0 bg-neutral-900 transition-all duration-500 ${
          isOpen ? "h-screen" : "h-0"
        }`}
      >
        {/* Handle Top */}
        <div className="container h-32">
          <div className="flex items-center justify-between h-full">
            <Link href={"/"}>
              <Logo width={149} height={25} />
            </Link>
            <button
              onClick={handleClose}
              className="sm:hidden w-9 h-5 flex flex-col items-end justify-between"
            >
              <div
                className={`w-8 h-[2px] bg-white mr-2 transition-all duration-300 ${
                  isOpen ? "-rotate-45 origin-top-right  -end-full" : "rotate-0"
                }`}
              />
              {!isOpen && <div className={`w-6 h-[2px] bg-white`} />}

              <div
                className={`w-8 h-[2px] bg-white mr-2 transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 origin-bottom-right -end-full"
                    : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Handle Nav */}
        <div className="mt-10 container">
          <ul className="flex flex-col divide-y">
            {navLinks.map((item) => (
              <MobileNavItem key={item.title} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const MobileNavItem: FC<INavLinks> = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <li key={title} className="py-3 flex flex-col gap-5">
        <button
          onClick={() => setToggle((state) => !state)}
          className="text-xl flex items-center justify-between "
        >
          {title}
          <ChevronRightIcon
            className={
              toggle
                ? "rotate-90 transition-all duration-300"
                : "rotate-0 transition-all duration-300"
            }
          />
        </button>
        <div
          className={`rounded-xl bg-[#ffffffbf] backdrop-blur-xl mt-2 pl-3 ${
            toggle ? "block" : "hidden"
          }`}
        >
          <NavItem data={children} />
        </div>
        {/* {toggle && <NavItem data={children} />} */}
      </li>
    </>
  );
};
