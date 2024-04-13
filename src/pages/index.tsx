import { Layout } from "@/components/Layout";
import { NextPage } from "next";
import { useLocaleParser } from "@/libs/localeParser";
import React from "react";
import HomeHero from "@/components/Home/Hero";
import HomeServices from "@/components/Home/Services";
import HomeAbout from "@/components/Home/About";
import HomePlatform from "@/components/Home/Platform";
import HomeContact from "@/components/Home/Contact";
import HomeHighLight from "@/components/Home/Highlight";
const HomePage: NextPage = () => {
  const parser = useLocaleParser();

  return (
    <>
      <Layout title={parser.get("home")}>
        <HomeHero id="hero" />
        <HomeServices />
        <HomeAbout />
        <HomeHighLight />
        <HomePlatform />
        <HomeContact id="contact" />
      </Layout>
    </>
  );
};

export default HomePage;
