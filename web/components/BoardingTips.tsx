const tips: {
  title: string;
  description: string | null;
  isLabel?: boolean;
}[] = [
  {
    title: "Before you board",
    description: null,
    isLabel: true,
  },
  {
    title: "Arrive 30 minutes early",
    description: "Leave time for traffic and the entrance check.",
  },
  {
    title: "Bring ID for every passenger",
    description:
      "Names on the ticket are matched to an NID, passport or birth certificate.",
  },
  {
    title: "Find your coach",
    description:
      "Your ticket shows the coach letter (KA, KHA, GA) and seat. Coach plates are on each carriage.",
  },
  {
    title: "Boarding at the Airport?",
    description:
      "Many trains also stop at Dhaka Airport (Biman Bandar). Your ticket names your boarding station.",
  },
] as const;

export function BoardingTips() {
  return (
    <section
      aria-labelledby="boarding-tips-heading"
      className="bg-background px-4 pb-16 sm:px-6 md:pb-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {tips.map((tip) => (
            <div key={tip.title} className="border-t border-border pt-4">
              <h3
                id={tip.isLabel ? "boarding-tips-heading" : undefined}
                className={`text-sm font-semibold ${
                  tip.isLabel
                    ? "text-foreground"
                    : "text-foreground"
                }`}
              >
                {tip.title}
              </h3>
              {tip.description ? (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {tip.description}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
