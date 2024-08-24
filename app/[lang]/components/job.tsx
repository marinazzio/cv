export default function Job({ job }: { job: any }) {
    return (
        <div className="mb-6">
            <h3 className="text-xl font-semibold">{job.position}</h3>
            <p className="text-gray-700 mr-2">{job.company}</p>
            <p className="text-gray-700">{job["start-month"]} {job["start-year"]} &mdash; {job["finish-month"]} {job["finish-year"]}</p>
            <ul className="list-disc list-inside mt-2">
                {
                    job.responsibilities.map((responsibility: string, index: number) => (
                        <li key={index}>{responsibility}</li>
                    ))
                }
            </ul>
        </div>
    );
}
