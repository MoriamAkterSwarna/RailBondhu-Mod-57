"use client";

import { useRef } from "react";
import Image, { type ImageProps } from "next/image";
import { ArrowLeftRight, ArrowRight, Check } from "lucide-react";
import {
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { Button } from "@/components/ui/button";
import heroImage from "@/app/assets/Hero.png";
import bkashLogo from "@/app/assets/bKash_logo.png";
import nagadLogo from "@/app/assets/Nagad_logo.png";
import rocketLogo from "@/app/assets/Rocket_logo.png";

const bookingTabs: { label: string; active?: boolean }[] = [
  { label: "Book a seat", active: true },
  { label: "Find my booking", active: false },
] as const;

const trustItems = ["No overbooking, ever", "Instant PNR on payment"] as const;

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function VisaBadge() {
  return (
    <motion.span
      aria-label="VISA"
      whileHover={{ y: -3, scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="flex h-6 w-10 items-center justify-center rounded bg-white"
    >
      <svg
        viewBox="0 0 48 16"
        className="h-3.5 w-auto"
        role="img"
        aria-hidden
      >
        <text
          x="24"
          y="12"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontWeight="700"
          fontStyle="italic"
          fontSize="14"
          fill="#1A1F71"
        >
          VISA
        </text>
      </svg>
    </motion.span>
  );
}

function MastercardBadge() {
  return (
    <motion.span
      aria-label="Mastercard"
      whileHover={{ y: -3, scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="flex h-6 w-10 items-center justify-center rounded bg-white"
    >
      <svg viewBox="0 0 36 22" className="h-4 w-auto" role="img" aria-hidden>
        <circle cx="13" cy="11" r="9" fill="#EB001B" />
        <circle cx="23" cy="11" r="9" fill="#F79E1B" />
        <path
          d="M18 4.2a9 9 0 0 1 0 13.6 9 9 0 0 1 0-13.6Z"
          fill="#FF5F00"
        />
      </svg>
    </motion.span>
  );
}

function Field({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="min-w-0 flex-1 px-5 py-4">
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className="mt-1 truncate text-base font-semibold text-foreground">
        {value}
      </p>
      <p className="mt-0.5 truncate text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}

function PayBadge({ src, alt }: { src: ImageProps["src"]; alt: string }) {
  return (
    <motion.span
      whileHover={{ y: -3, scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="flex h-6 w-10 items-center justify-center rounded bg-white"
    >
      <Image
        src={src}
        alt={alt}
        width={32}
        height={16}
        className="h-4 w-auto object-contain"
      />
    </motion.span>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", prefersReducedMotion ? "0%" : "5%"],
  );

  const rise = (distance: number): Variants => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: EASE },
    },
  });

  const stack: Variants = {
    hidden: {},
    visible: { transition: { delayChildren: 0.15, staggerChildren: 0.12 } },
  };

  const list: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <MotionConfig reducedMotion="user">
      <section ref={sectionRef} className="relative">
        <div className="relative min-h-[520px] overflow-hidden md:min-h-[560px]">
          <motion.div
            className="absolute inset-0"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.3 }}
            animate={{ opacity: 1, scale: 1.16 }}
            transition={{ duration: 1.5, ease: EASE }}
            style={{ y: imageY }}
          >
            <Image
              src={heroImage}
              alt="View of lush green hills through a Bangladesh train window"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-black/45"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE }}
          />

          <motion.div
            className="relative z-10 mx-auto flex min-h-[520px] max-w-3xl flex-col items-center justify-center px-4 pb-28 pt-16 text-center md:min-h-[560px] md:pb-32"
            variants={stack}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={rise(36)}
              className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Book your Bangladesh
              <br />
              train seat in minutes.
            </motion.h1>

            <motion.p
              variants={rise(24)}
              className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
            >
              Compare intercity trains, see live seats in every class and pay
              securely. No queues at the counter.
            </motion.p>

            <motion.div
              variants={rise(20)}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <span className="text-sm font-medium text-white/90">
                Pay with
              </span>
              <div className="flex items-center gap-2">
                <PayBadge src={bkashLogo} alt="bKash" />
                <PayBadge src={nagadLogo} alt="Nagad" />
                <PayBadge src={rocketLogo} alt="Rocket" />
                <VisaBadge />
                <MastercardBadge />
              </div>
            </motion.div>

            <motion.ul
              variants={list}
              className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            >
              {trustItems.map((item) => (
                <motion.li
                  key={item}
                  variants={rise(14)}
                  className="flex items-center gap-1.5 text-sm text-white/90"
                >
                  <Check className="size-4 shrink-0" aria-hidden />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        <motion.div
          className="relative z-20 mx-auto -mt-20 max-w-6xl px-4 md:-mt-24"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="rounded-xl bg-white shadow-[0_18px_50px_-12px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-5 pt-1 sm:px-6">
              <div role="tablist" aria-label="Booking options" className="flex">
                {bookingTabs.map((tab) => (
                  <motion.button
                    key={tab.label}
                    type="button"
                    role="tab"
                    aria-selected={tab.active}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className={`-mb-px border-b-2 px-1 pb-3 pt-3 text-sm transition-colors sm:px-2 ${
                      tab.active
                        ? "border-foreground font-medium text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    } ${tab.label === "Book a seat" ? "mr-5 sm:mr-7" : ""}`}
                  >
                    {tab.label}
                  </motion.button>
                ))}
              </div>
              <p className="hidden pb-3 text-xs text-muted-foreground sm:block">
                One-way · up to 4 passengers per booking
              </p>
            </div>

            <div className="flex flex-col gap-0 px-2 py-2 lg:flex-row lg:items-stretch lg:gap-0 lg:px-3">
              <div className="flex flex-1 items-center">
                <Field label="From" value="Dhaka" hint="Kamalapur" />
                <motion.button
                  type="button"
                  aria-label="Swap stations"
                  whileHover={{ rotate: 180 }}
                  whileTap={{ scale: 0.85 }}
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                  className="mx-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <ArrowLeftRight className="size-4" aria-hidden />
                </motion.button>
                <Field label="To" value="Sylhet" hint="Parbatipur" />
              </div>

              <div
                aria-hidden
                className="mx-4 hidden w-px self-stretch bg-border lg:block"
              />
              <div
                aria-hidden
                className="mx-4 my-1 h-px w-auto bg-border lg:hidden"
              />

              <Field
                label="Journey date"
                value="Wed, 18 Nov"
                hint="Wednesday"
              />

              <div
                aria-hidden
                className="mx-4 hidden w-px self-stretch bg-border lg:block"
              />
              <div
                aria-hidden
                className="mx-4 my-1 h-px w-auto bg-border lg:hidden"
              />

              <Field label="Passengers" value="1 passenger" hint="Up to 4" />

              <div
                aria-hidden
                className="mx-4 hidden w-px self-stretch bg-border lg:block"
              />
              <div
                aria-hidden
                className="mx-4 my-1 h-px w-auto bg-border lg:hidden"
              />

              <Field
                label="Class"
                value="Any class"
                hint="Shovan Chair to AC Berth"
              />

              <div className="mt-2 p-2 lg:mt-0 lg:flex lg:items-center lg:p-3">
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 420, damping: 26 }}
                  className="w-full lg:w-auto"
                >
                  <Button
                    className="h-12 w-full gap-2 rounded-lg bg-[#15653D] px-6 text-sm font-semibold text-white hover:bg-[#15653D]/90 lg:w-auto"
                    size="lg"
                  >
                    Search trains
                    <ArrowRight className="size-4" aria-hidden />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
