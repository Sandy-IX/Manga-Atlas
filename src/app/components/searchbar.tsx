"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar({onSearch}){
    const [search, setSearch] = useState("");
    const router = useRouter();

    function handleSearch(){
        if (!search.trim()){
            router.push("/browse");
            return;
        }

        router.push(`/browse?q=${encodeURIComponent(search.trim())}`);
    }

    return(
        <div className="flex gap-2">
        < input type="text" 
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white outline-none focus:border-purple-500"
        placeholder="Search manga..." 
        onChange={(event)=> setSearch(event.target.value)}
        onKeyDown={(event) => {
            if (event.key === "Enter") handleSearch();
        }}
         />

        <button 
        onClick={handleSearch}
        className="rounded-lg border border-purple-500 px-4 py-2 text-sm text-white hover:bg-purple-500/20"
        >
        Search
        </button>

        </div>
    );
}