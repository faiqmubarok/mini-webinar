import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export function HeroPanel() {
  return (
    <div className="relative hidden lg:flex flex-col justify-between overflow-hidden p-10">
      <Image
        src="/banner.webp"
        alt="Abstract gradient visual"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/70" />

      {/* Logo */}
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md">
          <div className="flex size-7 items-center justify-center rounded-lg bg-white/20">
            <Sparkles className="size-4 text-white" />
          </div>

          <span className="font-heading font-semibold text-white">UXLab</span>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="relative z-10">
        <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
          <div className="mb-3 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white">
            UX Best Practice
          </div>

          <blockquote className="mb-5 text-lg leading-relaxed text-white">
            &ldquo;Formulir yang baik bukan hanya soal estetika — ia memandu
            pengguna dengan jelas, meminimalisir kesalahan, dan membangun
            kepercayaan sejak interaksi pertama.&rdquo;
          </blockquote>

          <div className="flex items-center justify-between">
            <div className="flex -space-x-3">
              {[
                "/avatars/avatar-1.webp",
                "/avatars/avatar-2.webp",
                "/avatars/avatar-3.webp",
              ].map((src, index) => (
                <Avatar key={src} className="size-8 border-2 border-white/60">
                  <AvatarImage src={src} alt={`User ${index + 1}`} />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              ))}
            </div>

            <div className="text-right">
              <p className="text-sm font-semibold text-white">2.400+</p>
              <p className="text-xs text-white/70">pengguna aktif bulan ini</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
