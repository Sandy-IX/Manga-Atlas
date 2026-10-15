"use client";
import {useEffect, useState} from "react";
import MangaCard from "../components/mangacard";
export default function Browse(){
    const [manga , setManaga] = useState<any[]>([]);
    useEffect(()=> {
        fetch("https://api.mangadex.org/manga?limit=10&includes%5B%5D=cover_art")
        .then((response) => response.json())
        .then ((data) => {
            setManaga(data.data);
        });
    },[]);
    return(
        <main>
            <h1>Browse Manga</h1>

            {manga.map((item) => (
            <MangaCard
            key ={item.id}
            name = {item.attribute.title.en || "Unknown Title"}
            description={
                item.attribute.description?.en || "No description available"
            }
            type={item.attribute.type || "Unkown"}
            />
        ))}
        </main>
    );
}