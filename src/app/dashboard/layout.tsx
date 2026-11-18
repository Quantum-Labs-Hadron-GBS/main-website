import type { Metadata } from "next";
import styles from "./Dashboard.module.css";

export const metadata: Metadata = {
  title: { absolute: "Careers Dashboard | Hadron GBS" },
  robots: { index: false, follow: false, nocache: true },
};

export default function HrDashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.shell}>{children}</div>;
}
