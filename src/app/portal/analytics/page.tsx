import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma/db";
import styles from "../Portal.module.css";
import { redirect } from "next/navigation";

export default async function AnalyticsDashboard() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user) {
    redirect("/portal/login");
  }

  const role = (session.user as any).role;
  if (role !== "ADMIN" && role !== "ANALYTICS" && role !== "SALES") {
    return <div className={styles.pageHeader}><h1>Access Denied</h1><p>You do not have permission to view analytics.</p></div>;
  }

  // Aggregate Data
  const totalEvents = await prisma.analyticsEvent.count();
  
  const topPages = await prisma.analyticsEvent.groupBy({
    by: ['page'],
    _count: { page: true },
    orderBy: { _count: { page: 'desc' } },
    take: 5,
  });

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1>Traffic Analytics</h1>
        <p>Global non-PII metrics.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        <div className={styles.card}>
          <h3>Total Captured Events</h3>
          <h2 style={{ fontSize: '3rem', margin: '1rem 0', color: 'var(--accent)' }}>{totalEvents}</h2>
        </div>
      </div>

      <div className={styles.card}>
        <h3>Top Visited Paths</h3>
        <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ padding: '0.5rem 0' }}>Path</th>
              <th style={{ padding: '0.5rem 0' }}>Hits</th>
            </tr>
          </thead>
          <tbody>
            {topPages.map((page, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '0.5rem 0' }}>{page.page}</td>
                <td style={{ padding: '0.5rem 0' }}>{page._count.page}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {topPages.length === 0 && <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.5)' }}>No data captured yet.</p>}
      </div>
    </div>
  );
}
