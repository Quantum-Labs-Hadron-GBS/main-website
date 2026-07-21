"use client";

import { signOut } from "next-auth/react";
import styles from "./Portal.module.css";

export default function LogoutButton() {
  return (
    <button 
      onClick={() => signOut({ callbackUrl: "/" })}
      className={styles.logoutButton}
    >
      Sign Out
    </button>
  );
}
