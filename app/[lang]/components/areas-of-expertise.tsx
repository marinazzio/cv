"use client";

import strings from "@/dictionaries/common.json"
import { useDictionary } from "@/app/providers/dictionary-provider";

export default function AreasOfExpertise() {
    const dictionary = useDictionary() as any;
    const areas = strings["areas-of-expertise"];

    return (
        <section className="flex flex-col">
            <h2 className="text-gray-700 uppercase font-bold tracking-wider mb-2">{dictionary["areas-of-expertise"].title}</h2>
            <ul>
                {areas.map((expertise: string, index: number) => (
                    <li className="mb-2" key={index}>{expertise}</li>
                ))}
            </ul>
        </section>
    )
}
