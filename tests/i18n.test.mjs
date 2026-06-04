import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const locales = ["en", "ru"];

const load = (name) =>
  JSON.parse(readFileSync(join(root, "dictionaries", `${name}.json`), "utf8"));

// Recursively collect the set of dotted key paths, ignoring leaf values.
const keyPaths = (obj, prefix = "") =>
  Object.entries(obj).flatMap(([k, v]) => {
    const path = prefix ? `${prefix}.${k}` : k;
    return v && typeof v === "object" && !Array.isArray(v)
      ? keyPaths(v, path)
      : [path];
  });

test("every locale dictionary is valid JSON", () => {
  for (const locale of locales) {
    assert.equal(typeof load(locale), "object");
  }
  assert.equal(typeof load("common"), "object");
});

test("all locale dictionaries share the same key structure", () => {
  const reference = keyPaths(load(locales[0])).sort();
  for (const locale of locales.slice(1)) {
    const actual = keyPaths(load(locale)).sort();
    assert.deepEqual(
      actual,
      reference,
      `dictionaries/${locale}.json keys diverge from ${locales[0]}.json`,
    );
  }
});
