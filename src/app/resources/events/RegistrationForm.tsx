"use client";

import { useState } from "react";
import styles from "./Events.module.css";
import type { HadronEvent } from "./data";

export default function RegistrationForm({ event }: { event: HadronEvent }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/event-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId: event.id,
          fullName: data.get("fullName"),
          jobTitle: data.get("jobTitle"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          companySize: data.get("companySize"),
          consent: data.get("consent") === "on",
          companyWebsite: data.get("companyWebsite"),
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.formSuccess} role="status">
        <h3>Thank you — your seat request has been received.</h3>
        <p>
          Seating is invitation-only. Our team will review your request and confirmed attendees will receive calendar
          credentials and venue access details by email.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate={false}>
      {/* Honeypot for spam bots */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="ev-companyWebsite">Company Website</label>
        <input id="ev-companyWebsite" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={styles.formGrid}>
        <label className={styles.field}>
          <span>Full Name</span>
          <input name="fullName" type="text" required maxLength={200} autoComplete="name" />
        </label>
        <label className={styles.field}>
          <span>Job Title / Designation</span>
          <input name="jobTitle" type="text" required maxLength={200} autoComplete="organization-title" />
        </label>
        <label className={styles.field}>
          <span>Company / Organization</span>
          <input name="company" type="text" required maxLength={200} autoComplete="organization" />
        </label>
        <label className={styles.field}>
          <span>Corporate Email Address</span>
          <input name="email" type="email" required maxLength={200} autoComplete="email" />
        </label>
        <label className={styles.field}>
          <span>Mobile / Direct Phone</span>
          <input name="phone" type="tel" required maxLength={20} pattern="[+()\d\s-]{7,20}" autoComplete="tel" />
        </label>
      </div>

      <fieldset className={styles.sizeGroup}>
        <legend>Company Size</legend>
        <div className={styles.sizeOptions}>
          {event.companySizes.map((size) => (
            <label key={size} className={styles.sizeOption}>
              <input type="radio" name="companySize" value={size} required />
              <span>{size} employees</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className={styles.consent}>
        <input type="checkbox" name="consent" required />
        <span>
          I agree to receive event communications from Salesforce and Hadron in accordance with their respective{" "}
          <a href="/privacy-policy">Privacy Statements</a>.
        </span>
      </label>

      {status === "error" && (
        <p className={styles.formError} role="alert">
          {error}
        </p>
      )}

      <button type="submit" className={styles.submitBtn} disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Request My Seat"}
      </button>
    </form>
  );
}
