"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReCAPTCHA from "react-google-recaptcha";
import { useToast } from "@/components/ui/use-toast";
import React, { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { useLocaleParser } from "@/libs/localeParser";

interface HomeContactProps {
  id: string;
}

const HomeContact: React.FC<HomeContactProps> = ({ id }) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [full_name, setFullName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast();
  const parser = useLocaleParser()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.warn("asdas", process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
    recaptchaRef.current?.execute();
  };

  const onReCAPTCHAChange = async (captchaCode: string | null) => {
    if (captchaCode) {
      const formData = {
        full_name,
        phone_number,
        email,
        description,
        recaptchaResponse: captchaCode,
      };

      try {
        const response = await fetch("https://api.nettasec.com/api/contact", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          if (responseData.rowInserted > 0) {
            toast({
              title: "Thank you for your message!",
              description:
                "Your message has been received, and our team will get back to you shortly.",
            });
          } else {
            throw new Error("Failed to submit form.");
          }
        } else {
          throw new Error("Failed to submit form.");
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      } finally {
        recaptchaRef.current?.reset();
      }
    } else {
      console.log("recaptcha error");
      toast({
        variant: "destructive",
        title: "Error Occurred!",
        description: "Please complete the reCAPTCHA verification.",
      });
    }
  };


  return (
    
    <div id={id} className="flex flex-col  bg-[#151515] lg:pb-40 pb-10">
      <div className="mt-28 mb-20 text-center leading-[4rem]">
        <div>
          <span className="text-white text-sm font-light tracking-[0.2em] ">
            {parser.get("homeContactTitle1")}
          </span>
          <h2 className="text-white font-medium text-5xl">{parser.get("homeContactTitle2")}</h2>
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
              {parser.get("homeContactEmail")}
              </Link>
              <div className="w-[98%] h-[2px] bg-[#383838] mt-1 transition-colors duration-500 group-hover:bg-[#a44246]"></div>
            </button>
          </div>
        </div>

        <div className="mt-5 lg:mt-0 lg:ml-20 lg:w-[70%]">
          <form onSubmit={handleSubmit}>
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={onReCAPTCHAChange}
            />
            <div className="flex flex-col lg:flex-row mb-5">
              <Input
                className="flex-grow w-full lg:mr-2 mb-5 lg:mb-0"
                type="text"
                value={full_name}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={parser.get("homeContactYourNameInput")}
                required
              />
              <Input
                className="flex-grow w-full lg:ml-2 mb-5 lg:mb-0"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder={parser.get("homeContactEmailInput")}
              />
            </div>
            <div>
              <Input
                className="w-full mb-8"
                type="text"
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder={parser.get("homeContactPhoneInput")}
              />
            </div>
            <div>
              <textarea
                className="w-full min-h-[200px] max-h-[200px] border-b border-[#5c5c5c] focus:border-[#a44246] hover:border-[#d1d1d1] bg-transparent placeholder-[#d1d1d1] outline-none pt-[5px] pb-[2px] transition-colors duration-500 text-sm pl-0"
                placeholder={parser.get("homeContactDescriptionInput")}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
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
