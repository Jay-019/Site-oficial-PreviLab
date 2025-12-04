import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { HoursSection } from "@/components/home/HoursSection";
import { CTASection } from "@/components/home/CTASection";
import { ConveniosSection } from "@/components/home/ConveniosSection";
import { MapSection } from "@/components/home/MapSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HoursSection />
      <ConveniosSection />
      <CTASection />
      <MapSection />
    </Layout>
  );
};

export default Index;
