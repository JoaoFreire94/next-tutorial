import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className="p-8">
          <Link href="/" className="p-8">
            Home
          </Link>
          <Link href="/in-theatres" className="p-8">
            In Theatres
          </Link>
          <Link href="/popular-movies" className="p-8">
            Popular Movies
          </Link>
          <Link href="/highest-rated-movies" className="p-8">
            Highest Rated Movies
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
