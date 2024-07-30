"use client";

import { useState } from "react";

export default function CopyToClipboard({
    text,
} : {
    text: string;
}) {
    const [isCopied, setIsCopied] = useState(false);

    return (
        <>
        <button
            onClick={() => {
                navigator.clipboard.writeText(text);
                setIsCopied(true);
            }}
            className="text-yellow-300"
        >
            {isCopied ? "Copied" : "Copy"}
        </button>
        </>
    );
}
