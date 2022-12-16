import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="w-100 h-100 text-center ">
        <nav className="p-8 bg-blue-900">
          <Link
            href="/"
            //className={`p-6 text-4xl text-white hover:text-yellow-400 ${
            //  pathName === "/" && "text-yellow-400"
            //}`}
            className="p-6 text-4xl text-white hover:text-yellow-400 "
          >
            <b>Home</b>
          </Link>
          <Link
            href="/highest-rated-movies/1"
            //className={`p-6 text-4xl text-white hover:text-yellow-400 ${
            //  pathName === "/highest-rated-movies" && "text-yellow-400"
            //}`}
            className="p-6 text-4xl text-white hover:text-yellow-400 "
          >
            <b>Highest Rated</b>
          </Link>
          <Link
            href="/in-theatres/1"
            //className={`p-6 text-4xl text-white hover:text-yellow-400 ${
            //  pathName === "/in-theatres" && "text-yellow-400"
            //}`}
            className="p-6 text-4xl text-white hover:text-yellow-400 "
          >
            <b>In Theatres</b>
          </Link>
          <Link
            href="/upcoming-movies/1"
            //className={`p-6 text-4xl text-white hover:text-yellow-400 ${
            //  pathName === "/upcoming-movies" && "text-yellow-400"
            //}`}
            className="p-6 text-4xl text-white hover:text-yellow-400 "
          >
            <b>Upcoming</b>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
