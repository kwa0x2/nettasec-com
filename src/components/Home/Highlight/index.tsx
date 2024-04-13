import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { useLocaleParser } from "@/libs/localeParser";
import { motion } from "framer-motion";

export default function HomeHighLight() {
  const parser = useLocaleParser()

  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl lg:text-5xl font-bold text-[#d1d1d1] max-w-4xl  leading-relaxed lg:leading-snug text-center "
      >
{parser.get("homeSloganText").split(" ").slice(0, -7).join(" ")}{' '}
        <Highlight className="text-white">
        {parser.get("homeSloganText").split(" ")[7]}
        </Highlight>
        {' '}{parser.get("homeSloganText").split(" ").slice(8, 15).join(" ")}
      </motion.h1>
    </HeroHighlight>
  );
}
