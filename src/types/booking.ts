export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  image?: string;
  description?: string;
}

// Re-export from schemas for consistency
export type {
  ServiceProvider as ServiceProviderWithSchema,
  Service as ServiceWithSchema,
  OpeningHours as OpeningHoursWithSchema,
  SearchFilters as SearchFiltersWithSchema,
} from "~/lib/schemas";

export interface Location {
  id: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface ServiceProvider {
  id: string;
  name: string;
  description: string;
  rating: number;
  reviewCount: number;
  images: string[];
  avatar?: string;
  location: Location;
  categories: ServiceCategory[];
  services: Service[];
  isVerified?: boolean;
  openingHours?: OpeningHours[];
  priceRange?: {
    min: number;
    max: number;
  };
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number;
  category: ServiceCategory;
  isPopular?: boolean;
}

export interface OpeningHours {
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  openTime: string; // "09:00"
  closeTime: string; // "18:00"
  isClosed: boolean;
}

export interface SearchFilters {
  query?: string;
  location?: string;
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  availability?: {
    date: Date;
    time?: string;
  };
  sortBy?: "relevance" | "rating" | "price" | "distance";
}

export interface Booking {
  id: string;
  providerId: string;
  serviceId: string;
  userId: string;
  date: Date;
  time: string;
  duration: number;
  price: number;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  preferences?: {
    favoriteCategories: string[];
    favoriteProviders: string[];
  };
}

export interface GiftCard {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  validUntil?: Date;
}
