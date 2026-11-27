import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import kamalapurPhoto from "@/app/assets/Photo___Kamalapur_Railway_Station.png";

const filters: {
  label: string;
  count: number;
  active?: boolean;
}[] = [
  { label: "All", count: 6, active: true },
  { label: "Chattogram", count: 2 },
  { label: "Cox's Bazar", count: 2 },
  { label: "Sylhet", count: 1 },
  { label: "Rajshahi", count: 1 },
] as const;

const departures: {
  time: string;
  name: string;
  destination: string;
  seats: string;
  status: "available" | "low" | "soldout";
  highlighted?: boolean;
}[] = [
  {
    time: "06:15",
    name: "Parjotak Express",
    destination: "to Cox's Bazar",
    seats: "212 seats",
    status: "available" as const,
  },
  {
    time: "06:40",
    name: "Parabat Express",
    destination: "to Sylhet",
    seats: "88 seats",
    status: "available" as const,
    highlighted: true,
  },
  {
    time: "07:00",
    name: "Sonar Bangla Express",
    destination: "to Chattogram",
    seats: "9 left",
    status: "low" as const,
  },
  {
    time: "14:45",
    name: "Silk City Express",
    destination: "to Rajshahi",
    seats: "140 seats",
    status: "available" as const,
  },
  {
    time: "16:30",
    name: "Subarna Express",
    destination: "to Chattogram",
    seats: "Sold out",
    status: "soldout" as const,
  },
  {
    time: "22:30",
    name: "Cox's Bazar Express",
    destination: "to Cox's Bazar",
    seats: "42 seats",
    status: "available" as const,
  },
] as const;

function SeatStatus({
  status,
  label,
}: {
  status: "available" | "low" | "soldout";
  label: string;
}) {
  const dotColor =
    status === "low"
      ? "bg-amber-500"
      : status === "soldout"
        ? "bg-muted-foreground/40"
        : "bg-[#15653D]";

  const textColor =
    status === "low"
      ? "text-amber-600"
      : status === "soldout"
        ? "text-muted-foreground"
        : "text-muted-foreground";

  return (
    <span className={`flex items-center gap-1.5 text-sm ${textColor}`}>
      <span className={`size-1.5 rounded-full ${dotColor}`} aria-hidden />
      {label}
    </span>
  );
}

export function DeparturesSection() {
  return (
    <section
      aria-labelledby="departures-heading"
      className="border-t border-border bg-background px-4 py-16 sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <h2
              id="departures-heading"
              className="text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              Kamalapur, right now.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Most intercity trains from Dhaka leave from Kamalapur Railway
              Station. See what is departing today, then pick your seat.
            </p>

            <figure className="mt-8">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src={kamalapurPhoto}
                  alt="Kamalapur Railway Station in Dhaka"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm">
                <span className="font-medium text-foreground">
                  Kamalapur Railway Station, Dhaka
                </span>
                <span className="mt-0.5 block text-muted-foreground">
                  কমলাপুর রেলওয়ে স্টেশন
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  Opened in 1969, designed by Daniel Dunham and Robert Boughey.
                </span>
              </figcaption>
            </figure>
          </div>

          <div>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Departures from Kamalapur
                </h3>
                <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      className="size-1.5 rounded-full bg-[#15653D]"
                      aria-hidden
                    />
                    Wed, 18 Nov · updated 2 min ago
                  </span>
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#15653D] transition-colors hover:text-[#15653D]/80"
              >
                Full timetable
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>

            <div
              role="tablist"
              aria-label="Filter departures"
              className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-b border-border"
            >
              {filters.map((filter) => (
                <button
                  key={filter.label}
                  type="button"
                  role="tab"
                  aria-selected={filter.active ?? false}
                  className={`-mb-px flex items-baseline gap-1.5 border-b-2 pb-3 text-sm transition-colors ${
                    filter.active
                      ? "border-foreground font-medium text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {filter.label}
                  <span
                    className={`text-xs ${
                      filter.active
                        ? "text-foreground"
                        : "text-muted-foreground/80"
                    }`}
                  >
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>

            <ul className="mt-1">
              {departures.map((trip) => (
                <li key={`${trip.time}-${trip.name}`}>
                  <button
                    type="button"
                    className={`flex w-full items-center gap-3 border-b border-border px-3 py-4 text-left transition-colors sm:gap-4 ${
                      trip.highlighted
                        ? "bg-muted/70"
                        : "hover:bg-muted/50"
                    } ${trip.status === "soldout" ? "opacity-70" : ""}`}
                  >
                    <span
                      className={`w-14 shrink-0 text-base font-semibold tabular-nums sm:w-16 sm:text-lg ${
                        trip.status === "soldout"
                          ? "text-muted-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {trip.time}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block truncate text-sm font-semibold sm:text-base ${
                          trip.status === "soldout"
                            ? "text-muted-foreground"
                            : "text-foreground"
                        }`}
                      >
                        {trip.name}
                      </span>
                      <span className="mt-0.5 block truncate text-sm text-muted-foreground">
                        {trip.destination}
                      </span>
                    </span>

                    <span className="hidden shrink-0 sm:block">
                      <SeatStatus status={trip.status} label={trip.seats} />
                    </span>

                    {trip.highlighted ? (
                      <span className="hidden shrink-0 items-center gap-1 text-sm font-medium text-[#15653D] lg:flex">
                        Select seats
                        <ArrowRight className="size-4" aria-hidden />
                      </span>
                    ) : (
                      <ChevronRight
                        className="size-4 shrink-0 text-muted-foreground"
                        aria-hidden
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs text-muted-foreground">
              Sample schedule for layout. Times and seats come from the live
              trips API.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
