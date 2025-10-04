import {
  HeroData,
  FeaturesSectionData,
  PricingSectionData,
  TestimonialsSectionData,
} from "../types/landing";

export const heroData: HeroData = {
  headline: "SuperSaaS – Simplify Your Workflow",
  tagline: "The ultimate SaaS solution to automate tasks, boost productivity, and grow your business.",
  subHeadline: "Trusted by thousands of teams worldwide to save time and scale efficiently.",
  buttonText: "Get Started",
  buttonLink: "#pricing",
  image: "/images/hero.png",
};

export const featuresData: FeaturesSectionData = {
  title: "Features",
  features: [
    { name: "🚀 Fast Setup", description: "Get started in minutes with our easy onboarding." },
    { name: "🔒 Secure", description: "Enterprise-grade security keeps your data safe." },
    { name: "📈 Analytics", description: "Track performance with real-time insights." },
    { name: "🤝 Collaboration", description: "Work seamlessly with your team in real time." },
    { name: "⚡ AI Automation", description: "Save hours by automating repetitive tasks with AI." },
    { name: "🌍 Global Access", description: "Access your workspace anytime, anywhere from any device." },
  ],
};

export const pricingData: PricingSectionData = {
  title: "Pricing",
  plans: [
    {
      name: "Starter",
      price: 9,
      currency: "$",
      summary: "Perfect for individuals starting out",
      features: ["Basic features", "5 Projects", "Email support"],
      buttonText: "Choose",
      buttonLink: "/signup",
    },
    {
      name: "Pro",
      price: 29,
      currency: "$",
      summary: "For growing teams and freelancers",
      features: ["All Starter features", "Unlimited projects", "Priority support"],
      buttonText: "Choose",
      buttonLink: "/signup",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      currency: "$",
      summary: "Tailored solutions for enterprises",
      features: ["Custom solutions", "Dedicated manager", "24/7 support"],
      buttonText: "Contact Us",
      buttonLink: "/contact",
    },
  ],
};

export const testimonialsData: TestimonialsSectionData = {
  title: "What Our Users Say",
  testimonials: [
    {
      text: "SuperSaaS transformed the way our team works. Productivity is at an all-time high!",
      author: "Jane Doe",
      jobTitle: "CEO",
      company: "StartupX",
    },
    {
      text: "The onboarding was seamless and the support team is fantastic!",
      author: "John Smith",
      jobTitle: "Freelancer",
    },
    {
      text: "I can finally focus on growing my business instead of repetitive tasks. SuperSaaS is a game-changer!",
      author: "Alice Johnson",
      company: "TechCorp",
    },
  ],
};
