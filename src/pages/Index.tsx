import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { HoursSection } from "@/components/home/HoursSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HoursSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
