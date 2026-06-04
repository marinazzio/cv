import "server-only";
import type { Locale } from "./i18n-config";
import type { Dictionary } from "@/app/types/dictionary";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types. Each locale's JSON infers
// its own literal types, so we widen to the shared Dictionary shape here.
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default as Dictionary),
  ru: () => import("./dictionaries/ru.json").then((module) => module.default as Dictionary),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  (dictionaries[locale] ?? dictionaries.en)();
