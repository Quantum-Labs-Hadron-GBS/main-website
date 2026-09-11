"use client";

import React, { useState, useEffect } from "react";
import styles from "./JobApplicationForm.module.css";

export default function JobApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const savedData = sessionStorage.getItem('jobApplicationForm');
    if (savedData) {
      try {
        setFormValues(JSON.parse(savedData));
      } catch (e) {}
    }
    const savedStep = sessionStorage.getItem('jobApplicationStep');
    if (savedStep) {
      setStep(parseInt(savedStep, 10));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'file') return;
    setFormValues(prev => {
      const next = { ...prev, [name]: value };
      sessionStorage.setItem('jobApplicationForm', JSON.stringify(next));
      return next;
    });
  };

  const handleNext = () => {
    const currentStepFields = document.querySelectorAll(`[data-step="${step}"] input[required], [data-step="${step}"] select[required]`);
    let isValid = true;
    currentStepFields.forEach((field: any) => {
      if (!field.checkValidity()) {
        field.reportValidity();
        isValid = false;
      }
    });
    if (isValid) {
      const nextStep = step + 1;
      setStep(nextStep);
      sessionStorage.setItem('jobApplicationStep', nextStep.toString());
    }
  };

  const handlePrev = () => {
    const prevStep = step - 1;
    setStep(prevStep);
    sessionStorage.setItem('jobApplicationStep', prevStep.toString());
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (step < 3) {
      handleNext();
      return;
    }

    const formElement = e.currentTarget;
    
    // Validate ALL required fields across all steps
    const allRequiredFields = formElement.querySelectorAll('input[required], select[required]');
    let firstInvalidField: any = null;

    for (let i = 0; i < allRequiredFields.length; i++) {
      const field = allRequiredFields[i] as any;
      if (!field.checkValidity()) {
        firstInvalidField = field;
        break;
      }
    }

    if (firstInvalidField) {
      // Find which step this field belongs to and navigate there
      const stepDiv = firstInvalidField.closest('[data-step]');
      if (stepDiv) {
        const stepNum = parseInt(stepDiv.getAttribute('data-step') || '1', 10);
        setStep(stepNum);
        sessionStorage.setItem('jobApplicationStep', stepNum.toString());
        
        // Wait for React to render the step before reporting validity
        setTimeout(() => {
          firstInvalidField.reportValidity();
        }, 50);
      }
      return;
    }

    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      const formElement = e.currentTarget;
      
      const formData = new FormData();
      Object.entries(formValues).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      // Also need to get cvFile since it's uncontrolled
      const cvFileInput = formElement.querySelector('input[type="file"]') as HTMLInputElement;
      if (cvFileInput && cvFileInput.files && cvFileInput.files[0]) {
        formData.append('cvFile', cvFileInput.files[0]);
      }

      const response = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSuccess(true);
      setFormValues({});
      formElement.reset();
      sessionStorage.removeItem('jobApplicationForm');
      sessionStorage.removeItem('jobApplicationStep');
      setStep(1);
    } catch (err: any) {
      setError(err.message || "Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const FormGroup = ({ 
    label, 
    name, 
    type = "text", 
    required = false, 
    options,
    placeholder 
  }: { 
    label: string, 
    name: string, 
    type?: "text" | "date" | "email" | "select" | "file", 
    required?: boolean,
    options?: string[],
    placeholder?: string
  }) => (
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor={name}>
        {label} {required && <span className={styles.requiredStar}>*</span>}
      </label>
      {type === "select" ? (
        <select className={styles.select} name={name} id={name} required={required} value={formValues[name] || ""} onChange={handleInputChange}>
          <option value="" disabled>Select an option</option>
          {options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      ) : type === "file" ? (
        <input className={styles.fileInput} type="file" name={name} id={name} required={required} accept=".pdf,.doc,.docx" />
      ) : (
        <input className={styles.input} type={type} name={name} id={name} required={required} placeholder={placeholder} value={formValues[name] || ""} onChange={handleInputChange} />
      )}
    </div>
  );

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Hadron GBS Job Application Form</h2>
      <p className={styles.subtitle}>
        When you submit this form, it will not automatically collect your details like name and email address unless you provide it yourself.
      </p>

      {success && (
        <div className={`${styles.message} ${styles.success}`}>
          Thank you! Your application has been successfully submitted. We will be in touch shortly.
        </div>
      )}
      
      {error && (
        <div className={`${styles.message} ${styles.error}`}>
          {error}
        </div>
      )}

      <form id="job-application-form" onSubmit={handleSubmit} className={styles.form} encType="multipart/form-data" noValidate>
        
        {/* STEP 1 */}
        <div style={{ display: step === 1 ? 'block' : 'none' }} data-step="1">
        <h3 className={styles.sectionTitle}>Basic Information</h3>
        <div className={styles.row}>
          <FormGroup label="Applicant's Full Name (First & Last)" name="fullName" required placeholder="John Doe" />
          <FormGroup label="Email Address" name="email" type="email" required placeholder="john@example.com" />
        </div>
        <div className={styles.row}>
          <FormGroup label="Mobile Number" name="mobileNumber" required placeholder="+1 234 567 890" />
          <FormGroup label="Date of Birth" name="dob" type="date" required />
        </div>
        <div className={styles.row}>
          <FormGroup label="PAN Card Number" name="panCard" required placeholder="ABCDE1234F" />
          <FormGroup label="Marital Status" name="maritalStatus" type="select" options={["Single", "Married"]} />
        </div>
        <FormGroup label="Passport Number (Write 'NA' if not available or 'Applied' if in progress)" name="passportNumber" />
        <div className={styles.row}>
          <FormGroup label="Please specify your permanent location (city and state/country)" name="permanentLocation" />
          <FormGroup label="Preferred Work Location" name="preferredLocation" required />
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <button type="button" onClick={handleNext} className={styles.submitBtn} style={{ flex: 1 }}>Next</button>
        </div>
        </div>

        {/* STEP 2 */}
        <div style={{ display: step === 2 ? 'block' : 'none' }} data-step="2">
        <h3 className={styles.sectionTitle}>Role & Opportunity Details</h3>
        <div className={styles.row}>
          <FormGroup 
            label="How Did You Hear About the Position / Opportunity?" 
            name="source" 
            type="select" 
            options={["LinkedIn", "Referred by Hadron GBS Employee", "Naukri", "Company Website", "Other"]}
            required
          />
          <FormGroup label="If Referred by Hadron GBS employee, kindly mention the name" name="referredBy" />
        </div>
        <div className={styles.row}>
          <FormGroup 
            label="Please specify the technology you're applying for" 
            name="technology" 
            type="select" 
            options={["BMC", "ServiceNow", "Salesforce", "Non-Technical (HR, Admin, Operations, Sales, Accounts & Finance)", "Java", "Other"]}
            required
          />
          <FormGroup 
            label="Kindly choose the position you are applying for" 
            name="position" 
            type="select" 
            options={[
              "ServiceNow Developer ITSM", "ServiceNow Developer HRSD", "ServiceNow Developer ITOM", 
              "ServiceNow Developer ITAM", "ServiceNow Developer GRC", "ServiceNow Developer SPM", 
              "Technical Lead-ServiceNow", "Architect- ServiceNow", "Project Manager", "Head Project Manager", 
              "Salesforce- CPQ Developer", "Salesforce- Solution Consultant", "ServiceNow- Solution Consultant", 
              "AI- Solution Consultant", "Non-technical position (HR, Admin, operations, Sales, Accounts & Finance)", 
              "Java to ServiceNow", "Salesforce Developer"
            ]}
            required
          />
        </div>
        <FormGroup label="Job / Requisition Code (if provided, otherwise please mention 'NA')" name="jobCode" />

        <h3 className={styles.sectionTitle}>Education & Experience</h3>
        <div className={styles.row}>
          <FormGroup label="Latest Education (Degree or course)" name="latestEducation" required />
          <FormGroup label="Latest Education passing Year" name="passingYear" type="date" required />
        </div>
        <div className={styles.row}>
          <FormGroup 
            label="Kindly choose the range of Total years of experience" 
            name="expRange" 
            type="select" 
            options={["0 to 1 yr experience", "1.01yrs to 3 yrs experience", "3 yrs to 5yrs experience", "5.01 yrs to 8 yrs experience", "8.01 yrs to 12 yrs experience", "12.01 yrs to 15 yrs experience", "15.01 Yrs and above experience"]}
            required
          />
          <FormGroup label="Total Experience (In years)" name="totalExp" required type="text" />
        </div>
        <div className={styles.row}>
          <FormGroup label="Relevant Experience (In years)" name="relevantExp" required type="text" />
          <FormGroup label="Name the Technology You Have Worked On" name="workedTech" />
        </div>
        <div className={styles.row}>
          <FormGroup label="Choose the Achieved Technical Certifications" name="certifications" type="select" options={["CSA", "CAD", "CIS", "Other"]} />
          <FormGroup label="Top 5 Skills/ Programming Languages" name="topSkills" />
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <button type="button" onClick={handlePrev} className={styles.submitBtn} style={{ flex: 1, backgroundColor: '#64748b' }}>Previous</button>
          <button type="button" onClick={handleNext} className={styles.submitBtn} style={{ flex: 1 }}>Next</button>
        </div>
        </div>

        {/* STEP 3 */}
        <div style={{ display: step === 3 ? 'block' : 'none' }} data-step="3">
        <h3 className={styles.sectionTitle}>Current Employment & Compensation</h3>
        <div className={styles.row}>
          <FormGroup label="Current Employer / Company Name" name="currentEmployer" />
          <FormGroup label="Current Employer Date of Joining" name="doj" type="date" />
        </div>
        <div className={styles.row}>
          <FormGroup label="Current Designation and Grade" name="currentDesignation" />
          <FormGroup label="Current Employer Location" name="currentEmployerLocation" />
        </div>
        <div className={styles.row}>
          <FormGroup label="Current Notice Period (in Days) and mention the scope for Negotiation." name="noticePeriod" required />
          <FormGroup label="Last Working Date (Tentative)" name="lastWorkingDate" type="date" />
        </div>
        
        <div className={styles.row}>
          <FormGroup 
            label="Kindly choose the range of current CTC in INR (Fixed + Variable)" 
            name="ctcRange" 
            type="select" 
            options={["0 to 10 LPA", "10 LPA to 15 LPA", "15 LPA to 25 LPA", "25 LPA to 35 LPA", "35 LPA to 45 LPA", "45 LPA to 55 LPA", "55 LPA to 65 LPA", "65 LPA to 75 LPA", "75 LPA to 85 LPA", "85 LPA to 95 LPA"]}
            required
          />
          <FormGroup label="Current Compensation (CTC) - YEARLY" name="currentCTC" />
        </div>
        <div className={styles.row}>
          <FormGroup label="Additional Compensation (If any)" name="additionalCTC" />
          <FormGroup label="Expected Compensation (CTC)- YEARLY" name="expectedCTC" required />
        </div>
        <FormGroup label="Please share any non-monetary benefits or perks that your current employer provides." name="perks" />

        <h3 className={styles.sectionTitle}>Interview & Logistics</h3>
        <div className={styles.row}>
          <FormGroup label="Readiness for In-person Interview" name="inPersonReady" />
          <FormGroup label="Availability for Interviews" name="interviewAvailability" />
        </div>
        <div className={styles.row}>
          <FormGroup 
            label="Readiness to Travel for Project / Business Purpose" 
            name="travelReady" 
            type="select" 
            options={["Within India only", "Within Preferred Work Location city only", "International Locations only.", "Ready for all Above"]} 
          />
          <FormGroup label="Readiness to work in shifts" name="shiftReady" />
        </div>

        <h3 className={styles.sectionTitle}>Resume / CV</h3>
        <FormGroup label="Upload your CV (PDF, DOC, DOCX)" name="cvFile" type="file" required />

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <button type="button" onClick={handlePrev} className={styles.submitBtn} style={{ flex: 1, backgroundColor: '#64748b' }}>Previous</button>
          <button type="submit" className={styles.submitBtn} disabled={isSubmitting} style={{ flex: 1 }}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
        </div>

      </form>
    </div>
  );
}
