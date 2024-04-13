/* eslint-disable react/jsx-no-comment-textnodes */
import { Layout } from "@/components/Layout";
import { NextPage } from "next";
import { useLocaleParser } from "@/libs/localeParser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const BlogPage: NextPage = () => {
  const router = useRouter();
  const { blog } = router.query;
  const [blogData, setBlogData] = useState<any>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchBlogData = async () => {
      if (blog) {
        try {
          const data = await import(`../../data/blogs/${blog}.json`);
          setBlogData(data.default);
        } catch (error) {
          router.push("/404");
          setBlogData(null);
        }
      }
    };

    fetchBlogData();
  }, [blog]);

  const maxBrightness = 70;
  const brightness = Math.max(50, maxBrightness - scrollPosition);

  const videoStyle = {
    filter: `brightness(${brightness}%)`,
    transition: "filter 1s ease-in-out",
  };

  return (
    <Layout title={blogData ? blogData.title : "404"}>
      <section>
        {blogData && (
          <div className="border-b border-[#383838] min-h-[720px] flex items-center justify-center relative text-[#fff]">
            <Image
              src={blogData.image}
              alt={blogData.imageAlt}
              layout="fill"
              objectFit="cover"
              quality={100}
              style={videoStyle}
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div>
                <h1 className="text-6xl font-medium leading-[80px] mb-10">
                  {blogData.title}
                </h1>
                <span className="uppercase text-xs leading-[16px] tracking-[4px]">
                  posted by {blogData.author}
                </span>
              </div>
            </div>
          </div>
        )}
      </section>
      <section>
        {blogData && (
          <div className="lg:px-80 lg:py-20 flex justify-center lg:flex-row flex-col lg:mb-0 mb-[50px] lg:items-start items-center lg:gap-20">
            <div className="text-[#fff] lg:mt-5 mt-14 px-10">
              <div className="border-b border-[#383838] pb-4 mb-10">
                <p className="text-[#888] text-xs tracking-[1px]">
                  Published{" "}
                  <span className="text-[#fff]">{blogData.publishedDate}</span>
                </p>
              </div>
              {blogData.sections.map((section: any, index: number) => {
                if (section.type === "paragraph") {
                  return (
                    <p className="text-[16px] leading-8 mb-[20px]" key={index}>
                      {section.content}
                    </p>
                  );
                } else if (section.type === "subtitle") {
                  return (
                    <h3
                      className="text-[38px] leading-[48px] font-normal mb-[20px]"
                      key={index}
                    >
                      {section.content}
                    </h3>
                  );
                } else if (section.type === "image") {
                  return (
                    <Image
                      src={section.content}
                      alt={section.alt}
                      width={500}
                      height={500}
                      quality={100}
                      className="opacity-50 w-full h-auto mb-[20px]"
                      priority
                      key={index}
                    />
                  );
                }
              })}
            </div>
            <div>
              <div>
                <div className="flex  relative ">
                  <span className="text-[#383838] text-[30px] leading-10 tracking-[4px] mr-2">
                    //
                  </span>
                  <h4 className="text-[30px] text-[#fff] leading-10 mb-3">
                    About Author
                  </h4>
                  <div className="absolute left-0 top-auto right-auto bottom-0 z-1 w-[48px] h-[2px] -mb-[2px] ml-[32px] bg-[#a44246]"></div>
                </div>
                <div className="border p-8 border-[#383838] w-[270px] h-[270px] flex flex-col items-center justify-center text-center">
                  <div className="border border-[#383838] rounded-full">
                    <Image
                      src={blogData.authorImage}
                      alt={blogData.authorImageAlt}
                      width={100}
                      height={100}
                      className="w-[100px] h-auto max-w-40"
                    />
                  </div>
                  <div className="pt-5 max-w-[250px]">
                    <span className="text-[20px] text-[#fff] leading-8">
                      {blogData.author}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <div className="flex relative">
                  <span className="text-[#383838] text-[30px] leading-10 tracking-[4px] mr-2">
                    //
                  </span>
                  <h4 className="text-[30px] text-[#fff] leading-10 mb-3">
                    Tags
                  </h4>
                  <div className="absolute left-0 top-auto right-auto bottom-0 z-1 w-[48px] h-[2px] -mb-[2px] ml-[32px] bg-[#a44246]"></div>
                </div>
                <div className="border p-8 border-[#383838] w-[270px] h-[270px]">
                  <div className="flex flex-wrap gap-2">
                    {blogData.tags.map((tag: string, index: number) => (
                      <span
                        className="text-[13px] flex text-[#fff] leading-6"
                        key={index}
                      >
                        <div className="text-[#888] mr-[2px]">#</div>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default BlogPage;
