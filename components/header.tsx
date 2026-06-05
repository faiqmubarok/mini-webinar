"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";

interface NavbarProps {
  type: "before" | "after" | "home";
}

export default function Navbar({ type }: NavbarProps) {
  const pathname = usePathname();

  if (type === "before") {
    return (
      <nav className="w-full bg-[#333] text-white py-4 px-6 flex justify-between items-center select-none">
        <div className="font-bold text-lg">Sebelum Optimasi (❌ Before)</div>
        <div className="flex gap-6">
          {/* ❌ TIDAK ada active state & highlight. Semua link terlihat sama */}
          <Link href="/" className="text-gray-300 hover:text-white text-sm">
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white text-sm"
          >
            About
          </Link>
        </div>
      </nav>
    );
  }

  if (type === "after") {
    return (
      <nav className="w-full border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50 py-4 px-6 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <span className="font-heading font-bold text-lg bg-linear-to-r from-primary to-violet-400 bg-clip-text text-transparent">
            Sesudah Optimasi (✅ After)
          </span>
        </div>
        <div className="flex items-center gap-1">
          {/* ✅ Menggunakan usePathname() untuk active highlight state */}
          <Link
            href="/"
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
              pathname === "/"
                ? "bg-secondary text-secondary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
              pathname === "/about"
                ? "bg-secondary text-secondary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            About
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <header className="w-full border-b border-border bg-background/60 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group font-heading font-extrabold text-xl tracking-tight bg-linear-to-r from-primary via-indigo-500 to-violet-600 bg-clip-text text-transparent"
        >
          <Sparkles className="size-5 text-primary animate-pulse" />
          <span>UXLab.</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/before"
            className="text-xs font-semibold text-muted-foreground hover:text-destructive transition-colors animate-in fade-in slide-in-from-right-2"
          >
            Sebelum Optimasi
          </Link>
          <Link
            href="/after"
            className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors animate-in fade-in slide-in-from-right-4"
          >
            Sesudah Optimasi
          </Link>
        </div>
      </div>
    </header>
  );
}
