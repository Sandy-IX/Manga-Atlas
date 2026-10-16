"use client";
import { useState } from "react";

export default function MangaCard({
  name,
  description,
  genres = [],
  image,
  chapter,
  link,
}: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex w-full flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4 shadow-lg shadow-purple-950/20">
      <div className="aspect-2/3 w-full overflow-hidden rounded-lg bg-zinc-800">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="line-clamp-2 text-lg font-bold text-white">{name}</h2>

        <p className="mt-1 text-sm text-purple-400">
         Latest Chapter: {chapter}
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {genres.map((genre: string) => (
            <span
              key={genre}
              className="rounded-full border border-purple-500/50 px-2 py-0.5 text-xs text-purple-300"
            >
              {genre}
            </span>
          ))}
        </div>

        <p
          className={`mt-2 text-sm leading-6 text-zinc-400 ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {description}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1 w-fit text-sm text-purple-400 hover:text-purple-300"
        >
          {expanded ? "Read less" : "Read more"}
        </button>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 w-fit rounded-lg border border-purple-500 px-4 py-2 text-sm text-white hover:bg-purple-500/20"
        >
          View Manga
        </a>
      </div>
    </div>
  );
}