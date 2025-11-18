"use client";

import { useDictionary } from "@/app/providers/dictionary-provider";
import Job from "./job";

export default function ProfessionalExperience() {
    const dictionary = useDictionary() as any;
    const experience = dictionary["experience"];

    return (
        <section className="mb-6">
            <h2 className="text-2xl font-semibold theme-border pb-2 mb-4 border-b-2">{experience.title}</h2>
            {experience.jobs.map((job: any, index: number) => (
                <Job key={index} job={job} />
            ))}
        </section>
    )
}
