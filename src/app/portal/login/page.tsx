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
    <div className={styles.portalContainer} style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div className={styles.card} style={{ maxWidth: '400px', width: '100%', padding: '2rem' }}>
        <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Hadron Enterprise</h2>
        <LoginForm />
      </div>
    </div>
  );
}
