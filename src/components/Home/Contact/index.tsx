"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLocaleParser } from "@/libs/localeParser";
import { onContactSubmit } from "@/libs/utils/contact";
import { useToast } from "@/components/ui/use-toast";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface HomeContactProps {
  id: string;
}

const HomeContact: React.FC<HomeContactProps> = ({ id }) => {
  const parser = useLocaleParser();
  const { toast } = useToast();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phone, setPhone] = useState("");
  

  return (
    <div id={id} className="flex flex-col  bg-[#151515] lg:pb-40 pb-10">
      <div className="mt-28 mb-20 text-center leading-[4rem]">
        <div>
          <span className="text-white text-sm font-light tracking-[0.2em] ">
            {parser.get("homeContactTitle1")}
          </span>
          <h2 className="text-white font-medium text-5xl">
            {parser.get("homeContactTitle2")}
          </h2>
          <hr className="my-8 w-[7rem] mx-auto border-t-[3px] border-[#a44246]" />
        </div>
      </div>

      <div className="lg:border lg:border-[#383838] lg:mx-[24rem] mx-[3rem] py-[80px] lg:px-[64px] text-white flex flex-col lg:flex-row">
        <div className="lg:w-[30%]">
          <div>
            <span className=" font-normal text-4xl  leading-[4rem]">
              {parser.get("homeContactTitle3")}
            </span>

            <hr className="mt-4 w-[7rem] block border-t-[3px] border-[#a44246] mb-6" />
            <p className="leading-[24px] text-sm mb-7 text-[#d1d1d1]">
              {parser.get("homeContactText1")}
            </p>
          </div>

          <div>
            <button className="uppercase text-xs font-normal tracking-[4px] group ">
              <Link href="mailto:contact@nettasec.com?subject=Let's%20Talk">
                {parser.get("email")}
              </Link>
              <div className="w-[98%] h-[2px] bg-[#383838] mt-1 transition-colors duration-500 group-hover:bg-[#a44246]"></div>
            </button>
          </div>
        </div>

        <div className="mt-5 lg:mt-0 lg:ml-20 lg:w-[70%]">
          <form onSubmit={(e) => onContactSubmit(e, toast)}>
            <div className="flex flex-col lg:flex-row mb-5">
              <Input
                className="flex-grow w-full lg:mr-2 mb-5 lg:mb-0"
                type="text"
                placeholder={parser.get("homeContactYourNameInput")}
                name="full_name"
                required
              />
              <Input
                className="flex-grow w-full lg:ml-2 mb-5 lg:mb-0"
                type="email"
                name="email"
                required
                placeholder={parser.get("homeContactEmailInput")}
              />
            </div>
            <div>
              {/* <PhoneInput
              name="phone_number"
                className="deneme mb-8"
                defaultCountry="tr"
                placeholder="Phone Number"
                value={phone}
                onChange={(phone) => setPhone(phone)
                }
              /> */}
            </div>
            <div>
              <textarea
                className="w-full min-h-[200px] text-[#d1d1d1] max-h-[200px] border-b border-[#5c5c5c] focus:border-[#a44246] hover:border-[#d1d1d1] bg-transparent placeholder-[#d1d1d1] outline-none pt-[5px] pb-[2px] transition-colors duration-500 text-sm pl-0"
                placeholder={parser.get("homeContactDescriptionInput")}
                required
                name="description"
              />
            </div>
            <Button
              variant="outline_red"
              className="font-semilight p-7 lg:w-auto text-md mt-16 bg-transparent  w-full"
              type="submit"
            >
              {parser.get("homeContactSubmitButton")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
