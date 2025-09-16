"use client";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import Link from "next/link";
import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle login logic here
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="grid min-h-screen md:grid-cols-2">
      {/* Left side - Branding */}
      <div className="hidden flex-col justify-between bg-teal-500 p-12 text-white md:flex">
        <div>
          <div className="mb-12 flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-white">
              <span className="text-sm font-bold text-teal-500">B</span>
            </div>
            <span className="text-xl font-semibold">bokadirekt.se</span>
          </div>

          <div className="max-w-md">
            <h1 className="mb-6 text-4xl font-bold leading-tight">
              Book an appointment directly online
            </h1>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                At bokadirekt.se you can quickly and easily book appointments
                for everything from massage and beauty to training and health.
              </p>

              <p>
                With our wide range of different salons, facilities and more,
                you can book an appointment whenever you want and even choose
                last-minute times.
              </p>

              <p>
                We offer various treatments, workouts, beauty procedures and
                much more. Find great prices at the right times!
              </p>
            </div>
          </div>
        </div>

        <div className="text-sm opacity-75">
          © Bokadirekt | Stockholm AB 2025
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex items-center justify-center p-8">
        <Card className="w-full max-w-md border-0 shadow-none">
          <CardHeader className="pb-8 text-center">
            <CardTitle className="text-2xl font-bold text-slate-800">
              Log in
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 px-4"
                  required
                />
              </div>

              <Button
                type="submit"
                className="h-12 w-full bg-teal-600 font-medium text-white hover:bg-teal-700"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "CONTINUE"}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-slate-500">or</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                variant="outline"
                className="h-12 w-full justify-start space-x-3"
                onClick={() => handleSocialLogin("Google")}
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500">
                  <span className="text-xs font-bold text-white">G</span>
                </div>
                <span>Continue with Google</span>
              </Button>

              <Button
                variant="outline"
                className="h-12 w-full justify-start space-x-3"
                onClick={() => handleSocialLogin("Facebook")}
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                  <span className="text-xs font-bold text-white">f</span>
                </div>
                <span>Continue with Facebook</span>
              </Button>

              <Button
                variant="outline"
                className="h-12 w-full justify-start space-x-3"
                onClick={() => handleSocialLogin("Apple")}
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black">
                  <span className="text-xs font-bold text-white">🍎</span>
                </div>
                <span>Continue with Apple</span>
              </Button>
            </div>

            <div className="text-center">
              <Link
                href="/reset-password"
                className="text-sm font-medium text-teal-600 hover:text-teal-700"
              >
                Forgot your password?
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
