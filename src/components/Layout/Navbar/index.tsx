"use client";
import React, { FC, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { useLocaleParser } from "@/libs/localeParser";

export const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const parser = useLocaleParser();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    return () => {
      const currentPage = window.location.pathname;

      if (currentPage !== `/`) {
        router.push("/");
      }
    };
  };

  return (
    <nav
      className={`text-white py-7 px-10 lg:px-20 flex justify-between lg:bg-gradient-to-b lg:backdrop-blur-none lg:from-black lg:via-transparent lg:to-transparent w-full fixed  z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "backdrop-blur-3xl" : ""
      }`}
    >
      <div className="flex items-center">
        {/* <Image
          src="/nettasec-icon.png"
          className="w-[3rem]"
          width={56}
          height={56}
          alt=""
        /> */}
        <button
          onClick={handleClick()}
          className="text-[#a44246] tracking-widest text-xl font-bold"
        >
          NETTASEC
        </button>
        <div className="lg:border-l border-gray-500 h-8 mx-5"></div>

        <span className="text-[0.6rem] max-w-28 hidden lg:block tracking-wide uppercase font-light">
          {parser.get("slogan")}
        </span>
      </div>

      <div>
        <Button
          variant="outline"
          className="font-semilight p-5 text-l h-9  bg-transparent"
          scrollTo="contact"
        >
          {parser.get("homeButtonText")}
        </Button>
      </div>
    </nav>
  );
};
