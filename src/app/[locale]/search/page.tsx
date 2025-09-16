"use client";

import { SearchResults } from "~/components/booking/search-results";
import { SearchFilters as SearchFiltersType } from "~/types/booking";
import { useState } from "react";

export default function SearchPage() {
  const [filters, setFilters] = useState<SearchFiltersType>({
    query: "",
    location: "",
  });

  return (
    <SearchResults
      providers={[]}
      totalCount={14489}
      filters={filters}
      onFiltersChange={setFilters}
      isLoading={false}
    />
  );
}
