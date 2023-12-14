'use client'
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface IProps {
  title: string;
  text: string;
  image?: string;
  href?: string;
  external_link?: string;
}

export const NavItem: FC<{ data: IProps[] }> = ({ data }) => {
  return (
    <>
      {data.map(({ href, title, external_link, image, text }) =>
        external_link ? (
          <a
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl hover:bg-black/5 transition-all duration-300"
            href={external_link}
          >
            <div className="flex flex-col">
              <span className="font-medium text-base text-black flex items-center gap-1">
                {title} <ExternalLinkIcon />
              </span>
              <span className="font-medium text-sm text-gray-500">{text}</span>
            </div>
          </a>
        ) : (
          href && (
            <Link
              className="p-2 rounded-xl hover:bg-black/5 transition-all duration-300"
              href={href}
            >
              {" "}
              {image ? (
                <div className="flex items-center gap-3">
                  <Image src={image} alt={title} width={42} height={42} />
                  <div className="flex flex-col">
                    <span className="font-medium text-base text-black">
                      {title}
                    </span>
                    <span className="font-medium text-sm text-gray-500">
                      {text}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="font-medium text-base text-black">
                    {title}
                  </span>
                  <span className="font-medium text-sm text-gray-500">
                    {text}
                  </span>
                </div>
              )}
            </Link>
          )
        )
      )}
    </>
  );
};
