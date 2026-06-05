"use client";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react";

export default function BeforePage() {
  const [error, setError] = useState<string | null>(null);

  // ❌ CPU-heavy synchronous blocking in render (blocks main thread for 250ms)
  if (typeof window !== "undefined") {
    const start = Date.now();
    while (Date.now() - start < 250) {
      Math.random();
    }
  }

  // ❌ Menggunakan document.title secara manual — Next.js punya metadata API
  useEffect(() => {
    document.title = "Daftar";

    // ❌ Layout thrashing (forced reflow) in useEffect to tank TBT / INP
    const start = Date.now();
    let i = 0;
    while (Date.now() - start < 200) {
      const width = document.body.offsetWidth;
      document.body.style.setProperty("--dummy-var", `${width + i}`);
      i++;
    }
  }, []);

  // ❌ Console.log yang tertinggal di production
  console.log("BeforePage rendered");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");

    setTimeout(() => {
      setError("Something went wrong");
    }, 2000);
  };

  return (
    // ❌ Pakai <div> bukan <main> — semantik HTML buruk untuk SEO
    // ❌ Menggunakan font CDN secara inline tanpa optimasi Next.js font
    // Menyebabkan layout shift (FOUT) dan overhead koneksi eksternal
    <div
      className="w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden min-h-svh font-sans"
      style={{
        ["--font-sans" as any]: "'Geist', sans-serif",
        ["--font-heading" as any]: "'Inter', sans-serif",
      }}
    >
      {/* ❌ Google Fonts CDN link loaded inside the page layout */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800&display=swap"
      />
      {/* ── LEFT: Hero panel ─────────────────────────────────────── */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden p-10">
        {/* ❌ <img> tanpa width/height — menyebabkan layout shift (CLS buruk) */}
        {/* ❌ Format .jpeg — lebih berat dari .webp */}
        {/* ❌ Tidak ada lazy/priority hint */}
        <img
          src="/banner.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.7))",
          }}
        />

        {/* Logo */}
        <div className="relative z-10">
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-2"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              className="flex items-center justify-center rounded-lg"
              style={{
                width: 28,
                height: 28,
                background: "rgba(255,255,255,0.2)",
              }}
            >
              {/* ❌ Inline SVG tanpa aria-hidden — screen reader membaca ini */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              </svg>
            </div>
            <span
              style={{
                fontWeight: 600,
                color: "white",
                fontSize: 14,
              }}
            >
              UXLab
            </span>
          </div>
        </div>

        {/* Bottom Card */}
        <div className="relative z-10">
          <div
            className="p-6"
            style={{
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div
              className="inline-flex items-center mb-3"
              style={{
                borderRadius: 9999,
                background: "rgba(255,255,255,0.15)",
                padding: "4px 12px",
                fontSize: 12,
                fontWeight: 500,
                color: "white",
              }}
            >
              UX Best Practice
            </div>

            <blockquote
              style={{
                marginBottom: 20,
                fontSize: 18,
                lineHeight: 1.6,
                color: "white",
              }}
            >
              &ldquo;Formulir yang baik bukan hanya soal estetika — ia memandu
              pengguna dengan jelas, meminimalisir kesalahan, dan membangun
              kepercayaan sejak interaksi pertama.&rdquo;
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex" style={{ marginLeft: 12 }}>
                {/* ❌ <img> tanpa alt, tanpa width/height eksplisit proper, tanpa fallback */}
                {[
                  "/avatars/avatar-1.jpeg",
                  "/avatars/avatar-2.jpeg",
                  "/avatars/avatar-3.jpeg",
                ].map((src) => (
                  <img
                    key={src}
                    src={src}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      border: "2px solid rgba(255,255,255,0.6)",
                      marginLeft: -12,
                    }}
                  />
                ))}
              </div>

              <div className="text-right">
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  2.400+
                </p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
                  pengguna aktif bulan ini
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT: Form panel ────────────────────────────────────── */}
      <div className="bg-white flex flex-col justify-center p-8 md:p-10 w-full max-w-lg mx-auto">
        {/* ❌ Heading skip: pakai <h3> langsung tanpa <h1>/<h2> — Lighthouse SEO & a11y error */}
        <div className="mb-7">
          <h6 style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.2 }}>
            Buat akun Anda
          </h6>
          <p
            style={{
              fontSize: 14,
              color: "#6b7280",
              marginTop: 6,
              lineHeight: 1.6,
            }}
          >
            Bergabung dengan ribuan pengguna yang sudah mempercayakan
            produktivitas mereka kepada UXLab.
          </p>
        </div>

        {/* Social login — ❌ <button> tanpa accessible name (tanpa aria-label dan teks terbungkus di <span>) */}
        <div className="flex flex-col md:flex-row gap-2.5">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-sm font-medium bg-white hover:bg-gray-50"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-nowrap">Lanjutkan dengan Google</span>
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-sm font-medium bg-white hover:bg-gray-50"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span className="text-nowrap">Lanjutkan dengan Github</span>
          </button>
        </div>

        {/* Separator */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium px-1">atau</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Form — ❌ Tanpa react-hook-form, tanpa Zod, tanpa validasi real-time */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* ❌ <label> tanpa htmlFor — tidak terhubung ke input (a11y issue) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="nama"
              placeholder="Contoh: Budi Santoso"
              className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3.5 py-1 text-sm placeholder:text-gray-400 placeholder:text-sm focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            {/* ❌ Email pakai type="text" bukan type="email" — browser tidak bisa bantu validasi */}
            <label className="text-sm font-medium text-gray-700">
              Alamat Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="nama@email.com"
              className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3.5 py-1 text-sm placeholder:text-gray-400 placeholder:text-sm focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Kata Sandi
            </label>
            <input
              type="password"
              name="password"
              placeholder="Minimal 8 karakter"
              className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3.5 py-1 text-sm placeholder:text-gray-400 placeholder:text-sm focus:outline-none"
            />
          </div>

          {/* ❌ Error: kontras rendah, tanpa icon, tanpa role="alert", tanpa retry */}
          {error && (
            <div className="p-3 bg-red-100 text-red-400 text-xs border border-red-200 rounded-md">
              {error}
            </div>
          )}

          {/* ❌ Tanpa loading spinner, tanpa disabled state saat submit */}
          <button
            type="submit"
            className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-bold mt-2"
          >
            Daftar Sekarang
          </button>
        </form>

        {/* Footer */}
        <p className="mt-4 text-center text-xs text-gray-500">
          Sudah punya akun?{" "}
          {/* ❌ Pakai <span> bukan <a> — tidak bisa diakses keyboard, bukan link semantik */}
          <span className="text-blue-600 font-semibold hover:underline cursor-pointer underline-offset-4">
            Masuk
          </span>
        </p>

        {/* ❌ Kontras teks sangat rendah — gagal WCAG AA */}
        <p className="mt-3 text-center text-[10px] text-gray-400 leading-relaxed">
          Dengan mendaftar, Anda menyetujui{" "}
          <span className="underline underline-offset-2 cursor-pointer hover:text-gray-400">
            Syarat &amp; Ketentuan
          </span>{" "}
          dan{" "}
          <span className="underline underline-offset-2 cursor-pointer hover:text-gray-400">
            Kebijakan Privasi
          </span>{" "}
          kami.
        </p>

        {/* ❌ Forced CSS Reflow Killer and Network bandwidth saturator */}
        <style>{`
          @keyframes reflow-killer {
            0% { margin-left: 0px; }
            50% { margin-left: 10px; }
            100% { margin-left: 0px; }
          }
          .reflow-element {
            animation: reflow-killer 0.03s infinite;
          }
        `}</style>
        <div className="reflow-element" style={{ width: 1, height: 1, overflow: "hidden", opacity: 0.01 }} />
        
        <div style={{ display: "none" }}>
          <img src="/banner.jpeg?dup=1" />
          <img src="/banner.jpeg?dup=2" />
          <img src="/banner.jpeg?dup=3" />
          <img src="/banner.jpeg?dup=4" />
          <img src="/banner.jpeg?dup=5" />
          <img src="/avatars/avatar-1.jpeg?dup=1" />
          <img src="/avatars/avatar-2.jpeg?dup=1" />
          <img src="/avatars/avatar-3.jpeg?dup=1" />
        </div>
      </div>
    </div>
  );
}
