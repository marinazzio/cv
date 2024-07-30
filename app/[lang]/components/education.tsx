"use client";

import { useDictionary } from "@/app/providers/dictionary-provider";

export default function Education() {
    const dictionary = useDictionary() as any;

    return (
        <section className="mb-6">
            <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">Education</h2>
            <div className="bg-gray-200 p-4 rounded mb-4">
                <h3 className="text-xl font-semibold">{dictionary.education.degree} | {dictionary.education.specialization}</h3>
                <p>{dictionary.education.institution}</p>
                <p>{dictionary.education["start-year"]} - {dictionary.education["finish-year"]}</p>
            </div>
        </section>

    )
}
