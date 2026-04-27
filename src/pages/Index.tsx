import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import QuickLinks from "@/components/site/QuickLinks";
import ContentGrid from "@/components/site/ContentGrid";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <QuickLinks />
        <ContentGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
