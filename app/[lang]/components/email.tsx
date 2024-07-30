import Link from "next/link";
import strings from "@/dictionaries/common.json"
// import CopyToClipboard from "./copy-to-clipboard";

export default function EMail() {
    const email = strings["contacts"].email;

    return (
        <>
        E-Mail: <Link href={`mailto:${email}`} className="text-yellow-300">{email}</Link>
        {/* <CopyToClipboard text={email} /> */}
        </>
    );
}
