# Page: Contact

## Outgoing Links

## Images & Media

## Text Content
```text


--- Source: src/app/contact/page.tsx ---

Contact Us | Hadron GBS

150px

{/* 
        Pass hideInitially={false} or rely on the fact that this is not the homepage, 
        so the FOUC script won't add 'intro-running'. The Navbar will show normally. 
      */}

--- Source: src/app/components/ContactForm/ContactForm.tsx ---

("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [pqcKey, setPqcKey] = useState

Get in Touch

Our enterprise team will get back to you shortly.

Your Name *

Email Address *

Contact Number

Location

Interested Service *

Select Service

Quantum Services

ITSM

ITOM

RPA

Salesforce

DevOps

SAP

AWS

Microsoft

Your Message *

{status === "encrypting" ? "Encrypting Locally..." : 
           status === "uploading" ? "Uploading Ciphertext..." : "Send Message"}

{(status === "encrypting" || status === "uploading" || status === "success") && (

Client-Side Post-Quantum Encryption

Algorithm: ML-KEM-768

{status === "encrypting" ? '...' : '✓'}

AES-256-GCM Payload Encryption

{status === "success" ? '✓' : '...'}

Secure Upload Complete

{status === "success" && (

Verified: Zero plaintext transmitted.

)}

        {status === "error" && (

{errorMessage}
```
