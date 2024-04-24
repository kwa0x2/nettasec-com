import instance from "@/libs/utils/config";
import { Resend } from 'resend';
import { IContactProps } from "@/models/contact";

const STORAGE_KEY = "forumSubmit";

const getLastFormSubmissionTime = () => {
  const storedTime = localStorage.getItem(STORAGE_KEY);
  return storedTime ? parseInt(storedTime, 10) : 0;
};

const setLastFormSubmissionTime = (time: number) => {
  localStorage.setItem(STORAGE_KEY, time.toString());
};

export const contactService = async (
  contact: IContactProps,
  toast: Function
) => {
  try {
    const currentTime = new Date().getTime();
    const lastFormSubmissionTime = getLastFormSubmissionTime();
    console.log(currentTime - lastFormSubmissionTime >= 10 * 1000);
    if (currentTime - lastFormSubmissionTime >= 10 * 1000) {
      await instance.post("/contact", contact);
      setLastFormSubmissionTime(currentTime);
      toast({
        title: "Thank you for your message!",
        description:
          "Your message has been received, and our team will get back to you shortly.",
      });

    } else {
      toast({
        variant: "destructive",
        title: "Too Many Requests",
        description:
          "Sorry, you are sending too many requests in quick succession. Please slow down and try again later.",
      });
    }
  } catch (error) {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    });
  }
};
