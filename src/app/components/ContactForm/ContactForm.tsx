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

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
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
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("An error occurred while submitting your message. Please try again later.");
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
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" ? "Encrypting & Submitting..." : "Send Message"}
        </button>

        {status === "success" && (
          <div className={`${styles.message} ${styles.success}`}>
            Thank you! Your message has been securely submitted.
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
