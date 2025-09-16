import { redirect } from "next/navigation";
import { ResetPasswordForm } from "~/components/auth/reset-password-form";
import { getCurrentSession } from "~/lib/server/auth/session";

export default async function ResetPassword() {
  const { session } = await getCurrentSession();
  if (session) return redirect("/dashboard");
  return <ResetPasswordForm />;
}
