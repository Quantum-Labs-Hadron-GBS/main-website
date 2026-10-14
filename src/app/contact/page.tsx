import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/contact");

export default function ContactPage() {
  return (
    <main className="light-theme" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 
        Pass hideInitially={false} or rely on the fact that this is not the homepage, 
        so the FOUC script won't add 'intro-running'. The Navbar will show normally. 
      */}
      <Navbar />

      <div style={{ flex: 1, paddingTop: "9.375rem", paddingBottom: "6.25rem" }} className="container">
        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}
