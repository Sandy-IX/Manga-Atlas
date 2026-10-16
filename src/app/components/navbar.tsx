import Link from "next/link";
import Image from "next/image";
import SearchBar from "./searchbar";
import mascot from "../images/mascot.png";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
      <Link href="/" className="shrink-0">
        <Image src={mascot} alt="Yomiro" className="h-12 w-auto sm:h-20" />
      </Link>

      <div className="flex w-full items-center gap-4 sm:w-auto sm:gap-6">
        <SearchBar />

        <Link
          href="/browse"
          className="text-zinc-400 transition hover:text-purple-400"
        >
          Browse
        </Link>

        <Link
          href="/about"
          className="text-zinc-400 transition hover:text-purple-400"
        >
          About
        </Link>
      </div>
    </nav>
  );
}