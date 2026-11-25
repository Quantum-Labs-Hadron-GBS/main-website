import { redirect } from "next/navigation";
import { MIN_PASSWORD_LENGTH, getHrConfig, getHrSession, isSetupOpen } from "@/lib/careers/auth";
import LoginForm from "./LoginForm";

export const dynamic = "force-dynamic";

export default async function HrLoginPage() {
  if (await getHrSession()) redirect("/dashboard");
  const configured = Boolean(getHrConfig());
  const setupOpen = configured ? await isSetupOpen().catch(() => false) : false;
  return <LoginForm configured={configured} setupOpen={setupOpen} minPasswordLength={MIN_PASSWORD_LENGTH} />;
}
