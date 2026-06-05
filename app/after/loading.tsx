import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden min-h-svh">
      {/* ── LEFT: Hero panel skeleton ─────────────────────────────── */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden p-10 bg-muted">
        {/* Logo skeleton */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 w-fit">
            <Skeleton className="size-7 rounded-lg bg-white/20" />
            <Skeleton className="h-4 w-16 bg-white/20" />
          </div>
        </div>

        {/* Bottom card skeleton */}
        <div className="relative z-10">
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl space-y-4">
            <Skeleton className="h-5 w-28 rounded-full bg-white/20" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full bg-white/15" />
              <Skeleton className="h-4 w-5/6 bg-white/15" />
              <Skeleton className="h-4 w-4/6 bg-white/15" />
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="flex -space-x-3">
                {[0, 1, 2].map((i) => (
                  <Skeleton
                    key={i}
                    className="size-8 rounded-full border-2 border-white/60 bg-white/20"
                  />
                ))}
              </div>
              <div className="text-right space-y-1">
                <Skeleton className="h-3.5 w-14 bg-white/20 ml-auto" />
                <Skeleton className="h-3 w-28 bg-white/15 ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT: Form panel skeleton ────────────────────────────── */}
      <div className="bg-background flex flex-col justify-center p-8 md:p-10 w-full max-w-lg mx-auto">
        {/* Heading */}
        <div className="mb-7 space-y-2">
          <Skeleton className="h-7 w-44" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>

        {/* Social buttons */}
        <div className="flex flex-col md:flex-row gap-2.5">
          <Skeleton className="h-10 w-full rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        {/* Separator with "atau" */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-border" />
          <Skeleton className="h-3 w-6" />
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Form fields */}
        <div className="flex flex-col gap-4">
          {[
            { label: 28, input: true },
            { label: 24, input: true },
            { label: 24, input: true },
          ].map((field, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <Skeleton className={`h-3.5 w-${field.label}`} />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
          ))}

          {/* Submit button */}
          <Skeleton className="h-11 w-full rounded-md mt-2" />
        </div>

        {/* Footer text */}
        <div className="mt-4 flex justify-center">
          <Skeleton className="h-3.5 w-44" />
        </div>
        <div className="mt-3 flex justify-center">
          <Skeleton className="h-3 w-64" />
        </div>
      </div>
    </main>
  );
}
