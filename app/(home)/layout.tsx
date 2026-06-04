import "@/global.css";

// Root layout for the non-localized landing route (`/`). The `[lang]` segment
// has its own root layout, so each route emits a single <html>/<body>.
export default function HomeRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
