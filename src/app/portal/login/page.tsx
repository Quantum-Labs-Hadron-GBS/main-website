import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";
import styles from "../Portal.module.css";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/portal");
  }

  return (
    <div className={styles.portalContainer} >
      <div className={styles.card} >
        <h2 >Hadron Enterprise</h2>
        <LoginForm />
      </div>
    </div>
  );
}
