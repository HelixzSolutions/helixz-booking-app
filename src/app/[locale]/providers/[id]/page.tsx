import { ProviderDetailPage } from "~/components/provider/provider-detail-page";
import { ServiceProviderSchema } from "~/lib/schemas";
import { notFound } from "next/navigation";

interface ProviderPageProps {
  params: Promise<{ id: string }>;
}

// This would typically fetch from your API
async function getProviderData(id: string) {
  try {
    // For demo, we're using static JSON data
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/data/gg-skonhetssalong.json`
    );

    if (!response.ok) {
      throw new Error("Provider not found");
    }

    const data = await response.json();

    // Validate with Zod schema
    const validatedProvider = ServiceProviderSchema.parse(data.provider);

    return validatedProvider;
  } catch (error) {
    console.error("Error fetching provider data:", error);
    return null;
  }
}

export async function generateMetadata({ params }: ProviderPageProps) {
  const { id } = await params;
  const provider = await getProviderData(id);

  if (!provider) {
    return {
      title: "Provider Not Found",
    };
  }

  return {
    title: `${provider.name} - Boka tid online`,
    description: provider.description,
    openGraph: {
      title: provider.name,
      description: provider.description,
      images: provider.images.slice(0, 1),
    },
  };
}

export default async function ProviderPage({ params }: ProviderPageProps) {
  const { id } = await params;
  const provider = await getProviderData(id);

  if (!provider) {
    notFound();
  }

  return <ProviderDetailPage provider={provider} />;
}
