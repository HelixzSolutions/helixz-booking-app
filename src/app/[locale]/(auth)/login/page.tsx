import { redirect } from "next/navigation";
import { LoginForm } from "~/components/auth/login-form";
import { getCurrentSession } from "~/lib/server/auth/session";

export default async function Login() {
  const { session } = await getCurrentSession();
  if (session) return redirect("/dashboard");
  return <LoginForm />;
}
