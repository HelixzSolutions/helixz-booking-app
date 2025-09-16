import { z } from "zod";

// Base schemas
export const LocationSchema = z.object({
  id: z.string(),
  address: z.string(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string(),
  coordinates: z
    .object({
      lat: z.number(),
      lng: z.number(),
    })
    .optional(),
});

export const ServiceCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  icon: z.string().optional(),
  image: z.string().optional(),
  description: z.string().optional(),
});

export const OpeningHoursSchema = z.object({
  dayOfWeek: z.number().min(0).max(6), // 0-6 (Sunday-Saturday)
  openTime: z.string().regex(/^\d{2}:\d{2}$/), // "09:00"
  closeTime: z.string().regex(/^\d{2}:\d{2}$/), // "18:00"
  isClosed: z.boolean(),
});

export const ServiceSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  duration: z.number().positive(), // in minutes
  originalPrice: z.number().positive().optional(),
  price: z.number().positive(),
  discount: z.number().min(0).max(100).optional(), // percentage
  category: ServiceCategorySchema,
  isPopular: z.boolean().optional(),
  availableUntil: z.string().optional(), // "17 Sep" format
  bookingUrl: z.string().optional(),
  features: z.array(z.string()).optional(),
});

export const ServiceProviderSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  rating: z.number().min(0).max(5),
  reviewCount: z.number().min(0),
  images: z.array(z.string()),
  avatar: z.string().optional(),
  location: LocationSchema,
  categories: z.array(ServiceCategorySchema),
  services: z.array(ServiceSchema),
  servicesByCategory: z.record(z.string(), z.array(ServiceSchema)).optional(),
  isVerified: z.boolean().optional(),
  openingHours: z.array(OpeningHoursSchema).optional(),
  priceRange: z
    .object({
      min: z.number().positive(),
      max: z.number().positive(),
    })
    .optional(),
  contact: z
    .object({
      phone: z.string().optional(),
      email: z.string().email().optional(),
      website: z.string().url().optional(),
    })
    .optional(),
  features: z.array(z.string()).optional(), // ["Presentkort", "Friskvårdskort"]
  staff: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
        avatar: z.string().optional(),
        specialties: z.array(z.string()).optional(),
      })
    )
    .optional(),
});

export const SearchFiltersSchema = z.object({
  query: z.string().optional(),
  location: z.string().optional(),
  category: z.string().optional(),
  priceRange: z
    .object({
      min: z.number(),
      max: z.number(),
    })
    .optional(),
  rating: z.number().min(0).max(5).optional(),
  availability: z
    .object({
      date: z.date(),
      time: z.string().optional(),
    })
    .optional(),
  sortBy: z.enum(["relevance", "rating", "price", "distance"]).optional(),
});

export const BookingSchema = z.object({
  id: z.string(),
  providerId: z.string(),
  serviceId: z.string(),
  userId: z.string(),
  date: z.date(),
  time: z.string(),
  duration: z.number().positive(),
  price: z.number().positive(),
  status: z.enum(["pending", "confirmed", "completed", "cancelled"]),
  notes: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  avatar: z.string().optional(),
  phone: z.string().optional(),
  preferences: z
    .object({
      favoriteCategories: z.array(z.string()),
      favoriteProviders: z.array(z.string()),
    })
    .optional(),
});

export const GiftCardSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  price: z.number().positive(),
  validUntil: z.date().optional(),
});

// Type exports
export type Location = z.infer<typeof LocationSchema>;
export type ServiceCategory = z.infer<typeof ServiceCategorySchema>;
export type OpeningHours = z.infer<typeof OpeningHoursSchema>;
export type Service = z.infer<typeof ServiceSchema>;
export type ServiceProvider = z.infer<typeof ServiceProviderSchema>;
export type SearchFilters = z.infer<typeof SearchFiltersSchema>;
export type Booking = z.infer<typeof BookingSchema>;
export type User = z.infer<typeof UserSchema>;
export type GiftCard = z.infer<typeof GiftCardSchema>;
