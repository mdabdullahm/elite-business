import CompanyOverview from "@/components/home/CompanyOverview";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import Solutions from "@/components/home/Solutions";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero/>
      <CompanyOverview/>
      <FeaturedProducts/>
      <WhyChooseUs/>
      <Solutions/>
      <Industries/>
    </main>
  );
}
