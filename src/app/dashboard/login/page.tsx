import { redirect } from "next/navigation";
import { getHrConfig, getHrSession } from "@/lib/careers/auth";
import LoginForm from "./LoginForm";

export const dynamic = "force-dynamic";

export default async function HrLoginPage() {
  if (await getHrSession()) redirect("/dashboard");
  return <LoginForm configured={Boolean(getHrConfig())} />;
}
