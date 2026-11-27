const promises = [
  {
    title: "Never overbooked",
    description:
      "Every seat is reserved atomically, so two people can never buy the last one.",
    visual: (
      <div className="flex h-[72px] w-full max-w-[220px] items-center gap-2 rounded-lg bg-white px-3 shadow-sm">
        <span className="flex size-8 items-center justify-center rounded bg-muted text-muted-foreground/50">
          <span className="size-3 rounded-full border border-muted-foreground/30" />
        </span>
        <span className="flex size-8 items-center justify-center rounded bg-muted text-muted-foreground/50">
          <span className="size-3 rounded-full border border-muted-foreground/30" />
        </span>
        <span className="flex h-8 items-center gap-1.5 rounded bg-[#15653D] px-2 text-white">
          <span className="text-xs font-semibold">23</span>
        </span>
        <span className="min-w-0">
          <span className="block truncate text-xs font-semibold text-foreground">
            CHA-23
          </span>
          <span className="block truncate text-[10px] text-muted-foreground">
            Held for you · 09:42
          </span>
        </span>
      </div>
    ),
  },
  {
    title: "Secure payments",
    description:
      "Card and mobile banking payments go through SSLCommerz and are verified on our server.",
    visual: (
      <div className="flex h-[72px] w-full max-w-[220px] items-center justify-center gap-2 rounded-lg bg-white px-3 shadow-sm">
        <span className="text-[10px] font-bold italic text-[#E2136E]">
          bKash
        </span>
        <span className="text-[10px] font-bold text-[#F6921E]">Nagad</span>
        <span className="text-[10px] font-bold italic text-[#1A1F71]">
          VISA
        </span>
        <span className="flex items-center gap-1 text-[10px] font-medium text-[#15653D]">
          <span aria-hidden>✓</span> Verified
        </span>
      </div>
    ),
  },
  {
    title: "Paperless tickets",
    description:
      "Your PNR ticket lives in your account. Print it or show it on your phone.",
    visual: (
      <div className="flex h-[72px] w-full max-w-[220px] items-center gap-3 rounded-lg bg-white px-3 shadow-sm">
        <span className="min-w-0">
          <span className="block text-[10px] font-medium text-muted-foreground">
            PNR
          </span>
          <span className="block text-base font-bold tracking-wide text-foreground">
            K7Q2XM
          </span>
        </span>
        <span className="ml-auto max-w-[88px] text-right text-[10px] leading-snug text-muted-foreground">
          Sent by SMS and email
        </span>
      </div>
    ),
  },
] as const;

export function PromisesSection() {
  return (
    <section
      aria-labelledby="promises-heading"
      className="bg-[#1F4E37] px-4 py-16 text-white sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2
            id="promises-heading"
            className="max-w-xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl"
          >
            Built so the seat you pay for is the seat you get.
          </h2>
          <p className="text-sm text-white/80 md:pb-2 md:text-right md:text-base">
            Three promises behind every booking.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
          {promises.map((promise, index) => (
            <div
              key={promise.title}
              className={`md:px-8 ${
                index === 0
                  ? "md:pl-0"
                  : index === promises.length - 1
                    ? "md:pr-0"
                    : "md:border-l md:border-white/20"
              }`}
            >
              {promise.visual}
              <h3 className="mt-6 text-lg font-medium text-white">
                {promise.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/75">
                {promise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
