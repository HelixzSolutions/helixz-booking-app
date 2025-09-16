"use client";

import { ServiceProvider } from "~/lib/schemas";
import { ProviderHero } from "~/components/provider/provider-hero";
import { ProviderGallery } from "~/components/provider/provider-gallery";
import { ServiceListing } from "~/components/provider/service-listing";
import { ProviderSidebar } from "~/components/provider/provider-sidebar";

interface ProviderDetailPageProps {
  provider: ServiceProvider;
}

export function ProviderDetailPage({ provider }: ProviderDetailPageProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Provider Hero */}
      <ProviderHero provider={provider} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Images and Services */}
          <div className="space-y-8 lg:col-span-2">
            {/* Image Gallery */}
            <ProviderGallery
              images={provider.images}
              providerName={provider.name}
            />

            {/* Services */}
            <ServiceListing
              services={provider.services}
              servicesByCategory={provider.servicesByCategory}
            />
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <ProviderSidebar provider={provider} className="sticky top-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
