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

1rem

8px

("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent

Get in Touch

Our enterprise team will get back to you shortly.

Your Name

Email Address

Contact Number

Location

Interested Service

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

Your Message

{status === "submitting" ? "Sending Message..." : 
           status === "success" ? "Message Sent!" : "Send Message"}

{status === "success" && (

Thank you for reaching out!

Our enterprise team will get back to you shortly.

)}

        {status === "error" && (

{errorMessage}
```
