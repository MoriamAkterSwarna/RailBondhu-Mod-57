import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";

const faqs: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}[] = [
  {
    question: "Is my seat guaranteed once I pay?",
    answer:
      "Yes. Seats are held for you the moment you continue to payment, and we never sell more seats than a class has. If payment fails or you cancel, the seats are released for others.",
    defaultOpen: true,
  },
  {
    question: "What is a PNR?",
    answer:
      "PNR is your booking reference. It is issued as soon as payment succeeds and is enough to board — show it on your phone or print it.",
    defaultOpen: false,
  },
  {
    question: "Which payment methods are supported?",
    answer:
      "bKash, Nagad, Rocket, Visa, Mastercard, Amex, and net banking from most Bangladeshi banks — all processed through SSLCommerz.",
    defaultOpen: false,
  },
  {
    question: "How many seats can I book at once?",
    answer:
      "Up to 4 passengers per booking on a single train and class. For larger groups, make additional bookings.",
    defaultOpen: false,
  },
  {
    question: "Can I pick my coach and seat number?",
    answer:
      "Yes. After you choose a train and class, the live seat map lets you pick your coach (KA, KHA, GA…) and exact seat when available.",
    defaultOpen: false,
  },
  {
    question: "How can I get real-time help?",
    answer:
      "Chat with RailBondhu AI 24/7, or email support@railbondhu.com. Booking details and PNR are always under My bookings.",
    defaultOpen: false,
  },
] as const;

export function FaqSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="border-t border-border bg-background px-4 py-16 sm:px-6 md:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#15653D]">
            Help centre
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Frequently asked
            <br />
            questions
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
            Can&apos;t find an answer? Your booking details and PNR are always
            in My bookings.
          </p>
          <Link
            href="#"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#15653D] transition-colors hover:text-[#15653D]/80"
          >
            Go to My bookings
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div>
          <ul className="divide-y divide-border">
            {faqs.map((faq) => (
              <li key={faq.question} className="py-1">
                <details
                  className="group"
                  open={faq.defaultOpen}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-medium text-foreground transition-colors hover:text-muted-foreground [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <span className="shrink-0 text-muted-foreground">
                      <Minus
                        className="size-5 hidden group-open:block"
                        aria-hidden
                      />
                      <Plus
                        className="size-5 block group-open:hidden"
                        aria-hidden
                      />
                    </span>
                  </summary>
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
