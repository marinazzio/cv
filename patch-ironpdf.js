const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'node_modules/@ironsoftware/ironpdf/src/internal/access.ts');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  const result = data.replace(
    'export { IronPdfServiceClient } from "./generated_proto/ironpdfengineproto/IronPdfService";',
    'export type { IronPdfServiceClient } from "./generated_proto/ironpdfengineproto/IronPdfService";'
  );

  fs.writeFile(filePath, result, 'utf8', (err) => {
    if (err) return console.log(err);
  });
});
