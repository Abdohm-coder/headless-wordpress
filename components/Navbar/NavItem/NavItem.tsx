"use client";
import { INavLinks } from "@/types/generated";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface IProps {
  data: INavLinks["childItems"]["nodes"];
}

export const NavItem: FC<IProps> = ({ data }) => {
  return (
    <>
      {data.map(({ label, description, target, url }) =>
        target ? (
          <a
            target={target}
            rel="noreferrer"
            className="p-2 rounded-xl hover:bg-black/5 transition-all duration-300"
            href={url}
          >
            <div className="flex flex-col">
              <span className="font-medium text-base text-black flex items-center gap-1">
                {label} <ExternalLinkIcon />
              </span>
              <span className="font-medium text-sm text-gray-500">
                {description}
              </span>
            </div>
          </a>
        ) : (
          <Link
            className="p-2 rounded-xl hover:bg-black/5 transition-all duration-300"
            href={url}
          >
            {" "}
            <div className="flex flex-col">
              <span className="font-medium text-base text-black">{label}</span>
              <span className="font-medium text-sm text-gray-500">
                {description}
              </span>
            </div>
          </Link>
        )
      )}
    </>
  );
};
