"use client";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Check } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Growth",
    price: "From 559kr/month",
    description: "Maximum visibility with advanced marketing features",
    features: [
      "Everything in Base and Mini",
      "More visibility",
      "Instagram integration",
    ],
  },
  {
    name: "Base",
    price: "From 349kr/month",
    description:
      "Greater visibility and more features to help you fill your calendar",
    features: [
      "Everything in Mini",
      "Customized online booking",
      "Respond to reviews",
    ],
    popular: true,
  },
  {
    name: "Mini",
    price: "From 279 SEK/month",
    description:
      "Replace your paper calendar with a simple digital booking calendar.",
    features: ["Easy online booking", "Free support", "Automatic mailings"],
  },
];

export function BusinessPricing() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-800 md:text-5xl">
            Subscriptions for businesses
            <span className="text-blue-600"> of all sizes</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative ${plan.popular ? "shadow-lg ring-2 ring-blue-500" : "shadow-md"}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 transform bg-blue-600 px-4 py-1 text-white">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="pb-4 text-center">
                <CardTitle className="mb-2 text-2xl font-bold text-slate-800">
                  {plan.name}
                </CardTitle>
                <div className="mb-4 text-3xl font-bold text-blue-600">
                  {plan.price}
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="pt-4">
                <div className="mb-8 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-800 hover:bg-slate-700"}`}
                  size="lg"
                >
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="link" className="text-blue-600 hover:text-blue-700">
            Compare all subscriptions
          </Button>
        </div>
      </div>
    </section>
  );
}
