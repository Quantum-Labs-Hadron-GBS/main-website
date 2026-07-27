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

      <div >
        <div className={styles.card}>
          <h3>Total Captured Events</h3>
          <h2 >{totalEvents}</h2>
        </div>
      </div>

      <div className={styles.card}>
        <h3>Top Visited Paths</h3>
        <table >
          <thead>
            <tr >
              <th >Path</th>
              <th >Hits</th>
            </tr>
          </thead>
          <tbody>
            {topPages.map((page, idx) => (
              <tr key={idx} >
                <td >{page.page}</td>
                <td >{page._count.page}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {topPages.length === 0 && <p >No data captured yet.</p>}
      </div>
    </div>
  );
}
