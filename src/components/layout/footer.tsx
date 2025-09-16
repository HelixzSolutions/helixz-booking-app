"use client";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  Download,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "My account",
      links: [
        { name: "My bookings", href: "/bookings" },
        { name: "My favorites", href: "/favorites" },
        { name: "Use gift cards", href: "/gift-cards/use" },
        { name: "Use wellness card", href: "/wellness-card" },
        { name: "Contact", href: "/contact" },
        { name: "Support", href: "/support" },
        { name: "Company login", href: "/business/login" },
        { name: "About bokadirekt", href: "/about" },
      ],
    },
    {
      title: "Popular in beauty",
      links: [
        { name: "Hairdresser", href: "/categories/hairdresser" },
        { name: "Nails", href: "/categories/nails" },
        { name: "Skincare", href: "/categories/skincare" },
        { name: "Eyelash extensions", href: "/categories/eyelash" },
        { name: "Lash lift", href: "/categories/lash-lift" },
        { name: "Brow lift", href: "/categories/brow-lift" },
        { name: "Fillers", href: "/categories/fillers" },
        { name: "IPL", href: "/categories/ipl" },
        { name: "Waxing & hair removal", href: "/categories/waxing" },
        { name: "Chiropody", href: "/categories/chiropody" },
      ],
    },
    {
      title: "Popular in health",
      links: [
        { name: "Massage", href: "/categories/massage" },
        { name: "Training", href: "/categories/training" },
        { name: "Wellness", href: "/categories/wellness" },
        { name: "Acne", href: "/categories/acne" },
        { name: "Physiotherapy", href: "/categories/physiotherapy" },
        { name: "Naprapath", href: "/categories/naprapath" },
        { name: "Chiropractic", href: "/categories/chiropractic" },
        { name: "Sweating treatment", href: "/categories/sweating" },
      ],
    },
    {
      title: "More from Bokadirekt",
      links: [
        { name: "Buy gift cards", href: "/gift-cards" },
        { name: "Buy wellness card", href: "/wellness-card/buy" },
        { name: "Career", href: "/career" },
        { name: "Newsletter", href: "/newsletter" },
        { name: "Blog - Beauty Lab", href: "/blog" },
        { name: "Facts and advice", href: "/advice" },
        { name: "FAQ - Beauty treatments", href: "/faq" },
        { name: "Our partners", href: "/partners" },
      ],
    },
  ];

  return (
    <footer className="border-t bg-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        {/* App Download Section */}
        <div className="mb-12">
          <div className="rounded-2xl bg-slate-50 p-8">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-slate-800">
                  Download the Bokadirekt app
                </h3>
                <p className="mb-6 text-slate-600">
                  Boka, avboka och få påminnelser direkt i din telefon. Ladda
                  ner appen för enklare bokningar.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    variant="outline"
                    className="flex h-auto items-center space-x-3 px-6 py-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black">
                      <Download className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-slate-500">Ladda ner på</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex h-auto items-center space-x-3 px-6 py-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600">
                      <Download className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-slate-500">Hämta det på</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="flex h-48 w-48 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100">
                    <Smartphone className="h-24 w-24 text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Section */}
        <div className="mb-12">
          <div className="rounded-2xl bg-blue-50 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-slate-800">
              Become visible on Bokadirekt
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-slate-600">
              Nå tusentals nya kunder genom att ansluta ditt företag till
              Bokadirekt. Öka din synlighet och låt kunderna enkelt boka dina
              tjänster online.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Book directly for companies
            </Button>
          </div>
        </div>

        {/* Links Section */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="mb-4 font-semibold text-slate-800">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-slate-800"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
                <span className="text-sm font-bold text-white">B</span>
              </div>
              <span className="text-lg font-semibold text-slate-800">
                bokadirekt
              </span>
            </div>
            <span className="text-sm text-slate-500">
              © Bokadirekt {currentYear}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Link
              href="/instagram"
              className="text-slate-400 hover:text-slate-600"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="/linkedin"
              className="text-slate-400 hover:text-slate-600"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="/facebook"
              className="text-slate-400 hover:text-slate-600"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>

          {/* Payment Icons and Legal */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              {/* Payment method icons would go here */}
              <div className="flex space-x-2">
                <div className="flex h-5 w-8 items-center justify-center rounded bg-blue-600 text-xs font-bold text-white">
                  V
                </div>
                <div className="flex h-5 w-8 items-center justify-center rounded bg-red-500 text-xs font-bold text-white">
                  M
                </div>
                <div className="flex h-5 w-8 items-center justify-center rounded bg-gray-800 text-xs font-bold text-white">
                  P
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500">
              <span className="inline-flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>Swedish - Sverige</span>
              </span>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-6 border-t border-slate-100 pt-6">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-slate-700">
              Ethical policy
            </Link>
            <Link href="/privacy" className="hover:text-slate-700">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-slate-700">
              Cookies
            </Link>
            <Link href="/terms" className="hover:text-slate-700">
              General terms and conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
