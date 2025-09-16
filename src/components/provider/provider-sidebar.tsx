"use client";

import { ServiceProvider } from "~/lib/schemas";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import { Clock, MapPin, Phone, Mail, Globe, Calendar } from "lucide-react";

interface ProviderSidebarProps {
  provider: ServiceProvider;
  className?: string;
}

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayNamesSwedish = [
  "Söndag",
  "Måndag",
  "Tisdag",
  "Onsdag",
  "Torsdag",
  "Fredag",
  "Lördag",
];

export function ProviderSidebar({ provider, className }: ProviderSidebarProps) {
  const formatTime = (time: string) => {
    return time.replace(":", ".");
  };

  const getCurrentDayIndex = () => {
    return new Date().getDay();
  };

  const isOpenNow = () => {
    const now = new Date();
    const currentDay = now.getDay();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const todayHours = provider.openingHours?.find(
      (hours) => hours.dayOfWeek === currentDay
    );

    if (!todayHours || todayHours.isClosed) return false;

    const [openHour, openMin] = todayHours.openTime.split(":").map(Number);
    const [closeHour, closeMin] = todayHours.closeTime.split(":").map(Number);

    const openTime = openHour * 60 + openMin;
    const closeTime = closeHour * 60 + closeMin;

    return currentTime >= openTime && currentTime <= closeTime;
  };

  const getOpeningHoursForDay = (dayIndex: number) => {
    return provider.openingHours?.find((hours) => hours.dayOfWeek === dayIndex);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Provider Image */}
      <Card className="overflow-hidden">
        <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
              <span className="text-2xl font-bold text-blue-600">
                {provider.name.charAt(0)}
              </span>
            </div>
            <h3 className="font-semibold text-slate-800">{provider.name}</h3>
          </div>
        </div>
      </Card>

      {/* Opening Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Clock className="h-5 w-5" />
            <span>Regular opening hours</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {provider.openingHours ? (
            dayNamesSwedish.map((dayName, index) => {
              const hours = getOpeningHoursForDay(index);
              const isToday = index === getCurrentDayIndex();
              const isCurrentlyOpen = isToday && isOpenNow();

              return (
                <div
                  key={dayName}
                  className={`flex items-center justify-between ${isToday ? "font-medium" : ""}`}
                >
                  <span
                    className={`${isToday ? "text-slate-800" : "text-slate-600"}`}
                  >
                    {dayName}
                  </span>
                  <div className="flex items-center space-x-2">
                    {hours?.isClosed ? (
                      <span className="text-sm font-medium text-red-600">
                        Closed
                      </span>
                    ) : (
                      <span
                        className={`text-sm ${isToday ? "text-slate-800" : "text-slate-600"}`}
                      >
                        {formatTime(hours?.openTime || "09:00")} -{" "}
                        {formatTime(hours?.closeTime || "17:00")}
                      </span>
                    )}
                    {isToday && isCurrentlyOpen && (
                      <Badge className="bg-green-100 text-xs text-green-800">
                        Öppet nu
                      </Badge>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-4 text-center">
              <Clock className="mx-auto mb-2 h-8 w-8 text-slate-300" />
              <p className="text-sm text-slate-500">
                Öppettider ej tillgängliga
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Location */}
          <div className="flex items-start space-x-3">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
            <div className="text-sm">
              <div className="text-slate-800">{provider.location.address}</div>
              <div className="text-slate-600">
                {provider.location.postalCode} {provider.location.city}
              </div>
            </div>
          </div>

          {/* Phone */}
          {provider.contact?.phone && (
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 flex-shrink-0 text-slate-400" />
              <a
                href={`tel:${provider.contact.phone}`}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                {provider.contact.phone}
              </a>
            </div>
          )}

          {/* Email */}
          {provider.contact?.email && (
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 flex-shrink-0 text-slate-400" />
              <a
                href={`mailto:${provider.contact.email}`}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                {provider.contact.email}
              </a>
            </div>
          )}

          {/* Website */}
          {provider.contact?.website && (
            <div className="flex items-center space-x-3">
              <Globe className="h-4 w-4 flex-shrink-0 text-slate-400" />
              <a
                href={provider.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Besök webbplats
              </a>
            </div>
          )}

          <Separator />

          {/* Book Appointment Button */}
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            <Calendar className="mr-2 h-4 w-4" />
            Boka tid
          </Button>
        </CardContent>
      </Card>

      {/* Features */}
      {provider.features && provider.features.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tillgängliga tjänster</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {provider.features.map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
