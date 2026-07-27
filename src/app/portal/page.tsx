import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import styles from "./Portal.module.css";
import { prisma } from "@/lib/prisma/db";

export default async function PortalDashboard() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user) {
    return null;
  }
  
  const role = (session.user as any).role;
  const name = session.user.name || session.user.email;

  // Generic stats
  const totalAnalytics = await prisma.analyticsEvent.count();

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1>Welcome, {name}</h1>
        <p>Your current role is {role}.</p>
      </div>

      <div >
        
        <div className={styles.card}>
          <h3>System Status</h3>
          <p >● All services operational</p>
          <p >PQC Layer Active (ML-KEM-768)</p>
        </div>

        <div className={styles.card}>
          <h3>Global Traffic Events</h3>
          <h2 >{totalAnalytics}</h2>
          <p >Tracked actions across all domains</p>
        </div>

      </div>
    </div>
  );
}
