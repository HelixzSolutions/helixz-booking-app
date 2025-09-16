"use client";

import { ServiceCategory } from "~/types/booking";
import { Card, CardContent } from "~/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ServiceCategoriesProps {
  categories?: ServiceCategory[];
}

const defaultCategories: ServiceCategory[] = [
  {
    id: "1",
    name: "Massage",
    slug: "massage",
    image: "/api/placeholder/300/200",
    description: "Avkopplande massage och spa-behandlingar",
  },
  {
    id: "2",
    name: "Frisör",
    slug: "frisor",
    image: "/api/placeholder/300/200",
    description: "Klippning, färgning och styling",
  },
  {
    id: "3",
    name: "Naglar",
    slug: "naglar",
    image: "/api/placeholder/300/200",
    description: "Manikyr, pedikyr och nagelförlängning",
  },
  {
    id: "4",
    name: "Ansiktsbehandling",
    slug: "ansiktsbehandling",
    image: "/api/placeholder/300/200",
    description: "Hudvård och ansiktsbehandlingar",
  },
  {
    id: "5",
    name: "Träning",
    slug: "traning",
    image: "/api/placeholder/300/200",
    description: "Personlig träning och gruppträning",
  },
  {
    id: "6",
    name: "Wellness",
    slug: "wellness",
    image: "/api/placeholder/300/200",
    description: "Hälsa och välmående",
  },
];

export function ServiceCategories({
  categories = defaultCategories,
}: ServiceCategoriesProps) {
  return (
    <section className="bg-white px-4 py-16">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-800 md:text-4xl">
            Categories
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Upptäck våra populäraste kategorier inom skönhet och hälsa
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.slug}`}>
              <Card className="group transform overflow-hidden border-0 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  {/* Placeholder for category image */}
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 transition-transform duration-300 group-hover:scale-110">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80">
                      <span className="text-2xl font-bold text-slate-600">
                        {category.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-slate-800 transition-colors group-hover:text-blue-600">
                    {category.name}
                  </h3>
                  <p className="line-clamp-2 text-sm text-slate-600">
                    {category.description}
                  </p>

                  <div className="mt-4 flex items-center text-sm font-medium text-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span>Utforska tjänster</span>
                    <svg
                      className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="mt-12 text-center">
          <Link href="/categories">
            <Card className="inline-block cursor-pointer border-2 border-dashed border-slate-300 p-6 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50/50">
              <div className="flex items-center space-x-3 text-slate-600 hover:text-blue-600">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-current">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Se alla kategorier</div>
                  <div className="text-sm opacity-70">
                    Upptäck fler tjänster
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
