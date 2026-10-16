import Link from "next/link";

export default function About() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
      <h1 className="text-4xl font-bold text-white">About Manga Atlas</h1>

      <p className="mt-4 text-zinc-400">
        Manga Atlas is a simple place to discover manga, manhwa, and manhua. Browse
        random picks, search by title, and sort by popularity, rating, or recent
        updates to find your next story.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-white">What you can do</h2>
      <ul className="mt-3 list-inside list-disc space-y-2 text-zinc-400">
        <li>Browse a fresh, random selection of titles every visit</li>
        <li>Search for a manga by name</li>
        <li>Sort by popularity, rating, newest, and more</li>
        <li>See genres and descriptions at a glance</li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold text-white">Where the data comes from</h2>
      <p className="mt-3 text-zinc-400">
        All manga information and cover art is provided by the{" "}
        <a
          href="https://api.mangadex.org/docs/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300"
        >
          MangaDex API
        </a>
        . Manga Atlas is not affiliated with or endorsed by MangaDex. All titles,
        covers, and descriptions belong to their respective owners, and every
        manga links back to its page on{" "}
        <a
          href="https://mangadex.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300"
        >
          MangaDex
        </a>{" "}
        where you can read it.
      </p>

      <Link
        href="/browse"
        className="mt-10 inline-block rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-500"
      >
        Start Browsing
      </Link>
    </main>
  );
}