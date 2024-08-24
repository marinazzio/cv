"use client";

import { useDictionary } from "@/app/providers/dictionary-provider";
import Job from "./job";

export default function ProfessionalExperience() {
    const dictionary = useDictionary() as any;
    const experience = dictionary["experience"];

    return (
        <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold mt-6 mb-4">{experience.title}</h2>
            {experience.jobs.map((job: any, index: number) => (
                <Job key={index} job={job} />
            ))}
        </section>
    )
}
