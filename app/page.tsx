import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Philosophy from "@/components/sections/Philosophy";
import Approach from "@/components/sections/Approach";
import Focus from "@/components/sections/Focus";
import Portfolio from "@/components/sections/Portfolio";
import Insights from "@/components/sections/Insights";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Approach />
        <Focus />
        <Portfolio />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
