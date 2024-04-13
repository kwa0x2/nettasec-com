import { useEffect, useState, type FC, type ReactNode } from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/dist/client/router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CONFIG } from "@/libs/config";
import { Toaster } from "../ui/toaster";
import { Raleway } from "next/font/google";
import { animateScroll as scroll } from "react-scroll";
import { SlArrowUp } from "react-icons/sl";

export interface ILayout {
  title: string;
  children: ReactNode;
}
const raleway = Raleway({ subsets: ["latin"] });

export const Layout: FC<ILayout> = ({ title, children }) => {
  const router = useRouter();
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
    <main className={`${raleway.className}`}>
      <NextSeo
        title={title}
        canonical={`${CONFIG.SEO.publishDomain}${router.pathname}`}
      />
      <button
        onClick={scrollToTop}
        className={`fixed hidden left-auto top-auto right-5 bottom-5 z-[100] w-12 h-12 rounded-[50%] bg-[#383838] lg:flex lg:justify-center lg:items-center group transition-all duration-500 ease-in-out hover:bg-[#a44246] ${
          showButton ? "opacity-100" : "opacity-0"
        }`}
        style={{ opacity: showButton ? 1 : 0 }}
      >
        <SlArrowUp className="text-[#d1d1d1]" />
      </button>
      <section>
        <Navbar />
        <div>{children}</div>
      </section>
      <Footer />
      <Toaster />
    </main>
  );
};
