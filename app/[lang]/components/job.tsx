export default function Job({ job }: { job: any }) {
    return (
        <div className="bg-gray-200 p-4 rounded mb-4">
            <h3 className="text-xl font-semibold">{job.position}</h3>
            <p>{job.company}</p>
            <p>{job["start-month"]} {job["start-year"]} &mdash; {job["finish-month"]} {job["finish-year"]}</p>
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
