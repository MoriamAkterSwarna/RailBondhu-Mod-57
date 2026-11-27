import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import trainPhoto from "@/app/assets/Photo.png";

export function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-background px-4 py-16 sm:px-6 md:py-20"
    >
      <div className="mx-auto grid max-w-6xl items-stretch gap-0 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="relative z-10 rounded-xl bg-white p-8 shadow-[0_18px_50px_-16px_rgba(0,0,0,0.18)] ring-1 ring-black/5 sm:p-10 lg:-mr-12 lg:self-center lg:py-12 lg:pl-10 lg:pr-16">
          <p className="text-sm font-medium text-muted-foreground">
            Book your next trip
          </p>
          <h2
            id="cta-heading"
            className="mt-3 text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Skip the queue at
            <br />
            the counter.
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
            See live seats in every class, pay through SSLCommerz and get your
            PNR in minutes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              className="h-11 gap-2 rounded-lg bg-[#15653D] px-5 text-sm font-semibold text-white hover:bg-[#15653D]/90"
            >
              Search trains
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <LinkLike href="#">
              Ask RailBondhu AI
              <ArrowRight className="size-4" aria-hidden />
            </LinkLike>
          </div>

          <div className="mt-10 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-border pt-6">
            <p className="text-base font-semibold text-foreground">
              From ৳695
            </p>
            <p className="text-sm text-muted-foreground">
              Shovan Chair, Dhaka → Cox&apos;s Bazar
            </p>
          </div>
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-xl sm:min-h-[360px] lg:min-h-[440px] lg:rounded-l-none lg:rounded-r-xl">
          <Image
            src={trainPhoto}
            alt="Bangladesh Railway train ready at the platform"
            fill
            priority={false}
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function LinkLike({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
    >
      {children}
    </a>
  );
}
