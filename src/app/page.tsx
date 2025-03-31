import { HeroSection } from "./components/hero-section";
import { DiscoverSection } from "./components/discover-section";
import { FindSection } from "./components/find-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { CitiesSection } from "./components/cities-section";
import { PartnersSection } from "./components/partners-section";
import { Footer } from "./components/footer";
import { Navbar } from "@/components/navbar";

export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <DiscoverSection />
      <FindSection />
      <TestimonialsSection />
      <CitiesSection />
      <PartnersSection />
      <Footer />
    </>
  );
}
