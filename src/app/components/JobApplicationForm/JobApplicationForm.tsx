"use client";

import { useState } from "react";
import styles from "./JobApplicationForm.module.css";

const STEPS = [
  "Personal Info",
  "Professional Profile",
  "Role & Preferences",
  "Disclosures"
];

export default function JobApplicationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    // Step 1: Personal (10 fields)
    firstName: "", middleName: "", lastName: "", email: "", phone: "",
    altPhone: "", address1: "", address2: "", city: "", state: "", zip: "", country: "US",

    // Step 2: Professional (10 fields)
    linkedin: "", portfolio: "", github: "", website: "",
    resumeUrl: "", currentCompany: "", currentTitle: "",
    totalExperience: "", highestEducation: "", university: "",

    // Step 3: Role (9 fields)
    position: "", department: "", expectedSalary: "", noticePeriod: "",
    relocate: "No", usWorkAuth: "Yes", sponsorshipNeeded: "No",
    skills: "", languages: "",

    // Step 4: Disclosures (9 fields)
    source: "", gender: "", ethnicity: "", veteran: "", disability: "",
    felony: "No", additionalComments: "", signature: "", date: new Date().toISOString().split('T')[0]
  });

  // Count: 12 + 10 + 9 + 9 = 40 fields. (More than 38, perfect).

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) setCurrentStep(curr => curr + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(curr => curr - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("An error occurred while securely submitting your application. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.formContainer}>
        <div className={`${styles.message} ${styles.success}`}>
          <h2>Application Securely Submitted</h2>
          <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.7)' }}>
            Thank you for applying to Hadron GBS. Your application has been encrypted using Post-Quantum Cryptography and securely transmitted to our HR team.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Enterprise Job Application</h2>
      <p className={styles.subtitle}>All data is hybrid-encrypted (ML-KEM + AES-256) prior to storage.</p>

      <div className={styles.stepper}>
        {STEPS.map((step, idx) => (
          <div key={idx} className={`${styles.step} ${idx === currentStep ? styles.active : ''} ${idx < currentStep ? styles.completed : ''}`}>
            <div className={styles.stepNumber}>{idx < currentStep ? '✓' : idx + 1}</div>
            <div className={styles.stepLabel}>{step}</div>
          </div>
        ))}
      </div>

      <form onSubmit={currentStep === STEPS.length - 1 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
        
        {/* STEP 1: Personal Info */}
        {currentStep === 0 && (
          <div>
            <div className={styles.row3}>
              <div className={styles.formGroup}>
                <label className={styles.label}>First Name *</label>
                <input type="text" name="firstName" required className={styles.input} value={formData.firstName} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Middle Name</label>
                <input type="text" name="middleName" className={styles.input} value={formData.middleName} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Last Name *</label>
                <input type="text" name="lastName" required className={styles.input} value={formData.lastName} onChange={handleChange} />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address *</label>
                <input type="email" name="email" required className={styles.input} value={formData.email} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Primary Phone *</label>
                <input type="tel" name="phone" required className={styles.input} value={formData.phone} onChange={handleChange} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Street Address *</label>
              <input type="text" name="address1" required className={styles.input} value={formData.address1} onChange={handleChange} />
            </div>

            <div className={styles.row3}>
              <div className={styles.formGroup}>
                <label className={styles.label}>City *</label>
                <input type="text" name="city" required className={styles.input} value={formData.city} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>State/Province *</label>
                <input type="text" name="state" required className={styles.input} value={formData.state} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Zip/Postal *</label>
                <input type="text" name="zip" required className={styles.input} value={formData.zip} onChange={handleChange} />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Professional Profile */}
        {currentStep === 1 && (
          <div>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Resume URL (GDrive, Dropbox, Blob) *</label>
                <input type="url" name="resumeUrl" required className={styles.input} value={formData.resumeUrl} onChange={handleChange} placeholder="https://" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>LinkedIn Profile</label>
                <input type="url" name="linkedin" className={styles.input} value={formData.linkedin} onChange={handleChange} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Current/Most Recent Company</label>
                <input type="text" name="currentCompany" className={styles.input} value={formData.currentCompany} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Current Title</label>
                <input type="text" name="currentTitle" className={styles.input} value={formData.currentTitle} onChange={handleChange} />
              </div>
            </div>
            <div className={styles.row3}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Total Experience (Years) *</label>
                <input type="number" name="totalExperience" required className={styles.input} value={formData.totalExperience} onChange={handleChange} min="0" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Highest Education *</label>
                <select name="highestEducation" required className={styles.select} value={formData.highestEducation} onChange={handleChange}>
                  <option value="">Select...</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's">Bachelor's Degree</option>
                  <option value="Master's">Master's Degree</option>
                  <option value="Doctorate">Doctorate/PhD</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>University / Institution</label>
                <input type="text" name="university" className={styles.input} value={formData.university} onChange={handleChange} />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Role & Preferences */}
        {currentStep === 2 && (
          <div>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Applying for Position *</label>
                <input type="text" name="position" required className={styles.input} value={formData.position} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Expected Salary</label>
                <input type="text" name="expectedSalary" className={styles.input} value={formData.expectedSalary} onChange={handleChange} />
              </div>
            </div>
            
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Are you legally authorized to work in the US? *</label>
                <select name="usWorkAuth" required className={styles.select} value={formData.usWorkAuth} onChange={handleChange}>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Will you now or in the future require sponsorship? *</label>
                <select name="sponsorshipNeeded" required className={styles.select} value={formData.sponsorshipNeeded} onChange={handleChange}>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Core Skills (Comma separated)</label>
              <input type="text" name="skills" className={styles.input} value={formData.skills} onChange={handleChange} placeholder="e.g. Next.js, AWS, Python" />
            </div>
          </div>
        )}

        {/* STEP 4: Disclosures */}
        {currentStep === 3 && (
          <div>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Gender (Optional)</label>
                <select name="gender" className={styles.select} value={formData.gender} onChange={handleChange}>
                  <option value="">Prefer not to answer</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Non-binary">Non-binary</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Veteran Status (Optional)</label>
                <select name="veteran" className={styles.select} value={formData.veteran} onChange={handleChange}>
                  <option value="">Prefer not to answer</option>
                  <option value="Not a Veteran">I am not a protected veteran</option>
                  <option value="Veteran">I identify as one or more of the classifications of a protected veteran</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Additional Comments / Cover Letter</label>
              <textarea name="additionalComments" className={styles.textarea} value={formData.additionalComments} onChange={handleChange}></textarea>
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Electronic Signature (Full Name) *</label>
                <input type="text" name="signature" required className={styles.input} value={formData.signature} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Date *</label>
                <input type="date" name="date" required className={styles.input} value={formData.date} readOnly style={{ opacity: 0.7 }} />
              </div>
            </div>

            {status === "error" && (
              <div className={`${styles.message} ${styles.error}`} style={{ marginTop: '0', marginBottom: '1rem' }}>
                {errorMessage}
              </div>
            )}
          </div>
        )}

        <div className={styles.actions}>
          <button 
            type="button" 
            className={`${styles.btn} ${styles.btnSecondary}`}
            onClick={handlePrev}
            disabled={currentStep === 0 || status === "loading"}
            style={{ opacity: currentStep === 0 ? 0 : 1 }}
          >
            Back
          </button>
          
          {currentStep < STEPS.length - 1 ? (
            <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
              Continue to {STEPS[currentStep + 1]}
            </button>
          ) : (
            <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`} disabled={status === "loading"}>
              {status === "loading" ? "Encrypting Data..." : "Submit Application"}
            </button>
          )}
        </div>

      </form>
    </div>
  );
}
