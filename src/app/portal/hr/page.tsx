import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma/db";
import styles from "../Portal.module.css";
import { redirect } from "next/navigation";
import { decryptPayload } from "@/lib/pqc/decrypt";
import ApplicationCard from "./components/ApplicationCard";

export default async function HRDashboard() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user) {
    redirect("/portal/login");
  }

  const role = (session.user as any).role;
  if (role !== "ADMIN" && role !== "HR") {
    return <div className={styles.pageHeader}><h1>Access Denied</h1><p>You do not have permission to view this pipeline.</p></div>;
  }

  // Fetch both Job Applications and Contact Submissions
  const rawApplications = await prisma.jobApplication.findMany({
    orderBy: { createdAt: 'desc' },
  });

  const rawContacts = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: 'desc' },
  });

  // Attempt to decrypt job applications on the fly
  const applications = await Promise.all(rawApplications.map(async (app) => {
    try {
      const plaintext = await decryptPayload({
        ciphertext: app.ciphertext,
        encapsulated_key: app.encapsulated_key,
        iv: app.iv,
        auth_tag: app.auth_tag,
        key_version: app.key_version,
      });
      return { id: app.id, status: app.status, createdAt: app.createdAt, data: plaintext };
    } catch (e) {
      return { id: app.id, status: app.status, createdAt: app.createdAt, data: null, error: true };
    }
  }));

  // Decrypt contact submissions on the fly
  const contacts = await Promise.all(rawContacts.map(async (contact) => {
    try {
      const plaintext = await decryptPayload({
        ciphertext: contact.ciphertext,
        encapsulated_key: contact.encapsulated_key,
        iv: contact.iv,
        auth_tag: contact.auth_tag,
        key_version: contact.key_version,
      });
      return { id: contact.id, status: 'CONTACT', createdAt: contact.createdAt, data: plaintext };
    } catch (e) {
      return { id: contact.id, status: 'CONTACT', createdAt: contact.createdAt, data: null, error: true };
    }
  }));

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1>HR Candidate Pipeline</h1>
        <p>Post-Quantum Decryption Active. Data decrypted entirely in memory.</p>
      </div>

      <h3 >Job Applications</h3>
      <div >
        {applications.length === 0 ? (
          <div className={styles.card}>No applications received yet.</div>
        ) : applications.map((app) => (
          <ApplicationCard key={app.id} app={app} />
        ))}
      </div>

      <h3 >Enterprise Inquiries</h3>
      <div >
        {contacts.length === 0 ? (
          <div className={styles.card}>No inquiries received yet.</div>
        ) : contacts.map((contact) => (
          <ApplicationCard key={contact.id} app={contact} />
        ))}
      </div>
    </div>
  );
}
