"use client";

import { SearchFilters as SearchFiltersType } from "~/types/booking";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Slider } from "~/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Checkbox } from "~/components/ui/checkbox";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Badge } from "~/components/ui/badge";
import {
  SlidersHorizontal,
  X,
  Calendar as CalendarIcon,
  Star,
  MapPin,
  Filter,
} from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { sv } from "date-fns/locale";

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFiltersChange: (filters: SearchFiltersType) => void;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function SearchFilters({
  filters,
  onFiltersChange,
  isOpen = true,
  onToggle,
}: SearchFiltersProps) {
  const [priceRange, setPriceRange] = useState([
    filters.priceRange?.min || 0,
    filters.priceRange?.max || 2000,
  ]);

  const categories = [
    "Massage",
    "Frisör",
    "Naglar",
    "Ansiktsbehandling",
    "Träning",
    "Wellness",
    "Spa",
    "Skönhet",
  ];

  const timeSlots = [
    "06:00-09:00",
    "09:00-12:00",
    "12:00-15:00",
    "15:00-18:00",
    "18:00-21:00",
    "21:00-00:00",
  ];

  const handleFilterChange = (key: keyof SearchFiltersType, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFiltersChange({
      query: "",
      location: "",
    });
    setPriceRange([0, 2000]);
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  if (!isOpen) {
    return (
      <Button
        variant="outline"
        onClick={onToggle}
        className="mb-4 flex items-center space-x-2"
      >
        <Filter className="h-4 w-4" />
        <span>Filter</span>
        {activeFiltersCount > 0 && (
          <Badge variant="secondary" className="ml-2">
            {activeFiltersCount}
          </Badge>
        )}
      </Button>
    );
  }

  return (
    <Card className="sticky top-4">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2 text-lg font-semibold">
            <SlidersHorizontal className="h-5 w-5" />
            <span>Filter</span>
          </CardTitle>
          <div className="flex items-center space-x-2">
            {activeFiltersCount > 0 && (
              <>
                <Badge variant="secondary">{activeFiltersCount} aktiva</Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Rensa alla
                </Button>
              </>
            )}
            {onToggle && (
              <Button variant="ghost" size="icon" onClick={onToggle}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Category Filter */}
        <div>
          <Label className="mb-3 block text-sm font-medium text-slate-700">
            Kategori
          </Label>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={filters.category === category}
                  onCheckedChange={(checked) =>
                    handleFilterChange(
                      "category",
                      checked ? category : undefined
                    )
                  }
                />
                <Label
                  htmlFor={category}
                  className="cursor-pointer text-sm text-slate-600"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <Label className="mb-3 block text-sm font-medium text-slate-700">
            Prisintervall
          </Label>
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              onValueCommit={() =>
                handleFilterChange("priceRange", {
                  min: priceRange[0],
                  max: priceRange[1],
                })
              }
              max={2000}
              min={0}
              step={50}
              className="w-full"
            />
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>{priceRange[0]} kr</span>
              <span>{priceRange[1]} kr</span>
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <Label className="mb-3 block text-sm font-medium text-slate-700">
            Minst betyg
          </Label>
          <Select
            value={filters.rating?.toString()}
            onValueChange={(value) =>
              handleFilterChange(
                "rating",
                value ? parseFloat(value) : undefined
              )
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Välj minsta betyg" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4.5">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < 4.5
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span>4.5+</span>
                </div>
              </SelectItem>
              <SelectItem value="4.0">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < 4
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span>4.0+</span>
                </div>
              </SelectItem>
              <SelectItem value="3.5">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < 3.5
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span>3.5+</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Availability Filter */}
        <div>
          <Label className="mb-3 block text-sm font-medium text-slate-700">
            Tillgänglighet
          </Label>
          <div className="space-y-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {filters.availability?.date
                    ? format(filters.availability.date, "PPP", { locale: sv })
                    : "Välj datum"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={filters.availability?.date}
                  onSelect={(date) =>
                    handleFilterChange("availability", {
                      ...filters.availability,
                      date: date,
                    })
                  }
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Select
              value={filters.availability?.time}
              onValueChange={(value) =>
                handleFilterChange("availability", {
                  ...filters.availability,
                  time: value,
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Välj tid" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Sort By */}
        <div>
          <Label className="mb-3 block text-sm font-medium text-slate-700">
            Sortera efter
          </Label>
          <Select
            value={filters.sortBy}
            onValueChange={(value) =>
              handleFilterChange("sortBy", value as SearchFiltersType["sortBy"])
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Välj sortering" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevans</SelectItem>
              <SelectItem value="rating">Högst betyg</SelectItem>
              <SelectItem value="price">Lägsta pris</SelectItem>
              <SelectItem value="distance">Närmast</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
