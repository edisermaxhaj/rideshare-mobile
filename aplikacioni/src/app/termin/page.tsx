"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { sherbimet } from "../../lib/sherbimet";

function FormularTermini() {
  const searchParams = useSearchParams();
  const zgjedhurNgaUrl = searchParams.get("sherbimi") || "Prerje flokësh";

  const [sherbimi, setSherbimi] = useState(zgjedhurNgaUrl);
  const [emri, setEmri] = useState("");
  const [telefoni, setTelefoni] = useState("");
  const [data, setData] = useState("");
  const [ora, setOra] = useState("10:00"); // Shtuam gjendjen për orën
  const [mesazhi, setMesazhi] = useState("");

  function kerkoTermin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMesazhi(
      `Faleminderit ${emri}! Kërkesa jote për ${sherbimi} më datë ${data} në ora ${ora} u regjistrua si në pritje.`,
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h2 className="text-3xl font-bold">Kërko termin</h2>
      <p className="mt-3 text-stone-400">
        Plotëso të dhënat dhe dërgo kërkesën tande.
      </p>

      <form onSubmit={kerkoTermin} className="mt-8 space-y-5">
        <div>
          <label className="mb-2 block font-medium">Emri dhe mbiemri</label>
          <input
            required
            value={emri}
            onChange={(e) => setEmri(e.target.value)}
            className="w-full rounded-lg border border-stone-800 bg-stone-900 p-3 outline-none focus:border-amber-400"
            placeholder="Shkruaj emrin"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Numri i telefonit</label>
          <input
            required
            type="tel"
            value={telefoni}
            onChange={(e) => setTelefoni(e.target.value)}
            className="w-full rounded-lg border border-stone-800 bg-stone-900 p-3 outline-none focus:border-amber-400"
            placeholder="04X XXX XXX"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Shërbimi</label>
          <select
            value={sherbimi}
            onChange={(e) => setSherbimi(e.target.value)}
            className="w-full rounded-lg border border-stone-800 bg-stone-900 p-3 outline-none focus:border-amber-400"
          >
            {sherbimet.map((s) => (
              <option key={s.id} value={s.emri}>
                {s.emri} ({s.cmimi})
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">Data e dëshiruar</label>
            <input
              required
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="w-full rounded-lg border border-stone-800 bg-stone-900 p-3 outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Ora e dëshiruar</label>
            <input
              required
              type="time"
              value={ora}
              onChange={(e) => setOra(e.target.value)}
              className="w-full rounded-lg border border-stone-800 bg-stone-900 p-3 outline-none focus:border-amber-400"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-amber-400 py-3 font-bold text-black hover:bg-amber-300 transition-colors"
        >
          Dërgo kërkesën
        </button>
      </form>

      {mesazhi && (
        <div
          role="status"
          className="mt-6 rounded-xl border border-amber-400/30 bg-amber-400/10 p-5"
        >
          <p className="font-bold text-amber-400">Kërkesa është në pritje!</p>
          <p className="mt-2 text-stone-200">{mesazhi}</p>
          <p className="mt-2 text-sm text-stone-400">
            Telefoni: {telefoni} · Data: {data} · Ora: {ora}
          </p>
        </div>
      )}
    </div>
  );
}

export default function TerminPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">
      <header className="border-b border-stone-800 px-6 py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-amber-400">
            ✂ BERBERI
          </Link>

          <Link
            href="/sherbimet"
            className="text-stone-300 hover:text-white transition-colors"
          >
            Shërbimet
          </Link>
        </div>
      </header>

      <Suspense
        fallback={<div className="p-10 text-center">Duke ngarkuar...</div>}
      >
        <FormularTermini />
      </Suspense>

      <footer className="border-t border-stone-800 px-6 py-6 text-center text-sm text-stone-400">
        © 2026 Berberi · Për stilin tond
      </footer>
    </main>
  );
}
