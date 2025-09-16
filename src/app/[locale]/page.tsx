import { BookingHero } from "~/components/sections/booking-hero";
import { PromoBanner } from "~/components/sections/promo-banner";
import { ServiceCategories } from "~/components/sections/service-categories";

export default async function Home() {
  return (
    <>
      <BookingHero />
      <PromoBanner />
      <ServiceCategories />
    </>
  );
}
