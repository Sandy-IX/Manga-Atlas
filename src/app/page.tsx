export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        
        <h1 className="text-5xl font-bold">
          Manga Atlas
        </h1>

        <h2 className="mt-4 text-2xl text-zinc-300">
          Discover your next favorite manga.
        </h2>

        <p className="mt-4 max-w-xl text-zinc-400">
          Explore manga, manhwa, and manhua from different worlds
          and find your next story to get lost in.
        </p>

        <a
          href="/browse"
          className="mt-8 rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-500"
        >
          Browse Manga
        </a>

      </section>

      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">
          Your next story is waiting.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
          Manga Atlas brings manga, manhwa, and manhua together
          so you can discover new stories without jumping between
          different places.
        </p>
      </section>

    </main>
  );
}