"use client";
import React, { useState, useEffect } from "react";
import HomeHero from "@/components/Home/Hero";
import HomeServices from "@/components/Home/Services";
import HomeAbout from "./About";
import HomePlatform from "./Platform";
import HomeContact from "./Contact";
import { SlArrowUp } from "react-icons/sl";
import { animateScroll as scroll } from "react-scroll";
import HomeHighLight from "./Highlight";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if ((window.scrollY / document.documentElement.scrollHeight) * 100 > 15) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    scroll.scrollToTop({
      duration: 900,
      smooth: "easeInOutQuart",
    });
  }

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed hidden left-auto top-auto right-5 bottom-5 z-[100] w-12 h-12 rounded-[50%] bg-[#383838] lg:flex lg:justify-center lg:items-center group transition-all duration-500 ease-in-out hover:bg-[#a44246] ${
          showButton ? "opacity-100" : "opacity-0"
        }`}
        style={{ opacity: showButton ? 1 : 0 }}
      >
        <SlArrowUp className="text-[#d1d1d1]" />
      </button>

      <HomeHero id="hero" />
      <HomeServices />
      <HomeAbout />
      <HomeHighLight />
      <HomePlatform />
      <HomeContact id="contact" />
    </>
  );
}
