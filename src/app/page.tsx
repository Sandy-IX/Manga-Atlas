export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center">
      {/* Background layers: fixed to the screen, behind everything */}
      <div className="fixed inset-0 -z-10 bg-zinc-950">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center blur-2xl"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <section className="flex flex-col items-center px-6 py-10 text-center">
        <h1 className="text-5xl font-bold text-white">Manga Atlas</h1>

        <h2 className="mt-4 text-2xl text-zinc-300">
          Discover your next favorite manga.
        </h2>

        <p className="mt-4 max-w-xl text-zinc-400">
          Explore manga, manhwa, and manhua from different worlds and find your
          next story to get lost in.
        </p>

        <a
          href="/browse"
          className="mt-8 rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-500"
        >
          Browse Manga
        </a>
      </section>
    </main>
  );
}