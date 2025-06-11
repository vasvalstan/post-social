import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <ProblemSolutionSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="faq">
          <FaqSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}
