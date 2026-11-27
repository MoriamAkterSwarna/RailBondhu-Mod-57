import Link from "next/link";
import { TrainFront } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Search trains", href: "#" },
  { label: "Popular routes", href: "#" },
  { label: "How it works", href: "#" },
  { label: "Help", href: "#" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-[#15653D] text-white">
            <TrainFront className="size-4.5" aria-hidden />
          </span>
          <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
            RailBondhu
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            Log in
          </Link>
          <Button
            variant="outline"
            className="h-9 rounded-md border-border bg-background px-4 text-sm font-medium text-foreground hover:bg-muted"
          >
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}
