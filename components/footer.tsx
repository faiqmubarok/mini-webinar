import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border py-6 text-center text-xs text-muted-foreground relative z-10 bg-background/50 backdrop-blur-xs">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} UXLab Webinar. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link
            href="/about"
            className="hover:text-foreground transition-colors"
          >
            About
          </Link>
          <span className="text-border">|</span>
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
        </div>
      </div>
    </footer>
  );
}
