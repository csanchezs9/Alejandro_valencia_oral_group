import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import AboutDoctor from "@/components/AboutDoctor";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <BeforeAfter />
        <Services />
        <AboutDoctor />
        <Process />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
