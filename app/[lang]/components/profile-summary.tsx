"use client";

import { useDictionary } from "@/app/providers/dictionary-provider";

export default function ProfileSummary() {
    const dictionary = useDictionary() as any;
    const { title, summary } = dictionary["profile-summary"];

    return (
        <section className="mb-6">
            <h2 className="text-2xl font-semibold theme-border pb-2 mb-4 border-b-2">{title}</h2>
            <p className="theme-secondary theme-secondary-text p-4 rounded">{summary}</p>
        </section>
    )
}
