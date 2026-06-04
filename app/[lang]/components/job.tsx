import { useDictionary } from "@/app/providers/dictionary-provider";

export default function Job({ job }: { job: any }) {
    const dictionary = useDictionary() as any;
    const months = dictionary["months"];
    const startMonth = months[job["start-month"]];
    const finishMonth = months[job["finish-month"]];

    return (
        <div className="bg-gray-200 p-4 rounded mb-4">
            <h3 className="text-xl font-semibold">{job.position}</h3>
            <p>{job.company}</p>
            <p>{startMonth} {job["start-year"]} &mdash; {finishMonth} {job["finish-year"]}</p>
            <ul className="list-disc list-inside">
                {
                    job.responsibilities.map((responsibility: string, index: number) => (
                        <li key={index}>{responsibility}</li>
                    ))
                }
            </ul>
        </div>
    );
}
