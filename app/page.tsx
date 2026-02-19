import Hero from "@/components/sections/hero";
import Philosophy from "@/components/sections/philosophy";
import Community from "@/components/sections/community";
import Products from "@/components/sections/products";
import Founder from "@/components/sections/founder";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <Community />
      <Products />
      <Founder />
      <Footer />
    </main>
  );
}
