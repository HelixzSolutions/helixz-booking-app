"use client";

import {
  ServiceProvider,
  SearchFilters as SearchFiltersType,
} from "~/types/booking";
import { SearchFilters } from "~/components/booking/search-filters";
import { ProviderCard } from "~/components/booking/provider-card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";
import { Card } from "~/components/ui/card";
import {
  Search,
  MapPin,
  Map,
  List,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

interface SearchResultsProps {
  providers: ServiceProvider[];
  totalCount: number;
  filters: SearchFiltersType;
  onFiltersChange: (filters: SearchFiltersType) => void;
  isLoading?: boolean;
}

// Mock data for demonstration
const mockProviders: ServiceProvider[] = [
  {
    id: "1",
    name: "Catarinas Massage & Hälsa",
    description:
      "Jag utför klassisk massage, lymfmassage, koppning, andningsmassage och taktil massage.",
    rating: 4.8,
    reviewCount: 183,
    images: [
      "/api/placeholder/200/150",
      "/api/placeholder/200/150",
      "/api/placeholder/200/150",
    ],
    location: {
      id: "1",
      address: "Hägggatan 6",
      city: "Stockholm",
      postalCode: "11347",
      country: "Sweden",
      coordinates: { lat: 59.3293, lng: 18.0686 },
    },
    categories: [
      { id: "1", name: "Massage", slug: "massage" },
      { id: "2", name: "Hälsa", slug: "halsa" },
    ],
    services: [],
    isVerified: true,
    priceRange: { min: 450, max: 850 },
  },
  {
    id: "2",
    name: "Dark & Bright haircouture",
    description:
      "Hej och välkommen! Alla våra bokade tider avbokas 48h före avista tid",
    rating: 4.6,
    reviewCount: 476,
    images: [
      "/api/placeholder/200/150",
      "/api/placeholder/200/150",
      "/api/placeholder/200/150",
    ],
    location: {
      id: "2",
      address: "Splängatan 21",
      city: "Malmö",
      postalCode: "21234",
      country: "Sweden",
      coordinates: { lat: 55.6049, lng: 13.0038 },
    },
    categories: [
      { id: "3", name: "Frisör", slug: "frisor" },
      { id: "4", name: "Hårfärgning", slug: "harfargning" },
    ],
    services: [],
    isVerified: true,
    priceRange: { min: 350, max: 1200 },
  },
];

export function SearchResults({
  providers = mockProviders,
  totalCount = mockProviders.length,
  filters,
  onFiltersChange,
  isLoading = false,
}: SearchResultsProps) {
  const [showFilters, setShowFilters] = useState(true);
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [sortBy, setSortBy] = useState("relevance");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Search Header */}
      <div className="sticky top-0 z-40 border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <form
            onSubmit={handleSearch}
            className="flex flex-col gap-4 md:flex-row"
          >
            <div className="flex flex-1 gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-slate-400" />
                <Input
                  placeholder="Vad vill du boka?"
                  value={filters.query || ""}
                  onChange={(e) =>
                    onFiltersChange({ ...filters, query: e.target.value })
                  }
                  className="pl-10"
                />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-slate-400" />
                <Input
                  placeholder="Var?"
                  value={filters.location || ""}
                  onChange={(e) =>
                    onFiltersChange({ ...filters, location: e.target.value })
                  }
                  className="pl-10"
                />
              </div>
            </div>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Sök
            </Button>
          </form>
        </div>
      </div>

      {/* Breadcrumb & Results Info */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <nav className="mb-2 text-sm text-slate-600">
                <span>Hem</span> → <span>Skönhet & hälsa</span> →{" "}
                <span className="text-slate-800">Nära mig</span>
              </nav>
              <h1 className="text-2xl font-bold text-slate-800">
                Skönhet & hälsa i närheten
                <Badge variant="secondary" className="ml-3">
                  {totalCount.toLocaleString()} träffar
                </Badge>
              </h1>
            </div>

            <div className="flex items-center gap-3">
              {/* Sort Dropdown */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-slate-600">Sortera</span>
                <Button
                  variant="outline"
                  className="min-w-[140px] justify-between"
                >
                  <span className="text-sm">Relevans</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>

              {/* View Toggle */}
              <div className="flex overflow-hidden rounded-lg border">
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-none"
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "map" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("map")}
                  className="rounded-none"
                >
                  <Map className="h-4 w-4" />
                </Button>
              </div>

              {/* Filter Toggle for Mobile */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <div className={`lg:block ${showFilters ? "block" : "hidden"}`}>
            <SearchFilters
              filters={filters}
              onFiltersChange={onFiltersChange}
              isOpen={showFilters}
              onToggle={() => setShowFilters(!showFilters)}
            />
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {viewMode === "list" ? (
              <div className="space-y-6">
                {isLoading ? (
                  // Loading skeleton
                  <div className="space-y-6">
                    {[...Array(3)].map((_, i) => (
                      <Card key={i} className="p-6">
                        <div className="animate-pulse">
                          <div className="flex space-x-4">
                            <div className="grid h-32 w-48 grid-cols-3 gap-1">
                              {[...Array(3)].map((_, j) => (
                                <div
                                  key={j}
                                  className="rounded bg-slate-200"
                                ></div>
                              ))}
                            </div>
                            <div className="flex-1 space-y-3">
                              <div className="h-6 w-3/4 rounded bg-slate-200"></div>
                              <div className="h-4 w-1/2 rounded bg-slate-200"></div>
                              <div className="h-4 w-full rounded bg-slate-200"></div>
                              <div className="h-4 w-2/3 rounded bg-slate-200"></div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  providers.map((provider) => (
                    <ProviderCard
                      key={provider.id}
                      provider={provider}
                      showDistance
                      distance={Math.random() * 10 + 1} // Mock distance
                    />
                  ))
                )}

                {!isLoading && providers.length === 0 && (
                  <Card className="p-12 text-center">
                    <div className="mb-4 text-slate-400">
                      <Search className="mx-auto h-16 w-16" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-800">
                      Inga resultat hittades
                    </h3>
                    <p className="mx-auto max-w-md text-slate-600">
                      Försök ändra dina sökkriterier eller filtrera mindre
                      specifikt för att hitta fler resultat.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() =>
                        onFiltersChange({ query: "", location: "" })
                      }
                    >
                      Rensa alla filter
                    </Button>
                  </Card>
                )}

                {/* Load More Button */}
                {!isLoading &&
                  providers.length > 0 &&
                  providers.length < totalCount && (
                    <div className="pt-6 text-center">
                      <Button variant="outline" size="lg">
                        Visa fler resultat
                      </Button>
                    </div>
                  )}
              </div>
            ) : (
              // Map View
              <Card className="flex h-[600px] items-center justify-center">
                <div className="text-center">
                  <Map className="mx-auto mb-4 h-16 w-16 text-slate-400" />
                  <h3 className="mb-2 text-lg font-semibold text-slate-800">
                    Kartvy
                  </h3>
                  <p className="text-slate-600">
                    Kartintegration kommer att implementeras här
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
