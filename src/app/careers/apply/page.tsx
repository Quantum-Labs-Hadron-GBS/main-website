import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import JobApplicationForm from "@/app/components/JobApplicationForm/JobApplicationForm";

export default function ApplyPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg)' }}>
      <Navbar />

      <section style={{ paddingTop: '120px', paddingBottom: '60px', flex: 1 }}>
        <div className="container">
          <JobApplicationForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
