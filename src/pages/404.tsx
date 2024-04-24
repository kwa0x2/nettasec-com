import { Layout } from "@/components/Layout";
import { NextPage } from "next";
import { useLocaleParser } from "@/libs/localeParser";
import React from "react";
import { Button } from "@/components/ui/button";

const Custom404: NextPage = () => {
  const parser = useLocaleParser();
  return (
    <Layout title="404">
      <section>
        <div className="border-b border-[#383838] h-screen flex flex-col items-center justify-center relative text-[#fff]">
          <h2 className="text-[300px] mb-4"> {parser.get("404Title")}</h2>
          <p className="mb-4">{parser.get("404Text")}</p>
          <Button
            variant="outline_red"
            className="font-semilight p-7 lg:w-auto text-md mt-8 bg-transparent w-full"
            type="submit"
            scrollTo="hero"
          >
            {parser.get("404ButtonText")}
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Custom404;
