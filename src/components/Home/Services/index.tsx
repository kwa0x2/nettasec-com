import { SiCyberdefenders } from "react-icons/si";
import { GoDatabase } from "react-icons/go";
import { IoShieldCheckmarkOutline, IoShieldOutline } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import { GiRadarSweep } from "react-icons/gi";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaAws } from "react-icons/fa";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { BsBricks } from "react-icons/bs";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { useLocaleParser } from "@/libs/localeParser";

export default function HomeServices() {
  const parser = useLocaleParser();

  const projects = [
    {
      title: parser.get("homeServices1Title"),
      description: parser.get("homeServices1Text"),
      link: "/blog/penetration-testing",
      icon: GiRadarSweep,
    },
    {
      title: parser.get("homeServices2Title"),
      description: parser.get("homeServices2Text"),
      link: "/blog/back-end-development",
      icon: GoDatabase,
    },
    {
      title: parser.get("homeServices3Title"),
      description: parser.get("homeServices3Text"),
      link: "/blog/cybersecurity-solutions",
      icon: IoShieldCheckmarkOutline,
    },
    {
      title: parser.get("homeServices4Title"),
      description: parser.get("homeServices4Text"),
      link: "/blog/waf-security-services",
      icon: BsBricks,
    },
    {
      title: parser.get("homeServices5Title"),
      description: parser.get("homeServices5Text"),
      link: "/blog/cloud-computing",
      icon: FaAws,
    },
    {
      title: parser.get("homeServices6Title"),
      description: parser.get("homeServices6Text"),
      link: "/blog/cybersecurity-consulting",
      icon: LiaHandsHelpingSolid,
    },
  ];

  return (
    <section className="flex flex-col  bg-[#151515]">
      <TracingBeam>
        <div className="pt-28 pb-20 text-center leading-[4rem]">
          <div>
            <span className="text-white text-sm font-light tracking-[0.2em] ">
            {parser.get("homeServicesTitle1")}
            </span>
            <h2 className="text-white font-medium text-5xl">{parser.get("homeServicesTitle2")}</h2>
            <hr className="mt-8 w-[7rem] block mx-auto border-t-[3px] border-[#a44246]" />
          </div>
        </div>
        <div className="">
          <HoverEffect items={projects} />
        </div>
      </TracingBeam>
    </section>
  );
}
