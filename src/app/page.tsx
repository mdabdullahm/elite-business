import CompanyOverview from "@/components/home/CompanyOverview";
import CompanyStats from "@/components/home/CompanyStats";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import GalleryPreview from "@/components/home/GalleryPreview";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import QualityAssurance from "@/components/home/QualityAssurance";
import Solutions from "@/components/home/Solutions";
import Testimonials from "@/components/home/Testimonials";
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
      <QualityAssurance/>
      <GalleryPreview/>
      <Testimonials/>
      <CompanyStats/>
    </main>
  );
}
