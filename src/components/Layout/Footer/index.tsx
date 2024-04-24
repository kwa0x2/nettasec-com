"use client";
import { MdOutlineEmail } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { scroller } from "react-scroll";
import { FC } from "react";
import { useRouter } from "next/router";
import { useLocaleParser } from "@/libs/localeParser";

export const Footer: FC = () => {
  const router = useRouter();
  const parser = useLocaleParser();


  const handleClick = (page: string) => {
    return () => {
      const currentPage = window.location.pathname;
      console.log(currentPage)
      if (currentPage === `/`) {
        scroller.scrollTo(page, {
          duration: 900,
          smooth: "easeInOutQuart",
        });
      } else {
        if(page==="contact"){
          router.push("/#contact");
        }else if(page==="hero"){
          router.push("/")
        }
        
      }
    };
  };

  return (
    <div className="bg-gradient-to-b from-[#151515] via-[#0f0f0f] to-[#0f0f0f] pt-12 lg:px-80  border-t border-[#383838] px-12">
      <div className="flex justify-between pt-12 pb-16 ">
        <div>
          <button
            onClick={handleClick("hero")}
            className="text-[#a44246] tracking-widest text-xl font-semibold"
          >
            NETTASEC
          </button>
          <div>
            <p className="text-[#6f6f6f] max-w-44 pb-2 pt-4 text-sm tracking-wide font-normal leading-[1.6rem]">
              {parser.get("slogan")}
            </p>
          </div>
          <div>
            <button
              onClick={handleClick("contact")}
              className="uppercase text-xs font-normal tracking-[4px] group text-[#d1d1d1]"
            >
              <div>{parser.get("footerButtonText")}</div>
              <div className="w-[97%] h-[2px] bg-[#383838] mt-1.5 transition-colors duration-500 group-hover:bg-[#a44246]"></div>
            </button>
          </div>
        </div>
        <div>
          <div>
            <span className="text-[#d1d1d1] font-semibold tracking-widest text-sm flex pb-2 items-center ">
              <MdOutlineEmail className="w-4 h-4 text-[#d1d1d1] pr-1" />
              {parser.get("footerMailText")}
            </span>
            <a
              href="mailto:contact@nettasec.com?subject=Let's%20Talk"
              className="text-[#a44246] text-xs  hover:underline transition-colors duration-300 ease-in-out"
            >
              {parser.get("email")}
            </a>
          </div>
          <div className="pt-4 flex">
            <a target="_blank" href={parser.get("footerInstagramLink")}>
              <CiInstagram className="w-8 h-8 text-[#d1d1d1] transition-all duration-500 ease-in-out  hover:opacity-50" />
            </a>
            <a target="_blank" href={parser.get("footerLinkedinLink")}>
              <CiLinkedin className="w-8 h-8 text-[#d1d1d1] transition-all duration-500 ease-in-out  hover:opacity-50" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t py-8 flex justify justify-center  border-[#383838]">
        <div>
          <span className="text-[12px] text-[#6f6f6f]">
          {parser.get("footerCopyrightText")}
          </span>
        </div>
      </div>
    </div>
  );
};
