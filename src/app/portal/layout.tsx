import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import styles from "./Portal.module.css";
import LogoutButton from "./LogoutButton";

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    // If not authenticated, just render the login page without the sidebar
    return <main className={styles.portalContainer}>{children}</main>;
  }

  const role = (session.user as any).role;

  return (
    <div className={styles.portalContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>Hadron Portal</h2>
          <p className={styles.roleBadge}>{role}</p>
        </div>
        <nav className={styles.nav}>
          <Link href="/portal" className={styles.navLink}>Dashboard</Link>
          
          {(role === "ADMIN" || role === "HR") && (
            <Link href="/portal/hr" className={styles.navLink}>HR Pipeline</Link>
          )}
          
          {(role === "ADMIN" || role === "ANALYTICS" || role === "SALES") && (
            <Link href="/portal/analytics" className={styles.navLink}>Analytics</Link>
          )}

          <div className={styles.bottomNav}>
            <LogoutButton />
          </div>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
