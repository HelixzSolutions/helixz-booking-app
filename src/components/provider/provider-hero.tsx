"use client";

import { ServiceProvider } from "~/lib/schemas";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card } from "~/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  Star,
  MapPin,
  Heart,
  Share2,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

interface ProviderHeroProps {
  provider: ServiceProvider;
  showBackButton?: boolean;
}

export function ProviderHero({
  provider,
  showBackButton = true,
}: ProviderHeroProps) {
  const formatRating = (rating: number) => rating.toFixed(1);

  return (
    <div className="border-b bg-white">
      <div className="container mx-auto px-4 py-6">
        {/* Back Navigation */}
        {showBackButton && (
          <div className="mb-6 flex items-center space-x-2 text-sm text-slate-600">
            <Link
              href="/search"
              className="flex items-center space-x-1 hover:text-slate-800"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <nav className="flex items-center space-x-2">
              <Link href="/" className="hover:text-slate-800">
                Hem
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>Träning Stockholm</span>
            </nav>
          </div>
        )}

        {/* Provider Header */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <h1 className="mb-3 text-3xl font-bold text-slate-800 lg:text-4xl">
              {provider.name}
            </h1>

            <div className="mb-4 flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-slate-400" />
              <span className="text-slate-600">
                {provider.location.address}, {provider.location.postalCode}{" "}
                {provider.location.city}
              </span>
            </div>

            {/* Provider Features */}
            {provider.features && provider.features.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {provider.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Rating and Actions */}
          <div className="flex flex-col gap-4 lg:items-end">
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="mb-1 flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(provider.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-slate-800">
                    {formatRating(provider.rating)}
                  </span>
                </div>
                <div className="text-sm text-slate-600">
                  <Link
                    href="#reviews"
                    className="underline decoration-blue-600 hover:text-blue-600"
                  >
                    {provider.reviewCount} omdömen
                  </Link>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 px-8 hover:bg-blue-700">
              Visa tjänster
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="h-auto w-full justify-start rounded-none border-b border-slate-200 bg-transparent p-0">
            <TabsTrigger
              value="personal"
              className="rounded-none px-6 py-3 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
            >
              <div className="flex items-center space-x-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-300">
                  <span className="text-xs">👤</span>
                </div>
                <span>Personal</span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="betyg"
              className="rounded-none px-6 py-3 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
            >
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>Betyg</span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="om"
              className="rounded-none px-6 py-3 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
            >
              <span>Om</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
