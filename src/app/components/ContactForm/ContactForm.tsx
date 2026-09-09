"use client";

import { useState } from "react";
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

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
          disabled={status === "submitting" || status === "success"}
        >
          {status === "submitting" ? "Sending Message..." : 
           status === "success" ? "Message Sent!" : "Send Message"}
        </button>

        {status === "success" && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#ecfdf5', color: '#065f46', borderRadius: '8px', border: '1px solid #a7f3d0' }}>
            <h4 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              Thank you for reaching out!
            </h4>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem' }}>Our enterprise team will get back to you shortly.</p>
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
