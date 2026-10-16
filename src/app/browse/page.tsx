"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import MangaCard from "../components/mangacard";
import SortBar from "../components/sortbar";


const API = "/api/manga?limit=24&includes%5B%5D=cover_art";

function BrowseContent() {
  const params = useSearchParams();
  const search = params.get("q")?.trim() || "";
  
  const sort = params.get("sort") || (search ? "relevance" : "random");
  const [manga, setManga] = useState<any[]>([]);

  useEffect(() => {
    const random = sort === "random";
    const order = random ? "followedCount" : sort;
    const direction = sort === "title" ? "asc" : "desc";
    
    const offset = random ? Math.floor(Math.random() * 2000) : 0;

    let url = `${API}&offset=${offset}&order%5B${order}%5D=${direction}`;
    if (search) url += `&title=${encodeURIComponent(search)}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setManga(data.data || []));
  }, [search, sort]);

  return (
    <main className="p-4 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-bold text-white">
          {search ? `Results for "${search}"` : "Browse Manga"}
        </h1>
        <SortBar />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {manga.map((item) => (
          <MangaCard
            key={item.id}
            name={
              item.attributes.title?.en ||
              Object.values(item.attributes.title)[0] ||
              "Unknown Title"
            }
            description={
              item.attributes.description?.en || "No description available"
            }
            genres={
              item.attributes.tags
                ?.filter((tag: any) => tag.attributes.group === "genre")
                .map((tag: any) => tag.attributes.name.en) || []
            }

            image={`/api/cover?id=${item.id}&file=${
              item.relationships.find((rel: any) => rel.type === "cover_art")
                ?.attributes?.fileName
            }`}
            chapter={item.attributes.lastChapter || "Unknown"}
            link={`https://mangadex.org/title/${item.id}`}
          />
        ))}
      </div>
    </main>
  );
}

export default function Browse() {
  return (
    <Suspense fallback={null}>
      <BrowseContent />
    </Suspense>
  );
}