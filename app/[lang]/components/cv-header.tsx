"use client";

import EMail from "./email";
import Phone from "./phone";
import LinkedIn from "./linked-in";
import { useDictionary } from "@/app/providers/dictionary-provider";

// import dynamic from "next/dynamic";

// const DownloadPdf = dynamic(() => import("./download-pdf"), { ssr: false });

export default function CvHeader() {
    const dictionary = useDictionary() as any;

    return (
        <header className="text-center py-10 theme-primary theme-primary-text">
            <h1 className="text-4xl font-light">{dictionary["cv-header"].name}</h1>
            <p className="mt-2">
                <EMail /> | <Phone /> | <LinkedIn />
            </p>
            {/* <div className="mt-4">
                <DownloadPdf />
            </div> */}
        </header>
    );
}
