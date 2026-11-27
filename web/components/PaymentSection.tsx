import Image from "next/image";
import type { ReactNode } from "react";
import { Lock } from "lucide-react";
import bkashLogo from "@/app/assets/bKash_logo.png";
import nagadLogo from "@/app/assets/Nagad_logo.png";
import rocketLogo from "@/app/assets/Rocket_logo.png";

function VisaMark() {
  return (
    <span className="text-lg font-bold italic tracking-tight text-[#1A1F71]">
      VISA
    </span>
  );
}

function MastercardMark() {
  return (
    <span className="relative flex h-6 w-10 items-center justify-center">
      <span className="absolute left-0 size-6 rounded-full bg-[#EB001B]" />
      <span className="absolute right-0 size-6 rounded-full bg-[#F79E1B]/90" />
      <span className="absolute size-6 rounded-full bg-[#FF5F00]/85 mix-blend-multiply" />
    </span>
  );
}

function AmexMark() {
  return (
    <span className="flex h-6 w-10 items-center justify-center rounded-sm bg-[#2E77BC] text-[9px] font-bold tracking-wide text-white">
      AMEX
    </span>
  );
}

function BankMark() {
  return (
    <span
      aria-label="Bank"
      className="flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground"
    >
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
        <path
          fill="currentColor"
          d="M4 10h16v8H4v-8Zm8-6 8 4H4l8-4Zm-8 10h3v4H4v-4Zm5 0h3v4H9v-4Zm5 0h3v4h-3v-4Zm5 0h1v4h-1v-4ZM4 6.8V8h16V6.8L12 3 4 6.8Z"
        />
      </svg>
    </span>
  );
}

function WalletLogo({
  src,
  alt,
}: {
  src: typeof bkashLogo;
  alt: string;
}) {
  return (
    <span className="flex h-12 w-full items-center justify-center rounded-none border border-border bg-white px-3">
      <Image
        src={src}
        alt={alt}
        width={72}
        height={28}
        className="h-7 w-auto object-contain"
      />
    </span>
  );
}

function CardLogo({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <span
      aria-label={label}
      className="flex h-12 w-full items-center justify-center border border-border bg-white px-3"
    >
      {children}
    </span>
  );
}

export function PaymentSection() {
  return (
    <section
      aria-labelledby="payment-heading"
      className="bg-background px-4 py-16 sm:px-6 md:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <h2
            id="payment-heading"
            className="text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Pay the way you
            <br />
            already pay.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Every payment runs through SSLCommerz and is verified on our server
            before your seat is confirmed. No card details or PINs ever reach
            RailBondhu.
          </p>
          <p className="mt-8 flex items-center gap-2 text-sm font-medium text-foreground">
            <Lock className="size-4 text-muted-foreground" aria-hidden />
            Secured by SSLCommerz
          </p>
        </div>

        <div className="min-w-0">
          <div className="grid grid-cols-[minmax(7rem,10rem)_repeat(3,minmax(0,1fr))] items-stretch border-b border-border">
            <div className="flex flex-col justify-center py-4 pr-4">
              <p className="text-sm font-semibold text-foreground">
                Mobile banking
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Pay from your wallet
              </p>
            </div>
            <WalletLogo src={bkashLogo} alt="bKash" />
            <WalletLogo src={nagadLogo} alt="Nagad" />
            <WalletLogo src={rocketLogo} alt="Rocket" />
          </div>

          <div className="grid grid-cols-[minmax(7rem,10rem)_repeat(3,minmax(0,1fr))] items-stretch border-b border-border">
            <div className="flex flex-col justify-center py-4 pr-4">
              <p className="text-sm font-semibold text-foreground">Cards</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Visa, Mastercard, Amex
              </p>
            </div>
            <CardLogo label="Visa">
              <VisaMark />
            </CardLogo>
            <CardLogo label="Mastercard">
              <MastercardMark />
            </CardLogo>
            <CardLogo label="American Express">
              <AmexMark />
            </CardLogo>
          </div>

          <div className="grid grid-cols-[minmax(7rem,10rem)_repeat(3,minmax(0,1fr))] items-start gap-y-2 pt-4">
            <p className="text-sm font-semibold text-foreground">
              Net banking
            </p>
            <p className="col-span-3 text-sm text-muted-foreground sm:col-span-3">
              from most Bangladeshi banks, on the same secure page.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-border pt-4 lg:hidden">
            <BankMark />
            <span className="text-sm text-muted-foreground">
              All major local banks supported
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
