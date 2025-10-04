export interface HeroData {
  headline: string;
  tagline: string;
  buttonText: string;
  buttonLink: string;
  image?: string;
  subHeadline?: string;
}

export interface FeatureData {
  name: string;
  description: string;
  icon?: string;
}

export interface FeaturesSectionData {
  title: string;
  features: FeatureData[];
}

export interface PricingPlanData {
  name: string;
  price: number | string;
  currency: string;
  summary: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  highlight?: boolean;
}

export interface PricingSectionData {
  title: string;
  plans: PricingPlanData[];
}

export interface TestimonialData {
  text: string;
  author: string;
  jobTitle?: string;
  company?: string;
  profilePic?: string;
}

export interface TestimonialsSectionData {
  title: string;
  testimonials: TestimonialData[];
}
