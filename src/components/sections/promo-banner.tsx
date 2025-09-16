"use client";

import { Gift, ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

export function PromoBanner() {
  return (
    <section className="px-4 py-12">
      <div className="container mx-auto">
        <Card className="relative overflow-hidden border-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
          <div className="relative z-10 p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              {/* Left Content */}
              <div className="space-y-6 text-white">
                <div className="inline-flex items-center space-x-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
                  <Gift className="h-4 w-4" />
                  <span>ETT PRESENTKORT, TUSENTALS BEHANDLINGAR</span>
                </div>

                <div>
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                    Från massage till manikyr
                    <br />
                    <span className="text-white/90">– allt på ett kort</span>
                  </h2>
                </div>

                <Button
                  size="lg"
                  className="rounded-xl border-0 bg-orange-500 px-8 py-4 font-semibold text-white hover:bg-orange-600"
                >
                  KÖP PRESENTKORT
                </Button>
              </div>

              {/* Right Content - Gift Card Visual */}
              <div className="relative flex justify-center">
                <div className="relative">
                  {/* Gift Card */}
                  <div className="rotate-3 transform rounded-2xl bg-white p-6 shadow-2xl transition-transform duration-300 hover:rotate-0">
                    <div className="relative h-40 w-64 overflow-hidden rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 p-6 text-white">
                      <div className="absolute right-0 top-0 h-20 w-20 -translate-y-6 translate-x-6 rounded-full bg-white/10"></div>
                      <div className="absolute bottom-0 left-0 h-16 w-16 -translate-x-4 translate-y-4 rounded-full bg-white/10"></div>

                      <div className="relative z-10">
                        <div className="mb-8 flex items-center justify-between">
                          <span className="text-sm font-medium opacity-90">
                            Presentkort
                          </span>
                          <Gift className="h-5 w-5" />
                        </div>

                        <div className="space-y-2">
                          <div className="text-2xl font-bold">på egentid</div>
                          <div className="flex items-center text-sm opacity-90">
                            <span>Leverans</span>
                            <span className="ml-2">direkt via</span>
                          </div>
                          <div className="text-sm font-semibold">e-post!</div>
                        </div>
                      </div>
                    </div>

                    {/* Chat bubble */}
                    <div className="absolute -right-2 -top-2 -rotate-12 transform rounded-2xl bg-white p-3 shadow-lg">
                      <div className="relative rounded-xl bg-gray-100 p-3">
                        <div className="text-center text-xs font-medium text-gray-600">
                          Leverans
                          <br />
                          direkt via
                          <br />
                          e-post!
                        </div>
                        <div className="absolute -bottom-1 left-1/2 h-0 w-0 -translate-x-1/2 transform border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white"></div>
            <div className="absolute bottom-16 right-16 h-24 w-24 rounded-full bg-white"></div>
            <div className="absolute left-1/4 top-1/2 h-16 w-16 rounded-full bg-white"></div>
          </div>
        </Card>
      </div>
    </section>
  );
}
