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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        <div className={styles.card}>
          <h3>System Status</h3>
          <p style={{ marginTop: '1rem', color: '#4caf50' }}>● All services operational</p>
          <p style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>PQC Layer Active (ML-KEM-768)</p>
        </div>

        <div className={styles.card}>
          <h3>Global Traffic Events</h3>
          <h2 style={{ fontSize: '3rem', margin: '1rem 0' }}>{totalAnalytics}</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Tracked actions across all domains</p>
        </div>

      </div>
    </div>
  );
}
