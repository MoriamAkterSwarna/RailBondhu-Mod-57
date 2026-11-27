import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import chattogramPhoto from "@/app/assets/Photo.png";
import coxsBazarPhoto from "@/app/assets/Photo_2.png";
import sylhetPhoto from "@/app/assets/Photo_3.png";
import rajshahiPhoto from "@/app/assets/Photo_4.png";

const featuredRoute = {
  title: "Dhaka → Chattogram",
  subtitle: "ঢাকা → চট্টগ্রাম",
  detail: "Subarna, Sonar Bangla · from 5h 10m",
  image: chattogramPhoto,
  alt: "Bangladesh Railway locomotive at a station",
  href: "#",
  tall: true,
};

const sideRoutes: {
  title: string;
  subtitle: string;
  detail: string;
  image: typeof coxsBazarPhoto;
  alt: string;
  href: string;
  showCta?: boolean;
}[] = [
  {
    title: "Dhaka → Cox's Bazar",
    subtitle: "ঢাকা → কক্সবাজার",
    detail: "Overnight to the sea · 8h 50m",
    image: coxsBazarPhoto,
    alt: "Cox's Bazar Railway Station facade",
    href: "#",
    showCta: true,
  },
  {
    title: "Dhaka → Sylhet",
    subtitle: "ঢাকা → সিলেট",
    detail: "Through tea country · 6h 40m",
    image: sylhetPhoto,
    alt: "View from a train window over green countryside",
    href: "#",
  },
  {
    title: "Dhaka → Rajshahi",
    subtitle: "ঢাকা → রাজশাহী",
    detail: "Silk City Express · 6h 15m",
    image: rajshahiPhoto,
    alt: "Passengers boarding a green train at a station platform",
    href: "#",
  },
] as const;

function RouteOverlay({
  title,
  subtitle,
  detail,
  showCta = false,
  large = false,
}: {
  title: string;
  subtitle: string;
  detail: string;
  showCta?: boolean;
  large?: boolean;
}) {
  return (
    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/25 to-transparent p-5 text-white">
      <h3
        className={`font-heading font-semibold tracking-tight ${
          large ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
        }`}
      >
        {title}
      </h3>
      <p className="mt-0.5 text-sm text-white/80">{subtitle}</p>
      <p className="mt-1 text-sm text-white/85">{detail}</p>
      {showCta ? (
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white">
          See trains
          <ArrowRight className="size-4" aria-hidden />
        </span>
      ) : null}
    </div>
  );
}

export function PopularRoutes() {
  const [cox, sylhet, rajshahi] = sideRoutes;

  return (
    <section
      aria-labelledby="routes-heading"
      className="bg-background px-4 py-16 sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#15653D]">
              Popular routes
            </p>
            <h2
              id="routes-heading"
              className="mt-3 max-w-md text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              Where are you heading today?
            </h2>
          </div>
          <Link
            href="#"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-[#15653D] transition-colors hover:text-[#15653D]/80 sm:mt-10"
          >
            All routes
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Link
            href={featuredRoute.href}
            className="group relative block min-h-[360px] overflow-hidden rounded-xl sm:min-h-[420px] lg:min-h-[480px]"
          >
            <Image
              src={featuredRoute.image}
              alt={featuredRoute.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <RouteOverlay
              title={featuredRoute.title}
              subtitle={featuredRoute.subtitle}
              detail={featuredRoute.detail}
              large
            />
          </Link>

          <div className="grid gap-4">
            <Link
              href={cox.href}
              className="group relative block min-h-[200px] overflow-hidden rounded-xl sm:min-h-[220px]"
            >
              <Image
                src={cox.image}
                alt={cox.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <RouteOverlay
                title={cox.title}
                subtitle={cox.subtitle}
                detail={cox.detail}
                showCta
              />
            </Link>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href={sylhet.href}
                className="group relative block min-h-[200px] overflow-hidden rounded-xl"
              >
                <Image
                  src={sylhet.image}
                  alt={sylhet.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <RouteOverlay
                  title={sylhet.title}
                  subtitle={sylhet.subtitle}
                  detail={sylhet.detail}
                />
              </Link>
              <Link
                href={rajshahi.href}
                className="group relative block min-h-[200px] overflow-hidden rounded-xl"
              >
                <Image
                  src={rajshahi.image}
                  alt={rajshahi.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <RouteOverlay
                  title={rajshahi.title}
                  subtitle={rajshahi.subtitle}
                  detail={rajshahi.detail}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
