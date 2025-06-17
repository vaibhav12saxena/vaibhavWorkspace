// pages/index.tsx
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/home/HeroSection";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
      </main>

      <Footer />
    </div>
  );
}
