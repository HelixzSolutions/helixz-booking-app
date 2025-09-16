"use client";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  Check,
  Calendar,
  CreditCard,
  FileText,
  Users,
  BarChart3,
  Clock,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

export function BusinessHero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-white px-4 py-16">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-block">
            <Badge className="border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Beauty and health booking system
            </Badge>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-800 md:text-6xl">
            Focus on your customers –
            <span className="text-blue-600">
              {" "}
              we&apos;ll take care of the rest
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-slate-600">
            Your craft deserves all your attention. That&apos;s why we do
            everything we can to keep your everyday life running smoothly – so
            you can give every customer your best.
          </p>

          <Button
            size="lg"
            className="bg-blue-600 px-8 py-4 text-lg hover:bg-blue-700"
          >
            Get started today
          </Button>
        </div>

        {/* Hero Images Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="aspect-square overflow-hidden">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                    <span className="font-semibold text-blue-600">{item}</span>
                  </div>
                  <span className="text-xs text-slate-600">Beauty Service</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BusinessPartners() {
  const partners = [
    "BJÖRN AXÉN",
    "headon EST. 2002",
    "VENUE",
    "Scratch",
    ".....",
  ];

  return (
    <section className="bg-white px-4 py-12">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <p className="mb-6 text-sm text-slate-500">
            A selection of our users
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-lg font-medium tracking-wide text-slate-400"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BusinessFeatures() {
  return (
    <section className="bg-slate-50 px-4 py-16">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left side - Features */}
          <div>
            <h2 className="mb-8 text-4xl font-bold leading-tight text-slate-800 md:text-5xl">
              Everything in one place,
              <span className="text-blue-600"> less admin</span>
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <span className="text-slate-700">Digital booking calendar</span>
              </div>

              <div className="flex items-center space-x-3">
                <CreditCard className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <span className="text-slate-700">Checkout & payment</span>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <span className="text-slate-700">Online booking 24/7</span>
              </div>

              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <span className="text-slate-700">Journal system</span>
              </div>

              <div className="flex items-center space-x-3">
                <BarChart3 className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <span className="text-slate-700">Accounting</span>
              </div>

              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <span className="text-slate-700">Customer register</span>
              </div>
            </div>

            {/* Industry Dropdown */}
            <div className="mt-8 rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Industries</span>
                <div className="flex flex-col space-y-1">
                  {[
                    "Hairdresser",
                    "Massage",
                    "Nails",
                    "Fringe",
                    "Barber",
                    "Beauty",
                    "Skincare",
                    "Tattoo artist",
                    "Alternative medicine",
                    "Psychologist",
                    "Car care",
                  ].map((industry, index) => (
                    <span key={index} className="text-sm text-slate-500">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <Card className="rotate-3 transform overflow-hidden transition-transform duration-300 hover:rotate-0">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-pink-200 to-purple-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="mx-auto mb-4 h-24 w-24 text-white" />
                    <p className="font-medium text-white">Booking Management</p>
                  </div>
                </div>

                {/* Overlay woman with tablet */}
                <div className="absolute bottom-0 right-0 flex h-3/4 w-3/4 items-end justify-center rounded-tl-3xl bg-gradient-to-tl from-pink-400 to-purple-400 pb-8">
                  <div className="text-center text-white">
                    <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                      <Calendar className="h-8 w-8" />
                    </div>
                    <p className="text-sm">Digital Calendar</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BusinessCTA() {
  return (
    <section className="bg-slate-800 px-4 py-16">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left side - Phone mockup */}
          <div className="relative">
            <Card className="overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <div className="flex aspect-[3/4] flex-col p-8">
                <div className="flex flex-1 items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="mx-auto mb-6 h-32 w-32 opacity-80" />
                    <div className="space-y-2">
                      <div className="mx-auto h-3 w-32 rounded bg-white/30"></div>
                      <div className="mx-auto h-3 w-24 rounded bg-white/30"></div>
                      <div className="mx-auto h-3 w-28 rounded bg-white/30"></div>
                    </div>
                  </div>
                </div>

                {/* Business person overlay */}
                <div className="absolute right-6 top-6 h-32 w-24 rounded-lg bg-yellow-400 opacity-90"></div>
              </div>
            </Card>
          </div>

          {/* Right side - CTA Content */}
          <div className="text-white">
            <h2 className="mb-8 text-4xl font-bold leading-tight md:text-5xl">
              Try it free for 30 days
            </h2>

            <div className="mb-8 space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 flex-shrink-0 text-green-400" />
                <span>More time for service, less admin</span>
              </div>

              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 flex-shrink-0 text-green-400" />
                <span>Simple digital booking calendar</span>
              </div>

              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 flex-shrink-0 text-green-400" />
                <span>Online booking at bokadirekt.se and our app</span>
              </div>

              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 flex-shrink-0 text-green-400" />
                <span>Startup review included</span>
              </div>

              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 flex-shrink-0 text-green-400" />
                <span>We help you migrate your information</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white px-8 text-slate-800 hover:bg-slate-100"
              >
                Get started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white px-8 text-white hover:bg-white/10"
              >
                Get contacted
              </Button>
            </div>

            <p className="mt-6 text-slate-300">
              Call us at 0771-676 700 if you have any questions or concerns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
