// import { PdfDocument, IronPdfGlobalConfig, WaitForType } from "@ironsoftware/ironpdf";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {

//     IronPdfGlobalConfig.getConfig().licenseKey = "IRONSUITE.DK.WELL.DONE.GMAIL.COM.6412-1A7CE59B6A-BTM3P55P2NBAKJXV-M4TDDFM4WUFB-EJ46XXPA3TIQ-W7Q2CVTFSM6Q-JNVBUEYJDQDX-STKXPJD5FUCL-ONNGDV-T5ORN5BFIS2NEA-DEPLOYMENT.TRIAL-MJDBQP.TRIAL.EXPIRES.28.AUG.2024";

//     const renderOptions = {
//         enableJavaScript: true,
//         // Wait for Javascript
//         waitFor: {
//             type: WaitForType.JavaScript,
//             maxWaitTime: 500,
//             htmlQueryStr: "body",
//         },
//     };

//     try {
//         const pdfFromUrl = await PdfDocument.fromUrl("https://ironpdf.com/", { renderOptions: renderOptions });
//         const pdfBuffer = await pdfFromUrl.saveAsBuffer();

//         res.setHeader("Content-Type", "application/pdf");
//         res.setHeader("Content-Disposition", "attachment; filename=cv.pdf");
//         res.send(pdfBuffer);
//     } catch (error: any) {
//         res.status(500).json({ error: "Failed to generate PDF: " + error.message });
//     }
// }

import { PdfDocument, IronPdfGlobalConfig, WaitForType } from "@ironsoftware/ironpdf";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    IronPdfGlobalConfig.getConfig().licenseKey = process.env.IRONPDF_LICENSE_KEY;

    const renderOptions = {
        enableJavaScript: true,
        // Wait for Javascript
        waitFor: {
            type: WaitForType.JavaScript,
            maxWaitTime: 500,
            htmlQueryStr: "body",
        },
    };

    try {
        const host = req.headers.host;
        const protocol = req.headers['x-forwarded-proto'] || 'http';
        const pdfUrl = `${protocol}://${host}/en`;
        console.log(`Attempting to generate PDF from URL: ${pdfUrl}`);
        const pdfFromUrl = await PdfDocument.fromUrl(pdfUrl, { renderOptions: renderOptions });
        const pdfBuffer = await pdfFromUrl.saveAsBuffer();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "attachment; filename=cv.pdf");
        res.send(pdfBuffer);
    } catch (error: any) {
        console.error("Error generating PDF:", error);
        res.status(500).json({ error: "Failed to generate PDF: " + error.message });
    }
}