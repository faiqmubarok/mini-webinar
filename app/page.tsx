import Link from "next/link";
import { X, Check, BookOpen, Layers, MonitorPlay } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/header";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";

interface DemoCardProps {
  type: "before" | "after";
}

function DemoCard({ type }: DemoCardProps) {
  const isBefore = type === "before";

  if (isBefore) {
    return (
      <Card className="flex flex-col justify-between border-border bg-card/30 backdrop-blur-xs hover:bg-card/50 transition-all duration-300 shadow-sm relative overflow-hidden group hover:border-destructive/30">
        <div className="absolute top-0 right-0 w-24 h-24 bg-destructive/5 rounded-bl-full pointer-events-none transition-all duration-300 group-hover:scale-110" />

        <CardHeader className="px-6 pt-4">
          <div className="flex items-center justify-between mb-2">
            <Badge
              variant="outline"
              className="border-destructive/20 bg-destructive/5 text-destructive font-semibold"
            >
              Anti-Pattern
            </Badge>
            <X className="size-5 text-destructive/60" />
          </div>
          <CardTitle className="text-2xl font-bold font-heading">
            Before UX
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            Form pendaftaran konvensional dengan UX mentah: minim interaksi,
            tanpa feedback proses, layout kaku, dan penanganan error yang tidak
            ramah pengguna.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 px-6">
          <Separator className="my-4" />
          <ul className="text-sm text-muted-foreground space-y-3">
            <li className="flex items-start gap-2.5">
              <X className="size-4 text-destructive shrink-0 mt-0.5" />
              <span>Lebar layout statis px (tidak responsif di mobile)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <X className="size-4 text-destructive shrink-0 mt-0.5" />
              <span>
                Gambar hero dengan tag{" "}
                <code className="text-xs bg-muted px-1 py-0.5 rounded">
                  &lt;img&gt;
                </code>{" "}
                biasa tanpa optimasi
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <X className="size-4 text-destructive shrink-0 mt-0.5" />
              <span>Input form tanpa validasi client-side langsung submit</span>
            </li>
            <li className="flex items-start gap-2.5">
              <X className="size-4 text-destructive shrink-0 mt-0.5" />
              <span>Tombol submit tanpa loading state (instan error)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <X className="size-4 text-destructive shrink-0 mt-0.5" />
              <span>
                Pesan error dari server tidak informatif & tanpa retry
              </span>
            </li>
          </ul>
        </CardContent>

        <CardFooter>
          <Button asChild size={"lg"} className="w-full" variant="destructive">
            <Link href="/before">Buka Sebelum Optimasi</Link>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col justify-between border-primary/20 bg-primary/5 hover:border-primary/40 transition-all duration-300 shadow-md relative overflow-hidden group hover:shadow-lg hover:shadow-primary/5">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full pointer-events-none transition-all duration-300 group-hover:scale-110" />

      <CardHeader className="px-6 pt-4">
        <div className="flex items-center justify-between mb-2">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/10 text-primary font-semibold"
          >
            Best Practice
          </Badge>
          <Check className="size-5 text-primary" />
        </div>

        <CardTitle className="text-2xl font-bold font-heading">
          After UX
        </CardTitle>

        <CardDescription className="text-sm leading-relaxed">
          Formulir pendaftaran modern yang dioptimalkan: validasi real-time,
          indikator progres yang jelas, visual responsif, serta alur penanganan
          error yang memandu user.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 px-6">
        <Separator className="my-4 bg-primary/20" />

        <ul className="text-sm text-muted-foreground space-y-3">
          <li className="flex items-start gap-2.5">
            <Check className="size-4 text-primary shrink-0 mt-0.5" />
            <span>Layout responsif mobile-first dengan Tailwind CSS</span>
          </li>

          <li className="flex items-start gap-2.5">
            <Check className="size-4 text-primary shrink-0 mt-0.5" />
            <span>
              Gambar hero otomatis terkompresi menggunakan{" "}
              <code className="text-xs bg-primary/10 px-1 py-0.5 rounded text-primary">
                next/image
              </code>
            </span>
          </li>

          <li className="flex items-start gap-2.5">
            <Check className="size-4 text-primary shrink-0 mt-0.5" />
            <span>Validasi form client-side real-time via React Hook Form</span>
          </li>

          <li className="flex items-start gap-2.5">
            <Check className="size-4 text-primary shrink-0 mt-0.5" />
            <span>Tombol submit dengan spinner interaktif & delay 2 detik</span>
          </li>

          <li className="flex items-start gap-2.5">
            <Check className="size-4 text-primary shrink-0 mt-0.5" />
            <span>
              Pesan error server informatif dengan aksi recovery &quot;Coba
              Lagi&quot;
            </span>
          </li>
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          asChild
          size="lg"
          className="w-full bg-primary hover:bg-primary/95"
        >
          <Link href="/after">Buka Sesudah Optimasi</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function Home() {
  return (
    <>
      <Navbar type="home" />
      <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
        {/* Decorative Radial Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

        <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-20 max-w-5xl mx-auto w-full relative z-10 gap-16">
          {/* Header Hero Section */}
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
            <Badge
              variant="outline"
              className="px-5 py-2 h-8 border-primary/20 bg-primary/5 text-primary font-medium tracking-wide flex items-center gap-1.5 animate-bounce"
            >
              <MonitorPlay className="size-3.5" />
              LIVE WEBINAR DEMO
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none bg-linear-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent py-1">
              Before vs After{" "}
              <span className="bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                UX Demo
              </span>
            </h1>
            <p className="text-base text-muted-foreground font-light max-w-2xl leading-relaxed">
              Eksplorasi interaktif perbandingan langsung implementasi user
              interface. Pahami pentingnya optimalisasi performa, validasi, dan
              penanganan error yang manusiawi.
            </p>
          </div>

          {/* Demo Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <DemoCard type="before" />
            <DemoCard type="after" />
          </div>

          {/* Webinar Info Badge */}
          <div className="w-full border border-border bg-card/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between shadow-xs -mt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                <BookOpen className="size-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-lg">
                  Materi Webinar UX & React
                </h3>
                <p className="text-sm text-muted-foreground max-w-xl">
                  Demo ini dirancang untuk menunjukkan kepada peserta bagaimana
                  detail-detail kecil seperti loading states, image compression,
                  dan error recovery flow secara drastis meningkatkan kenyamanan
                  pengguna.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Layers className="size-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground font-medium">
                Next.js App Router + shadcn/ui
              </span>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
