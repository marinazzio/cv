"use client";

import EMail from "./email";
import Phone from "./phone";
import LinkedIn from "./linked-in";
import { useDictionary } from "@/app/providers/dictionary-provider";

export default function CvHeader() {
    const dictionary = useDictionary();

    return (
        <header className="text-center py-10 theme-primary theme-primary-text">
            <h1 className="text-4xl font-light">{dictionary["cv-header"].name}</h1>
            <p className="mt-2">
                <EMail /> | <Phone /> | <LinkedIn />
            </p>
        </header>
    );
}
