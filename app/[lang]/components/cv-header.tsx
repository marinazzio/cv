"use client";

import EMail from "./email";
import Phone from "./phone";
import Userpic from "./userpic";
import LinkedIn from "./linked-in";
import { useDictionary } from "@/app/providers/dictionary-provider";

import AreasOfExpertise from "./areas-of-expertise";

// import dynamic from "next/dynamic";

// const DownloadPdf = dynamic(() => import("./download-pdf"), { ssr: false });

export default function CvHeader() {
    const dictionary = useDictionary() as any;

    return (
        <header className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
            <Userpic />

            <h1 className="text-4xl font-light">{dictionary["cv-header"].name}</h1>
            <p className="mt-2">
                <EMail /> | <Phone /> | <LinkedIn />
            </p>

            <hr className="my-6 border-t border-gray-300"></hr>

            <AreasOfExpertise />

        </header>
    );
}
