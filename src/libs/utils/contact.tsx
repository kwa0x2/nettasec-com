import { IContactProps } from "@/models/contact";
import { contactService } from "@/services/contact";
import { FormEvent } from "react";

export const onContactSubmit = async (e: FormEvent<HTMLFormElement>, toast: Function) => {

  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const contact: IContactProps = {
    full_name: formData.get("full_name") as string,
    email: formData.get("email") as string,
    phone_number: formData.get("phone_number") as string,
    description: formData.get("description") as string,
  };

  await contactService(contact,toast);
};
