import { heroData, featuresData, pricingData, testimonialsData } from "../data/landingData";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <main>
      <Hero data={heroData} />
      <Features data={featuresData} />
      <Pricing data={pricingData} />
      <Testimonials data={testimonialsData} />
      <ContactForm />
      <Footer />
    </main>
  );
}
