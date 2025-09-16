import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function ProvidersIndexPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-bold text-slate-800">
          Provider Pages
        </h1>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>G&G Skönhetssalong AB</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-slate-600">
                Professionell skönhetssalong i Stockholm med fokus på waxing och
                hudvård.
              </p>
              <Link href="/providers/gg-skonhetssalong-ab-19175">
                <Button>View Provider Details</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Demo Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold">Features Implemented:</h3>
                <ul className="list-inside list-disc space-y-1 text-sm text-slate-600">
                  <li>Provider hero section with navigation tabs</li>
                  <li>
                    Image gallery with &ldquo;More Images&rdquo; functionality
                  </li>
                  <li>Expandable service categories (Waxing)</li>
                  <li>Service cards with pricing and discounts</li>
                  <li>Opening hours sidebar</li>
                  <li>Contact information</li>
                  <li>Zod schema validation</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Data Structure:</h3>
                <ul className="list-inside list-disc space-y-1 text-sm text-slate-600">
                  <li>Comprehensive TypeScript interfaces</li>
                  <li>Zod schemas for runtime validation</li>
                  <li>Sample JSON data matching screenshots</li>
                  <li>Ready for API integration</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
