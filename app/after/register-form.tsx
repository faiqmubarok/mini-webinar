"use client";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, ArrowRight, RotateCcw } from "lucide-react";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const registerSchema = z.object({
  nama: z.string().min(1, "Nama wajib diisi").min(3, "Nama minimal 3 karakter"),
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),
  password: z
    .string()
    .min(1, "Password wajib diisi")
    .min(8, "Password minimal 8 karakter"),
});

type FormValues = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const namaInputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { nama: "", email: "", password: "" },
    reValidateMode: "onChange",
  });

  const onSubmit = (_data: FormValues) => {
    setLoading(true);
    setServerError(null);

    setTimeout(() => {
      setLoading(false);
      setServerError(
        "Email sudah terdaftar. Coba gunakan email lain atau masuk ke akun Anda.",
      );
      toast.error("Terjadi kesalahan saat mendaftar.");
    }, 2000);
  };

  const handleRetry = () => {
    setServerError(null);
    form.reset();

    requestAnimationFrame(() => {
      namaInputRef.current?.focus();
    });
  };

  return (
    <form
      id="register-form"
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-6"
    >
      <FieldGroup>
        {/* Nama */}
        <Controller
          name="nama"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid || undefined}>
              <FieldLabel htmlFor="register-nama">Nama Lengkap</FieldLabel>
              <Input
                {...field}
                id="register-nama"
                placeholder="Contoh: Budi Santoso"
                aria-invalid={fieldState.invalid || undefined}
                ref={(e) => {
                  field.ref(e);
                  namaInputRef.current = e;
                }}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid || undefined}>
              <FieldLabel htmlFor="register-email">Alamat Email</FieldLabel>
              <Input
                {...field}
                id="register-email"
                type="email"
                placeholder="nama@email.com"
                aria-invalid={fieldState.invalid || undefined}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid || undefined}>
              <FieldLabel htmlFor="register-password">Kata Sandi</FieldLabel>
              <Input
                {...field}
                id="register-password"
                type="password"
                placeholder="Minimal 8 karakter"
                aria-invalid={fieldState.invalid || undefined}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      {serverError && (
        <Alert variant="destructive">
          <AlertCircle className="size-4" />
          <AlertTitle>Gagal Mendaftar</AlertTitle>
          <AlertDescription>{serverError}</AlertDescription>
          <AlertAction>
            <Button
              type="button"
              size={"xs"}
              variant="destructive"
              onClick={handleRetry}
            >
              <RotateCcw />
              Coba Lagi
            </Button>
          </AlertAction>
        </Alert>
      )}

      <Button
        type="submit"
        disabled={loading}
        size={"lg"}
        className="w-full font-bold"
      >
        {loading ? (
          <>
            <Spinner />
            Memproses…
          </>
        ) : (
          <>
            Daftar Sekarang
            <ArrowRight className="size-4" />
          </>
        )}
      </Button>
    </form>
  );
};

export default RegisterForm;
