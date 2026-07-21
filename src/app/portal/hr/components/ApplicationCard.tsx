"use client";

import { useState } from "react";
import styles from "./ApplicationCard.module.css";

interface ApplicationCardProps {
  app: {
    id: string;
    status: string;
    createdAt: Date;
    error?: boolean;
    data?: any; // The decrypted JSON object
  };
}

export default function ApplicationCard({ app }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false);

  if (app.error || !app.data) {
    return (
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.name}>Unknown Applicant</span>
            <span className={styles.timestamp}>{new Date(app.createdAt).toLocaleString()}</span>
          </div>
          <span className={styles.badge}>{app.status}</span>
        </div>
        <div className={styles.details}>
          <div className={styles.locked}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <div>
              <strong style={{ display: 'block' }}>Data Locked</strong>
              <span style={{ fontSize: '0.85rem' }}>ML-KEM Private Key missing or invalid for this record.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { data } = app;
  const isContact = app.status === 'CONTACT';

  return (
    <div className={styles.card}>
      <div className={styles.header} onClick={() => setExpanded(!expanded)}>
        <div className={styles.headerLeft}>
          <span className={styles.name}>{isContact ? data.name : `${data.firstName} ${data.lastName}`}</span>
          <span className={styles.position}>
            {isContact ? `Inquiry: ${data.interestedService}` : `${data.position} • ${data.totalExperience} Years Exp`}
          </span>
          <span className={styles.timestamp}>{new Date(app.createdAt).toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className={styles.badge}>{isContact ? "ENTERPRISE INQUIRY" : app.status}</span>
          <svg 
            width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
            style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      {expanded && (
        <div className={styles.details}>
          {isContact ? (
            <>
              <div className={styles.section}>
                <div className={styles.sectionTitle}>Contact & Location</div>
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>Email</span>
                  <span className={styles.fieldValue}><a href={`mailto:${data.email}`} className={styles.link}>{data.email}</a></span>
                </div>
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>Phone</span>
                  <span className={styles.fieldValue}>{data.phone || 'N/A'}</span>
                </div>
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>Location</span>
                  <span className={styles.fieldValue}>{data.location || 'N/A'}</span>
                </div>
              </div>
              <div className={styles.section} style={{ gridColumn: '1 / -1' }}>
                <div className={styles.sectionTitle}>Message</div>
                <div className={styles.field}>
                  <span className={styles.fieldValue} style={{ lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
                    {data.message}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Section 1: Contact Info */}
              <div className={styles.section}>
                <div className={styles.sectionTitle}>Contact & Location</div>
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>Email</span>
                  <span className={styles.fieldValue}><a href={`mailto:${data.email}`} className={styles.link}>{data.email}</a></span>
                </div>
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>Phone</span>
                  <span className={styles.fieldValue}>{data.phone}</span>
                </div>
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>Location</span>
                  <span className={styles.fieldValue}>{data.city}, {data.state} {data.zip}, {data.country}</span>
                </div>
              </div>

              {/* Section 2: Professional */}
              <div className={styles.section}>
                <div className={styles.sectionTitle}>Professional Profile</div>
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>Resume</span>
                  <span className={styles.fieldValue}>
                    <a href={data.resumeUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>View Resume ↗</a>
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>LinkedIn</span>
                  <span className={styles.fieldValue}>
                    {data.linkedin ? <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>View Profile ↗</a> : "N/A"}
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>Education</span>
                  <span className={styles.fieldValue}>{data.highestEducation} - {data.university || "N/A"}</span>
                </div>
              </div>

              {/* Section 3: Preferences */}
              <div className={styles.section}>
                <div className={styles.sectionTitle}>Role & Preferences</div>
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>Expected Salary</span>
                  <span className={styles.fieldValue}>{data.expectedSalary || "Not specified"}</span>
                </div>
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>US Work Auth / Sponsorship</span>
                  <span className={styles.fieldValue}>{data.usWorkAuth} / {data.sponsorshipNeeded === "Yes" ? "Needs Sponsorship" : "No Sponsorship needed"}</span>
                </div>
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>Core Skills</span>
                  <span className={styles.fieldValue}>{data.skills || "N/A"}</span>
                </div>
              </div>
            </>
          )}

          <div style={{ gridColumn: '1 / -1' }}>
            <button className={styles.btnAction}>{isContact ? 'Mark as Responded' : 'Advance Candidate to Next Stage'}</button>
          </div>
        </div>
      )}
    </div>
  );
}
