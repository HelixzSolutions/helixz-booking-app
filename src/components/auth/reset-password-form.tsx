"use client";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsEmailSent(true);
    }, 1500);
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
              Reset your password
            </h1>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Enter your email address and we&apos;ll send you instructions on
                how to reset your password.
              </p>

              <p>
                Make sure to check your spam folder if you don&apos;t receive
                the email within a few minutes.
              </p>
            </div>
          </div>
        </div>

        <div className="text-sm opacity-75">
          © Bokadirekt | Stockholm AB 2025
        </div>
      </div>

      {/* Right side - Reset Form */}
      <div className="flex items-center justify-center p-8">
        <Card className="w-full max-w-md border-0 shadow-none">
          {!isEmailSent ? (
            <>
              <CardHeader className="pb-8 text-center">
                <CardTitle className="mb-2 text-2xl font-bold text-slate-800">
                  Forgot password
                </CardTitle>
                <p className="text-sm text-slate-600">
                  Enter your email address and we&apos;ll send you a link to
                  reset your password
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 px-4"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-12 w-full bg-teal-600 font-medium text-white hover:bg-teal-700"
                    disabled={isLoading || !email}
                  >
                    {isLoading ? "SENDING..." : "SEND RESET LINK"}
                  </Button>
                </form>

                <div className="text-center">
                  <Link
                    href="/login"
                    className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700"
                  >
                    <ArrowLeft className="mr-1 h-4 w-4" />
                    Back to login
                  </Link>
                </div>
              </CardContent>
            </>
          ) : (
            <>
              <CardHeader className="pb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="mb-2 text-2xl font-bold text-slate-800">
                  Check your email
                </CardTitle>
                <p className="text-sm text-slate-600">
                  We&apos;ve sent a password reset link to{" "}
                  <strong>{email}</strong>
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                  <p className="text-sm text-green-800">
                    If you don&apos;t see the email, check your spam folder or
                    try a different email address.
                  </p>
                </div>

                <Button
                  className="h-12 w-full bg-teal-600 font-medium text-white hover:bg-teal-700"
                  onClick={() => {
                    setIsEmailSent(false);
                    setEmail("");
                  }}
                >
                  TRY ANOTHER EMAIL
                </Button>

                <div className="text-center">
                  <Link
                    href="/login"
                    className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700"
                  >
                    <ArrowLeft className="mr-1 h-4 w-4" />
                    Back to login
                  </Link>
                </div>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
