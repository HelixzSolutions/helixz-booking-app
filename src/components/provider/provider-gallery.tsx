"use client";

import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProviderGalleryProps {
  images: string[];
  providerName: string;
  className?: string;
}

export function ProviderGallery({
  images,
  providerName,
  className,
}: ProviderGalleryProps) {
  const [showAllImages, setShowAllImages] = useState(false);
  const displayImages = showAllImages ? images : images.slice(0, 2);

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {displayImages.map((image, index) => (
          <Card
            key={index}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden"
          >
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
              {/* Placeholder for actual images */}
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-slate-300">
                  <span className="text-sm text-slate-600">📸</span>
                </div>
                <span className="text-sm text-slate-500">
                  {providerName} - Bild {index + 1}
                </span>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          </Card>
        ))}
      </div>

      {/* Show More Images Button */}
      {!showAllImages && images.length > 2 && (
        <Button
          variant="outline"
          className="flex w-full items-center space-x-2 md:w-auto"
          onClick={() => setShowAllImages(true)}
        >
          <span>Fler bilder</span>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100">
            <ChevronRight className="h-3 w-3" />
          </div>
        </Button>
      )}

      {/* Show Less Button */}
      {showAllImages && images.length > 2 && (
        <Button
          variant="outline"
          className="w-full md:w-auto"
          onClick={() => setShowAllImages(false)}
        >
          Visa färre bilder
        </Button>
      )}
    </div>
  );
}
