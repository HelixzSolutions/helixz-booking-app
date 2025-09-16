"use client";

import { Service } from "~/lib/schemas";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Input } from "~/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { Search, Clock, ChevronDown, ChevronUp, Heart } from "lucide-react";
import { useState } from "react";

interface ServiceListingProps {
  services: Service[];
  servicesByCategory?: Record<string, Service[]>;
  className?: string;
}

export function ServiceListing({
  services,
  servicesByCategory,
  className,
}: ServiceListingProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(["Waxing"])
  );

  // Group services by category if not already grouped
  const groupedServices =
    servicesByCategory ||
    services.reduce(
      (acc, service) => {
        const categoryName = service.category.name;
        if (!acc[categoryName]) {
          acc[categoryName] = [];
        }
        acc[categoryName].push(service);
        return acc;
      },
      {} as Record<string, Service[]>
    );

  // Filter services based on search
  const filteredGroupedServices = Object.entries(groupedServices).reduce(
    (acc, [category, categoryServices]) => {
      const filtered = categoryServices.filter(
        (service) =>
          service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filtered.length > 0) {
        acc[category] = filtered;
      }
      return acc;
    },
    {} as Record<string, Service[]>
  );

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const formatPrice = (service: Service) => {
    if (service.originalPrice && service.originalPrice > service.price) {
      return (
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-slate-800">
            {service.price} kr
          </span>
          <span className="text-sm text-slate-500 line-through">
            {service.originalPrice} kr
          </span>
        </div>
      );
    }
    return (
      <span className="text-lg font-bold text-slate-800">
        {service.price} kr
      </span>
    );
  };

  const calculateDiscount = (service: Service) => {
    if (service.originalPrice && service.originalPrice > service.price) {
      return Math.round(
        ((service.originalPrice - service.price) / service.originalPrice) * 100
      );
    }
    return service.discount || 0;
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header with Search */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
            <span className="text-slate-600">🔧</span>
          </div>
          <h2 className="text-xl font-semibold text-slate-800">
            Alla tjänster
          </h2>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-slate-400" />
          <Input
            placeholder="Sök tjänster..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 pl-10"
          />
        </div>
      </div>

      {/* Service Categories */}
      <div className="space-y-4">
        {Object.entries(filteredGroupedServices).map(
          ([categoryName, categoryServices]) => {
            const isExpanded = expandedCategories.has(categoryName);
            const serviceCount = categoryServices.length;

            return (
              <Card key={categoryName} className="overflow-hidden">
                <Collapsible
                  open={isExpanded}
                  onOpenChange={() => toggleCategory(categoryName)}
                >
                  <CollapsibleTrigger asChild>
                    <div className="flex cursor-pointer items-center justify-between p-4 transition-colors hover:bg-slate-50">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-semibold text-slate-800">
                          {categoryName}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {serviceCount} tjänster
                        </Badge>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-400" />
                      )}
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <div className="border-t border-slate-100">
                      {categoryServices.map((service) => {
                        const discount = calculateDiscount(service);

                        return (
                          <div
                            key={service.id}
                            className="border-b border-slate-50 p-4 last:border-b-0"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="mb-2 flex items-center space-x-3">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                  >
                                    <Heart className="h-4 w-4" />
                                  </Button>
                                  <div>
                                    <h4 className="font-medium text-slate-800">
                                      {service.name}
                                    </h4>
                                    <div className="mt-1 flex items-center space-x-4 text-sm text-slate-600">
                                      <div className="flex items-center space-x-1">
                                        <Clock className="h-3 w-3" />
                                        <span>{service.duration} min</span>
                                      </div>
                                      {service.availableUntil && (
                                        <span>
                                          • För tider fram till{" "}
                                          {service.availableUntil}
                                        </span>
                                      )}
                                    </div>
                                    {service.description && (
                                      <p className="mt-1 text-sm text-slate-600">
                                        {service.description}
                                      </p>
                                    )}
                                  </div>
                                </div>

                                {/* Discount Badge */}
                                {discount > 0 && (
                                  <div className="ml-11">
                                    <Badge className="border-0 bg-yellow-100 text-yellow-800">
                                      -{discount}%
                                    </Badge>
                                  </div>
                                )}
                              </div>

                              <div className="ml-4 flex items-center space-x-4">
                                <div className="text-right">
                                  {formatPrice(service)}
                                </div>
                                <Button
                                  size="sm"
                                  className="min-w-[60px] bg-blue-600 hover:bg-blue-700"
                                >
                                  Boka
                                </Button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            );
          }
        )}
      </div>

      {/* No Results */}
      {Object.keys(filteredGroupedServices).length === 0 && (
        <Card className="p-8 text-center">
          <Search className="mx-auto mb-3 h-12 w-12 text-slate-300" />
          <h3 className="mb-1 font-medium text-slate-800">
            Inga tjänster hittades
          </h3>
          <p className="text-sm text-slate-600">
            Försök med ett annat sökord eller rensa sökfältet.
          </p>
        </Card>
      )}
    </div>
  );
}
