"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function SortBar() {
  const router = useRouter();
  const params = useSearchParams();
  const hasSearch = !!params.get("q");
  const sort = params.get("sort") || (hasSearch ? "relevance" : "random");

  const options = [
    hasSearch
      ? { value: "relevance", label: "Relevance" }
      : { value: "random", label: "Random" },
    { value: "followedCount", label: "Popularity" },
    { value: "rating", label: "Rating" },
    { value: "latestUploadedChapter", label: "Recently updated" },
    { value: "createdAt", label: "Newest" },
    { value: "title", label: "A to Z" },
  ];

  function change(value: string) {
    const next = new URLSearchParams(params.toString());
    next.set("sort", value);
    router.push(`/browse?${next.toString()}`);
  }

  return (
    <select
      value={sort}
      onChange={(e) => change(e.target.value)}
      className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white outline-none focus:border-purple-500"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}