"use client";

import {
  Search,
  Calendar,
  Heart,
  CreditCard,
  Gift,
  Building2,
  User,
  Menu,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { useState } from "react";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const navigationItems = [
    { name: "Search", href: "/search" },
    { name: "Bookings", href: "/bookings" },
    { name: "Favorites", href: "/favorites" },
    { name: "Connect", href: "/business" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
                <span className="text-sm font-bold text-white">B</span>
              </div>
              <span className="text-lg font-semibold text-slate-800">
                bokadirekt
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-1">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Button
                    variant="ghost"
                    className="flex h-auto items-center space-x-2 p-3 text-slate-600 hover:text-slate-900"
                    asChild
                  >
                    <Link href={item.href}>
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side - User and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop User Menu */}
            <Button
              variant="ghost"
              className="hidden items-center space-x-2 text-slate-600 hover:text-slate-900 lg:flex"
              asChild
            >
              <Link href="/login">
                <User className="h-4 w-4" />
                <span className="text-sm font-medium">Log in</span>
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="mt-8 flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className="h-12 justify-start space-x-3"
                      asChild
                    >
                      <Link href={item.href}>
                        <span>{item.name}</span>
                      </Link>
                    </Button>
                  ))}
                  <hr className="my-4" />
                  <Button
                    variant="ghost"
                    className="h-12 justify-start space-x-3"
                    asChild
                  >
                    <Link href="/login">
                      <User className="h-5 w-5" />
                      <span>Log in</span>
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
