import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Hadron GBS",
  description: "Get in touch with Hadron GBS for enterprise IT solutions, ServiceNow, Cloud, and AI.",
};

export default function ContactPage() {
  return (
    <main className="light-theme" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 
        Pass hideInitially={false} or rely on the fact that this is not the homepage, 
        so the FOUC script won't add 'intro-running'. The Navbar will show normally. 
      */}
      <Navbar />

      <div style={{ flex: 1, paddingTop: "150px", paddingBottom: "100px" }} className="container">
        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}
