import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useState, useEffect } from "react";
import { Highlight } from "@/components/ui/hero-highlight";
import { useLocaleParser } from "@/libs/localeParser";
interface HomeHeroProps {
  id: string;
}

const HomeHero: React.FC<HomeHeroProps> = ({ id }) => {
  const parser = useLocaleParser();
  const [scrollPosition, setScrollPosition] = useState(0);

  const words = [
    {
      text: parser.get("homeHeroTitle").split(" ")[0],
      className:
        "text-sm font-light leading-[3rem] tracking-[0.5em] text-white",
    },
    {
      text: parser.get("homeHeroTitle").split(" ")[1],
      className:
        "text-sm font-light leading-[3rem] tracking-[0.5em] text-white",
    },
  ];


  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const maxBrightness = 75;
  const brightness = Math.max(50, maxBrightness - scrollPosition);

  const videoStyle = {
    filter: `brightness(${brightness}%)`,
    transition: "filter 1s ease-in-out", 
  };


  return (
    <div id={id} className="top-0 h-screen w-full overflow-hidden">
      <video
        className="object-cover w-full h-full filter brightness-75"
        autoPlay
        muted
        loop
        style={videoStyle} 
      >
        <source src="/videos/stockvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-1/2 left-1/8 lg:pl-20 pl-10 transform -translate-y-1/2 text-white text-left max-h-[200px]">
        <h1 className="perspective-1000 max-w-[40rem] text-2xl md:text-6xl font-medium leading-12 md:leading-14 tracking-wider lg:pb-10 pb-6 " >
          <span className="text-sm font-light lg:leading-[3rem] tracking-[0.5em] ">
            <TypewriterEffect words={words} />‍
          </span>
          <span className="lg:text-6xl  text-3xl lg:leading-[3rem] leading-[2.5rem]">
          {parser.get("homeHeroText").split(" ").slice(0, -1).join(" ")} <Highlight >{parser.get("homeHeroText").split(" ").pop()}</Highlight>
          </span>
        </h1>

        <Button
          variant="outline_red"
          className="font-semilight p-7 text-xl  bg-transparent"
          scrollTo="contact"
        >
          {parser.get("homeButtonText")}
        </Button>
      </div>
    </div>
  );
};

export default HomeHero;