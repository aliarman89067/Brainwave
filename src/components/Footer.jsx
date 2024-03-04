import React from "react";
import Section from "./Section";
import { socials } from "../constants";

export default function Footer() {
  return (
    <Section crosses className={`!px-0 !py-10`}>
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm-flex-col">
        <p className="caption text-n-4 block">
          © {new Date().getFullYear()}. All Right Reseved
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              href={item.url}
              key={item.id}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
}
