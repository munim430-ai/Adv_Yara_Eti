import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import PracticeAreas from "@/components/sections/PracticeAreas";
import WhyChoose from "@/components/sections/WhyChoose";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <PracticeAreas />
      <WhyChoose />
      <Process />
      <Stats />
      <Testimonials />
      <Faq />
      <Contact />
      <CtaBanner />
    </>
  );
}
