import Link from "next/link";
import { sherbimet } from "@/lib/sherbimet";

export default function SherbimetPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">
      <header className="border-b border-stone-800 px-6 py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-amber-400">
            ✂ BERBERI
          </Link>
          <Link
            href="/termin"
            className="rounded-full bg-amber-400 px-5 py-2 font-semibold text-black"
          >
            Kërko termin
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-2 text-4xl font-bold">Shërbimet tona</h2>
        <p className="mb-10 text-stone-400">
          Zgjidhni shërbimin që ju përshtatet më së miri.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {sherbimet.map((s) => (
            <article
              key={s.id}
              className="flex flex-col justify-between rounded-2xl border border-stone-800 bg-stone-900 p-6"
            >
              <div>
                <div className="mb-5 text-3xl">✂️</div>
                <h3 className="text-2xl font-bold">{s.emri}</h3>
                <p className="mt-3 text-stone-400">{s.pershkrimi}</p>
              </div>

              <div className="mt-8">
                <p className="mb-4 text-3xl font-bold text-amber-400">
                  {s.cmimi}
                </p>
                <Link
                  href={`/termin?sherbimi=${encodeURIComponent(s.emri)}`}
                  className="block w-full rounded-lg border border-amber-400 py-2.5 text-center font-semibold text-amber-400 hover:bg-amber-400 hover:text-black transition-colors"
                >
                  Cakto termin
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-stone-800 px-6 py-6 text-center text-sm text-stone-400">
        © 2026 Berberi · Për stilin tënd
      </footer>
    </main>
  );
}
