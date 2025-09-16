"use client";

import { ServiceProvider } from "~/types/booking";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Star, MapPin, Clock, Heart, Gift, CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProviderCardProps {
  provider: ServiceProvider;
  showDistance?: boolean;
  distance?: number;
}

export function ProviderCard({
  provider,
  showDistance,
  distance,
}: ProviderCardProps) {
  const formatRating = (rating: number) => rating.toFixed(1);

  return (
    <Card className="group overflow-hidden border border-slate-200 transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        {/* Provider Images */}
        <div className="grid h-48 grid-cols-3 gap-1">
          {provider.images.slice(0, 3).map((image, index) => (
            <div key={index} className="relative overflow-hidden bg-slate-100">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                <span className="text-xs text-slate-400">
                  Image {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute left-3 top-3 flex space-x-2">
          {provider.isVerified && (
            <Badge
              variant="secondary"
              className="border-0 bg-green-100 text-green-700"
            >
              Verifierad
            </Badge>
          )}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-3 bg-white/90 shadow-sm hover:bg-white"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Available Badges */}
        <div className="absolute bottom-3 left-3 flex space-x-2">
          <Badge className="flex items-center space-x-1 border-0 bg-blue-600 text-white">
            <Gift className="h-3 w-3" />
            <span>Presentkort</span>
          </Badge>
          <Badge className="flex items-center space-x-1 border-0 bg-purple-600 text-white">
            <CreditCard className="h-3 w-3" />
            <span>Friskvårdskort</span>
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Provider Info */}
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <Link href={`/providers/${provider.id}`}>
                <h3 className="text-xl font-semibold text-slate-800 transition-colors hover:text-blue-600 group-hover:text-blue-600">
                  {provider.name}
                </h3>
              </Link>

              <div className="mt-2 flex items-center space-x-4 text-sm text-slate-600">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">
                    {formatRating(provider.rating)}
                  </span>
                  <span>•</span>
                  <span>{provider.reviewCount} betyg</span>
                </div>
              </div>

              <div className="mt-2 flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-600">
                  {provider.location.address}, {provider.location.city}
                </span>
                {showDistance && distance && (
                  <>
                    <span className="text-slate-400">•</span>
                    <span className="text-sm text-slate-600">
                      {distance.toFixed(1)} km
                    </span>
                  </>
                )}
              </div>
            </div>

            {provider.avatar && (
              <div className="ml-4 h-12 w-12 flex-shrink-0 rounded-full bg-slate-200">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 font-semibold text-white">
                  {provider.name.charAt(0)}
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="line-clamp-2 text-sm leading-relaxed text-slate-600">
            {provider.description}
          </p>

          {/* Services */}
          <div className="flex flex-wrap gap-2">
            {provider.categories.slice(0, 3).map((category) => (
              <Badge key={category.id} variant="outline" className="text-xs">
                {category.name}
              </Badge>
            ))}
            {provider.categories.length > 3 && (
              <Badge variant="outline" className="text-xs text-slate-500">
                +{provider.categories.length - 3} till
              </Badge>
            )}
          </div>

          {/* Price Range */}
          {provider.priceRange && (
            <div className="flex items-center justify-between border-t border-slate-100 pt-2">
              <div className="text-sm text-slate-600">
                Från{" "}
                <span className="font-semibold text-slate-800">
                  {provider.priceRange.min} kr
                </span>
              </div>
              <Button
                size="sm"
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Boka tid
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
