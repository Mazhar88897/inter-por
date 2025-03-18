import { Metadata } from "next";
import Hero from "@/components/Hero";
import Hero2 from "@/components/hero2";
import Hero3 from "@/components/hero3";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Testimonial1 from "@/components/Testimonial1";
export const metadata: Metadata = {
  title: "Rexcorpllc",
  description: "This is Home for Solid Pro",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Hero2 />
      <Hero3 />

      {/* <About /> */}
      <FeaturesTab />
      <Testimonial1 />
      <Feature />

      <FunFact />
      {/* <Integration /> */}
      <CTA />
      {/* <FAQ /> */}
      <Testimonial />
      {/* <Pricing /> */}
      <Contact />
      <Blog />
    </main>
  );
}
