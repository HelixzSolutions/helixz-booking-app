import {
  BusinessHero,
  BusinessPartners,
  BusinessFeatures,
  BusinessCTA,
} from "~/components/business/business-sections";
import { BusinessPricing } from "~/components/business/business-pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect Your Business - Bokadirekt for Business",
  description:
    "Focus on your customers – we'll take care of the rest. Digital booking system for beauty and health businesses.",
};

export default function BusinessPage() {
  return (
    <>
      <BusinessHero />
      <BusinessPartners />
      <BusinessFeatures />
      <BusinessPricing />
      <BusinessCTA />
    </>
  );
}
