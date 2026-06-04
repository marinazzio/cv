const fs = require('fs');
const path = require('path');

// IronPDF ships its compiled `.js` + `.d.ts` AND its raw `.ts` source side by
// side inside node_modules. TypeScript module resolution prefers a `.ts` file
// over its `.d.ts` sibling, so Next ends up type-checking IronPDF's ~370
// internal source files. Those don't compile against this project's TypeScript
// / @types/node versions (e.g. `fs.promises.rmdir` recursive option, non-generic
// protobuf type defs), which breaks the build, and `skipLibCheck` can't help
// because these are `.ts`, not `.d.ts`.
//
// Fix: delete the raw `.ts` source (keeping every `.js` runtime file and its
// `.d.ts` types). Resolution then falls back to the `.d.ts`, which skipLibCheck
// skips. Every `.ts` here has a verified `.js` + `.d.ts` sibling, so nothing is
// lost. Runs on postinstall, so it re-applies after each install.

const srcDir = path.join(__dirname, 'node_modules/@ironsoftware/ironpdf/src');

function stripTsSources(dir) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch (err) {
    if (err.code === 'ENOENT') return; // IronPDF not installed — nothing to do.
    throw err;
  }

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      stripTsSources(full);
    } else if (entry.name.endsWith('.ts') && !entry.name.endsWith('.d.ts')) {
      fs.rmSync(full);
    }
  }
}

stripTsSources(srcDir);
