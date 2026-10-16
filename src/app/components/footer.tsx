export default function Footer(){
    return(

<footer className=" px-6 py-4 text-center text-xs text-zinc-500 h-16">
  <p>
    Data and covers by{" "}
    <a
      href="https://mangadex.org"
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-400 hover:text-purple-300"
    >
      MangaDex
    </a>
    . Not affiliated with or endorsed by MangaDex.
  </p>
  <p className="mt-1">© {new Date().getFullYear()} Manga Atlas</p>
</footer>
    );
}