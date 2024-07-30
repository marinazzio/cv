export default function DownloadPdf() {
    const generatePdf = async () => {
        try {
            const response = await fetch("/api/generate-pdf");

            if (!response.ok) {
                throw new Error(`Failed to generate PDF: ${response.statusText}`);
            } else {
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "cv.pdf";
                a.click();
            }
        } catch (error: any) {
            console.error("Error: ", error);
        }       
    };

    return (
        <button
            className="bg-green text-black-600 px-4 py-2 rounded ml-4"
            onClick={generatePdf}
        >Download PDF
        </button>
    );
}
