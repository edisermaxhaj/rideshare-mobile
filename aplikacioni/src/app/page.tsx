import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">
      <header className="border-b border-stone-800 px-6 py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <h1 className="text-2xl font-bold text-amber-400">✂ BERBERI</h1>
          <Link
            href="/termin"
            className="rounded-full bg-amber-400 px-5 py-2 font-semibold text-black"
          >
            Kërko termin
          </Link>
        </div>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-140px)] max-w-5xl flex-col justify-center px-6 py-16">
        <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-amber-400">
          Stili yt. Kujdesi ynë.
        </p>
        <h2 className="max-w-2xl text-5xl font-extrabold leading-tight md:text-7xl">
          Dukja jote fillon këtu.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-stone-300">
          Zgjidhe shërbimin tënd të preferuar dhe kërko termin online, shpejt
          dhe lehtë.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/sherbimet"
            className="rounded-lg bg-amber-400 px-7 py-3 font-bold text-black hover:bg-amber-300"
          >
            Shiko shërbimet
          </Link>
        </div>
      </section>

      <footer className="border-t border-stone-800 px-6 py-6 text-center text-sm text-stone-400">
        © 2026 Berberi · Për stilin tënd
      </footer>
    </main>
  );
}
