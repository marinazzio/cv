import "server-only";
import type { Locale } from "./i18n-config";
import type { Dictionary } from "@/app/types/dictionary";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types. Each locale's JSON is
// checked against the shared Dictionary shape via the return type below — no
// assertion — so a structural mismatch is a compile error.
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  (dictionaries[locale] ?? dictionaries.en)();
