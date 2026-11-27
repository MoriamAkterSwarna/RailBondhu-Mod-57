import Image from "next/image";
import Link from "next/link";
import { Lock, TrainFront } from "lucide-react";
import bkashLogo from "@/app/assets/bKash_logo.png";
import nagadLogo from "@/app/assets/Nagad_logo.png";
import rocketLogo from "@/app/assets/Rocket_logo.png";

const linkColumns: { heading: string; links: string[] }[] = [
  {
    heading: "Travel",
    links: ["Search trains", "My bookings", "Create an account"],
  },
  {
    heading: "Popular routes",
    links: [
      "Dhaka → Chattogram",
      "Dhaka → Cox's Bazar",
      "Dhaka → Sylhet",
      "Dhaka → Rajshahi",
    ],
  },
  {
    heading: "Help",
    links: ["How it works", "FAQ", "Refund policy"],
  },
  {
    heading: "Company",
    links: ["Privacy policy", "Terms of service"],
  },
  {
    heading: "Support",
    links: [
      "RailBondhu AI · 24/7",
      "Help centre",
      "support@railbondhu.com",
      "Facebook",
      "Instagram",
      "YouTube",
    ],
  },
] as const;

function MiniVisa() {
  return (
    <span className="text-[11px] font-bold italic text-[#1A1F71]">VISA</span>
  );
}

function MiniMastercard() {
  return (
    <span className="relative flex h-4 w-7 items-center justify-center">
      <span className="absolute left-0 size-4 rounded-full bg-[#EB001B]" />
      <span className="absolute right-0 size-4 rounded-full bg-[#F79E1B]/90" />
      <span className="absolute size-4 rounded-full bg-[#FF5F00]/85 mix-blend-multiply" />
    </span>
  );
}

function MiniAmex() {
  return (
    <span className="flex h-4 w-7 items-center justify-center rounded-sm bg-[#2E77BC] text-[7px] font-bold text-white">
      AMEX
    </span>
  );
}

function MiniBank() {
  return (
    <span className="flex size-5 items-center justify-center rounded-full border border-border text-muted-foreground">
      <svg viewBox="0 0 24 24" className="size-3" aria-hidden>
        <path
          fill="currentColor"
          d="M4 10h16v8H4v-8Zm8-6 8 4H4l8-4Zm-8 10h3v4H4v-4Zm5 0h3v4H9v-4Zm5 0h3v4h-3v-4Z"
        />
      </svg>
    </span>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-[#15653D] text-white">
                <TrainFront className="size-4.5" aria-hidden />
              </span>
              <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
                RailBondhu
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Book intercity train seats across Bangladesh in a few taps.
              Real-time seat availability, secure payment and an instant PNR
              ticket.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">
              Eid and holiday rush alerts
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              One email when booking opens for the busiest travel days. Nothing
              else.
            </p>
            <form className="mt-4 flex flex-wrap gap-2" action="#">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                placeholder="Email address"
                className="h-11 min-w-0 flex-1 rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 outline-none"
              />
              <button
                type="submit"
                className="h-11 shrink-0 rounded-md bg-[#15653D] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#15653D]/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 sm:grid-cols-3 lg:grid-cols-5">
          {linkColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-medium text-muted-foreground">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground">Payments</span>
            <span className="flex h-6 w-10 items-center justify-center rounded bg-white ring-1 ring-border">
              <Image
                src={bkashLogo}
                alt="bKash"
                width={32}
                height={16}
                className="h-4 w-auto object-contain"
              />
            </span>
            <span className="flex h-6 w-10 items-center justify-center rounded bg-white ring-1 ring-border">
              <Image
                src={nagadLogo}
                alt="Nagad"
                width={32}
                height={16}
                className="h-4 w-auto object-contain"
              />
            </span>
            <span className="flex h-6 w-10 items-center justify-center rounded bg-white ring-1 ring-border">
              <Image
                src={rocketLogo}
                alt="Rocket"
                width={32}
                height={16}
                className="h-4 w-auto object-contain"
              />
            </span>
            <span className="flex h-6 w-10 items-center justify-center rounded bg-white ring-1 ring-border">
              <MiniVisa />
            </span>
            <span className="flex h-6 w-10 items-center justify-center rounded bg-white ring-1 ring-border">
              <MiniMastercard />
            </span>
            <span className="flex h-6 w-10 items-center justify-center rounded bg-white ring-1 ring-border">
              <MiniAmex />
            </span>
            <span className="flex h-6 w-10 items-center justify-center rounded bg-white ring-1 ring-border">
              <MiniBank />
            </span>
          </div>

          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="size-4" aria-hidden />
            Processed by SSLCommerz · No overbooking, ever
          </p>
        </div>
      </div>

      <div className="border-t border-border bg-muted/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © 2026 RailBondhu. Independent booking platform, not affiliated with
            Bangladesh Railway.
          </p>
          <p>
            Photos: Wikimedia Commons contributors (CC BY-SA / CC BY / CC0)
          </p>
        </div>
      </div>
    </footer>
  );
}
