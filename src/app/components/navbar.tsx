import Link from "next/link";
import Image from "next/image";
import SearchBar from "./searchbar";
import mascot from "../images/mascot.png";

export default function Navbar(){
    return(
        <nav className="flex items-center justify-between px-6 py-4 ">
            <Link href="/">
            <Image
             src = {mascot}
             alt = "Manga Atlas"
             className="h-20 w-auto"
             priority
             ></Image></Link>

        <div 
        className="flex items-center gap-6">
            <SearchBar />

            <Link href="/browse"
            className="text-zinc-400 transition hover:text-purple-400">
                Browse
                </Link>

            <Link href="/about"
            className="text-zinc-400 transition hover:text-purple-400">
                About
                </Link>

        </div>
        </nav>
    );
}