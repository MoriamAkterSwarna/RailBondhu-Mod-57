import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PromisesSection } from "@/components/PromisesSection";
import { PopularRoutes } from "@/components/PopularRoutes";
import { DeparturesSection } from "@/components/DeparturesSection";
import { BoardingTips } from "@/components/BoardingTips";
import { PaymentSection } from "@/components/PaymentSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PromisesSection />
        <PopularRoutes />
        <DeparturesSection />
        <BoardingTips />
        <PaymentSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
