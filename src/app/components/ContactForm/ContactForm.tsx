"use client";

import { useState, useEffect } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    interestedService: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "encrypting" | "uploading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [pqcKey, setPqcKey] = useState<{ publicKey: string; keyVersion: number } | null>(null);

  // Cache public key on mount
  useEffect(() => {
    fetch("/api/pqc/public-key")
      .then(res => res.json())
      .then(data => {
        if (data.publicKey) {
          setPqcKey({ publicKey: data.publicKey, keyVersion: data.keyVersion });
        }
      })
      .catch(err => console.error("Failed to load PQC key:", err));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("encrypting");

    try {
      if (!pqcKey) throw new Error("Encryption key not ready. Please refresh the page.");

      // 1. Lazy load ML-KEM to prevent bundle bloat on initial page load
      const { browserEncryptPayload } = await import("@/lib/pqc/browserEncrypt");
      
      // 2. Encrypt locally in browser memory
      const encryptedData = await browserEncryptPayload(formData, pqcKey.publicKey, pqcKey.keyVersion);

      // 3. Upload Ciphertext
      setStatus("uploading");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(encryptedData),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => null);
        throw new Error(errData?.error || "Failed to submit form to server.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        interestedService: "",
        message: "",
      });
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message || "An error occurred while submitting your message.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Get in Touch</h2>
      <p className={styles.subtitle}>Our enterprise team will get back to you shortly.</p>

      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Your Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              className={styles.input} 
              required 
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email Address *</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              className={styles.input} 
              required 
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>Contact Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              className={styles.input} 
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="location" className={styles.label}>Location</label>
            <input 
              type="text" 
              id="location" 
              name="location"
              className={styles.input} 
              value={formData.location}
              onChange={handleChange}
              placeholder="City, Country"
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="interestedService" className={styles.label}>Interested Service *</label>
          <select 
            id="interestedService" 
            name="interestedService"
            className={styles.select} 
            required
            value={formData.interestedService}
            onChange={handleChange}
          >
            <option value="" disabled>Select Service</option>
            <option value="Quantum Services">Quantum Services</option>
            <option value="ITSM">ITSM</option>
            <option value="ITOM">ITOM</option>
            <option value="RPA">RPA</option>
            <option value="Salesforce">Salesforce</option>
            <option value="DevOps">DevOps</option>
            <option value="SAP">SAP</option>
            <option value="AWS">AWS</option>
            <option value="Microsoft">Microsoft</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Your Message *</label>
          <textarea 
            id="message" 
            name="message"
            className={styles.textarea} 
            required 
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
          />
        </div>

        <button 
          type="submit" 
          className={styles.submitBtn} 
          disabled={status !== "idle" && status !== "error"}
        >
          {status === "encrypting" ? "Encrypting Locally..." : 
           status === "uploading" ? "Uploading Ciphertext..." : "Send Message"}
        </button>

        {(status === "encrypting" || status === "uploading" || status === "success") && (
          <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--surface)', border: '1px solid var(--accent)', borderRadius: '12px', fontSize: '0.9rem', color: 'var(--fg-muted)' }}>
            <h4 style={{ color: 'var(--fg)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Client-Side Post-Quantum Encryption
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--accent)' }}>✓</span> Algorithm: ML-KEM-768
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: status === "encrypting" ? 'var(--fg-muted)' : 'var(--accent)' }}>
                  {status === "encrypting" ? '...' : '✓'}
                </span> 
                AES-256-GCM Payload Encryption
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: status === "success" ? 'var(--accent)' : 'var(--fg-muted)' }}>
                  {status === "success" ? '✓' : '...'}
                </span> 
                Secure Upload Complete
              </div>
            </div>
            {status === "success" && (
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)', color: 'var(--accent)', fontWeight: 600 }}>
                Verified: Zero plaintext transmitted.
              </div>
            )}
          </div>
        )}

        {status === "error" && (
          <div className={`${styles.message} ${styles.error}`}>
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}
