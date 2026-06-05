import { Github } from "@/assets/icons/github";
import { Google } from "@/assets/icons/google";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HeroPanel } from "./hero-panel";
import RegisterForm from "./register-form";

export default function AfterPage() {
  return (
    <main className="w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden min-h-svh">
      <HeroPanel />

      <div className="bg-background flex flex-col justify-center p-8 md:p-10 relative w-full max-w-lg mx-auto">
        {/* Heading */}
        <div className="mb-7">
          <h1 className="font-heading text-2xl font-bold text-foreground leading-tight">
            Buat akun Anda
          </h1>
          <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
            Bergabung dengan ribuan pengguna yang sudah mempercayakan
            produktivitas mereka kepada UXLab.
          </p>
        </div>

        {/* Social login */}
        <div className="flex flex-col md:flex-row gap-2.5">
          <Button variant={"outline"} aria-label="Google">
            <Google />
            Lanjutkan dengan Google
          </Button>
          <Button variant={"outline"} aria-label="Github">
            <Github />
            Lanjutkan dengan Github
          </Button>
        </div>

        <div className="flex items-center gap-3 my-4">
          <Separator className="flex-1" />
          <span className="text-xs text-muted-foreground font-medium px-1">
            atau
          </span>
          <Separator className="flex-1" />
        </div>

        <RegisterForm />

        {/* Footer */}
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Sudah punya akun?{" "}
          <span className="text-primary font-semibold hover:underline cursor-pointer underline-offset-4">
            Masuk
          </span>
        </p>

        <p className="mt-3 text-center text-[10px] text-muted-foreground leading-relaxed">
          Dengan mendaftar, Anda menyetujui{" "}
          <span className="underline underline-offset-2 cursor-pointer hover:text-muted-foreground">
            Syarat &amp; Ketentuan
          </span>{" "}
          dan{" "}
          <span className="underline underline-offset-2 cursor-pointer hover:text-muted-foreground">
            Kebijakan Privasi
          </span>{" "}
          kami.
        </p>
      </div>
    </main>
  );
}
