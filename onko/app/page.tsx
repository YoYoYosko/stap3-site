// app/page.tsx
import { Hero } from "./components/Hero";
import { PainSection } from "./components/PainSection";
import { SolutionPillars } from "./components/SolutionPillars";
import { ContextFeelSection } from "./components/ContextFeelSection";
import { ForWhoSection } from "./components/ForWhoSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { EarlyAccessSection } from "./components/EarlyAccessSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { FAQSection } from "./components/FAQSection";


export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      
      <Hero />
      <PainSection />
      <SolutionPillars />
      <ForWhoSection />

      
      <HowItWorksSection />
      <EarlyAccessSection />
      <FAQSection />
      <FinalCTASection />
      
    </main>
  );
}
