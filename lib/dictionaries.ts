import { es } from "./dictionaries/es";
import { en } from "./dictionaries/en";

const dictionaries = {
  es: () => import("./dictionaries/es").then((module) => module.es),
  en: () => import("./dictionaries/en").then((module) => module.en),
};

export type Dictionary = typeof es;
export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]?.() ?? dictionaries.es();
};
