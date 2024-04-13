/* eslint-disable @next/next/no-img-element */

import { Button } from "@/components/ui/button";
import { useLocaleParser } from "@/libs/localeParser";
import Image from "next/image";

export default function HomeAbout() {
  const parser = useLocaleParser();

  return (
    <div className="lg:pt-48 lg:pb-0 py-20 px-7 lg:border-0  border-y  border-[#383838]  flex justify-center items-center flex-col lg:flex-row lg:gap-[4.5rem]">
      <div className="relative flex items-center ">
        <div className="z-10 shadow-lg shadow-stone-950">
          <Image width={300} height={300} src="/images/stock1.jpg" alt={""} />
        </div>
        <div className="z-20 shadow-lg shadow-stone-950">
          <Image width={350} height={350} src="/images/stock2.png" alt={""} />
        </div>
      </div>

      <div className="flex flex-col lg:w-1/4 text-white ">
        <div className="lg:mt-0 mt-12  leading-[4rem]">
          <div>
            <span className="text-sm font-light lg:tracking-[0.2em] ">
              {parser.get("homeAboutTitle1")}
            </span>
            <h2 className=" font-medium max-w-[25rem] text-5xl  leading-[4rem]">
              {parser.get("homeAboutTitle2")}
            </h2>
            <hr className="mt-4 mb-6 w-[7rem] border-t-[3px] border-[#a44246]" />
          </div>
        </div>
        <div>
          <p className="text-[#d1d1d1] pb-10">{parser.get("homeAboutText1")}</p>
          <Button
            variant="outline"
            className="font-semilight p-7 text-xl bg-transparent"
            scrollTo="contact"
          >
            {parser.get("homeButtonText")}
          </Button>
        </div>
      </div>
    </div>
  );
}
