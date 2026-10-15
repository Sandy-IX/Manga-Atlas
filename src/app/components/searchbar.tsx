"use client";

import { useState } from "react";

export default function SearchBar({onSearch}){
    const [search, setSearch] = useState("");

    return(
        <div>
        < input type="text" 
        placeholder="Search manga..." 
        onChange={(event)=> setSearch(event.target.value)}
         />

        <button onClick={()=> onSearch(search)}>
            Search
        </button>

        </div>
    );
}