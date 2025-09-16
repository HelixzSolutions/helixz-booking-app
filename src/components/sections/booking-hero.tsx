"use client";

import { Search, MapPin } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useState } from "react";

export function BookingHero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    // Handle search logic here
    console.log("Searching for:", searchQuery, "in:", location);
  };

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="spa" patternUnits="userSpaceOnUse" width="40" height="40"><circle cx="20" cy="20" r="2" fill="%23e2e8f0" opacity="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(%23spa)"/></svg>')`,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Main Heading */}
        <div className="mx-auto mb-12 max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-slate-800 md:text-6xl">
            Everything in beauty
            <br />
            <span className="text-slate-600">and health</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 md:text-xl">
            Boka tid hos Sveriges bästa frisörer, nageltekniker, massörer och
            mycket mer
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-lg md:flex-row">
            {/* Service Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-slate-400" />
              <Input
                placeholder="Vad vill du boka?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-xl border-0 bg-slate-50 py-4 pl-12 pr-4 text-lg transition-all placeholder:text-slate-500 focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Location Search */}
            <div className="relative flex-1">
              <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-slate-400" />
              <Input
                placeholder="Var?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="rounded-xl border-0 bg-slate-50 py-4 pl-12 pr-4 text-lg transition-all placeholder:text-slate-500 focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Search Button */}
            <Button
              onClick={handleSearch}
              size="lg"
              className="min-w-[120px] rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-700"
            >
              Sök
            </Button>
          </div>

          {/* Popular Searches */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="text-sm text-slate-500">Populärt:</span>
            {[
              "Massage",
              "Frisör",
              "Naglar",
              "Ansiktsbehandling",
              "Träning",
            ].map((item) => (
              <Button
                key={item}
                variant="outline"
                size="sm"
                className="border-slate-200 bg-white/80 text-sm text-slate-600 hover:bg-white"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
