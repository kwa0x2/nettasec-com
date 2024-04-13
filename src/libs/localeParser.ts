import en from "@/locales/en.json";
import { useRouter } from "next/router";

const locales = { en };

class LocaleParser {
  public get(
    name: keyof typeof locales.en,
    args?: { [param: string]: string },
  ): string {
    const locale = locales.en;
    let str = locale[name];

    if (!str)
      return `string not found for ${name} in ${
        "en"
      }, please contact the developer with contact@nettasec.com.`;

    if (args) {
      for (const key in args) {
        str = str.replace(`{${key}}`, args[key]);
      }
    }

    return str;
  }
}

export function useLocaleParser() {
  const parser = new LocaleParser();
  return parser;
}