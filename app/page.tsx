import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import AboutDoctor from "@/components/AboutDoctor";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
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
        <BeforeAfter />
        <Services />
        <AboutDoctor />
        {/* Shared background across both sections — image fixed to viewport */}
        <div
          className="relative"
          style={{
            backgroundImage: "url('/images/cdn/75fc616c3cc11dde423510ccae99875f.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <Process />
          <SocialProof />
        </div>
        <Reviews />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
