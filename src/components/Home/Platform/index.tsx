import Image from "next/image";

export default function HomePlatform() {
  return (
    <div className="border-t border-b border-[#383838] h-auto flex flex-wrap  bg-[#151515]">
      <div className="lg:w-[calc(25%)] w-[calc(50%)]   lg:h-[200px] h-[200px] lg:border-b-0 border-b  border-[#383838]   flex items-center justify-center">
        <a target="_blank" href="https://aws.amazon.com/">
          <Image
            src="/images/aws.png"
            alt=""
            width={110}
            height={100}
            className="hover:opacity-80 lg:w-[130px]  w-[120px] transition duration-300 ease-in-out lg:opacity-50 opacity-80"
          />
        </a>
      </div>
      <div className="lg:w-[calc(25%)] w-[calc(50%)] lg:h-[200px] h-[200px]  border-l lg:border-b-0 border-b  border-[#383838]  flex items-center justify-center">
        <a target="_blank" href="https://owasp.org/">
          <Image
            src="/images/owasp.png"
            alt=""
            width={200}
            height={200}
            className="hover:opacity-80 lg:w-[200px]  w-[150px] transition duration-300 ease-in-out lg:opacity-50 opacity-80"
          />
        </a>
      </div>
      <div className="lg:w-[calc(25%)] w-[calc(50%)] lg:h-[200px] h-[200px] lg:border-l border-[#383838] flex items-center justify-center">
        <a target="_blank" href="https://portswigger.net/">
          <Image
            src="/images/portswigger.png"
            alt=""
            width={300}
            height={310}
            className="hover:opacity-80 lg:w-[300px]  w-[160px] transition duration-300 ease-in-out lg:opacity-50 opacity-80"
          />
        </a>
      </div>
      <div className="lg:w-[calc(25%)] w-[calc(50%)]  h-[200px] border-l border-[#383838] flex items-center justify-center">
        <a target="_blank" href="https://www.tenable.com/">
          <Image
            src="/images/tenable.png"
            alt=""
            width={300}
            height={200}
            className="hover:opacity-80 lg:w-[300px]  transition duration-500 ease-in-out lg:opacity-50 opacity-80"
          />
        </a>
      </div>
    </div>
  );
}
