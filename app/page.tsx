import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Treatments } from "@/components/sections/Treatments";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Treatments />
        <About />
        <Process />
        <Testimonials />
        <Faq />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
