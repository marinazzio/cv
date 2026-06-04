// Pure type-level import: no runtime value is created, so en.json can never be
// pulled into a consumer's client bundle.
type EnDictionaryModule = typeof import("../../dictionaries/en.json");
type RawDictionary = EnDictionaryModule extends { default: infer D }
  ? D
  : EnDictionaryModule;

// Widen JSON literal types (e.g. the string "January", fixed-length arrays) to
// their base structural types. This makes every locale's dictionary assignable
// to Dictionary without a cast, so a structural divergence (a missing/renamed
// key) is a real type error rather than something an assertion would hide.
type DeepWiden<T> = T extends (infer U)[]
  ? DeepWiden<U>[]
  : T extends object
    ? { [K in keyof T]: DeepWiden<T[K]> }
    : T extends string
      ? string
      : T extends number
        ? number
        : T extends boolean
          ? boolean
          : T;

// Dictionary shape derived from the English dictionary. The locales are kept in
// sync structurally; differences are only in values (and array lengths, e.g.
// per-job responsibilities), which the widening above intentionally allows.
export type Dictionary = DeepWiden<RawDictionary>;

export type JobEntry = Dictionary["experience"]["jobs"][number];
