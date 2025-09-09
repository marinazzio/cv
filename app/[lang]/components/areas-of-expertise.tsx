"use client";

import strings from "@/dictionaries/common.json"
import { useDictionary } from "@/app/providers/dictionary-provider";

export default function AreasOfExpertise() {
    const dictionary = useDictionary() as any;
    const areas = strings["areas-of-expertise"];

    return (
        <section className="mt-6">
            <h2 className="text-2xl font-semibold theme-border pb-2 mb-4 border-b-2">{dictionary["areas-of-expertise"].title}</h2>
            <ul className="theme-secondary theme-secondary-text p-4 rounded">
                {areas.map((expertise: string, index: number) => (
                    <li key={index}>{expertise}</li>
                ))}
            </ul>
        </section>
    )
}
