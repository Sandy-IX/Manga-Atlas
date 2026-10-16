export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center">

      <div className="fixed inset-0 -z-10 bg-zinc-950">

        <div
          className="absolute inset-0 scale-110 bg-cover bg-center blur-2xl"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-contain"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <section className="flex w-full flex-col items-center px-6 py-10 text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">Yomiro</h1>

        <h2 className="mt-4 text-xl text-zinc-300 sm:text-2xl">
          Discover your next favorite manga.
        </h2>

        <p className="mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
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