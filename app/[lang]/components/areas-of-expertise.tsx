"use client";

import strings from "@/dictionaries/common.json"
import { useDictionary } from "@/app/providers/dictionary-provider";

export default function AreasOfExpertise() {
    const dictionary = useDictionary() as any;
    const areas = strings["areas-of-expertise"];

    return (
        <section className="mt-6">
            <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">{dictionary["areas-of-expertise"].title}</h2>
            <ul className="bg-gray-200 p-4 rounded">
                {areas.map((expertise: string, index: number) => (
                    <li key={index}>{expertise}</li>
                ))}
            </ul>
        </section>
    )
}
