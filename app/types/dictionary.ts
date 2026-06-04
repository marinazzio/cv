import en from "../../dictionaries/en.json";

// Dictionary shape derived from the English source of truth. All locales share
// the same structure (enforced by the i18n parity test), so this type applies
// to every locale's dictionary.
export type Dictionary = typeof en;

export type JobEntry = Dictionary["experience"]["jobs"][number];
