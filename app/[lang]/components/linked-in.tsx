import strings from "@/dictionaries/common.json";
import Link from "next/link";

export default function LinkedIn() {
    const linkedIn = strings["contacts"].linkedIn;

    return (
        <>
        LinkedIn: <Link href={linkedIn} className="text-yellow-300">{linkedIn}</Link>
        </>
    );
}
