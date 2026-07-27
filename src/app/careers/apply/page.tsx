import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import JobApplicationForm from "@/app/components/JobApplicationForm/JobApplicationForm";

export default function ApplyPage() {
  return (
    <main >
      <Navbar />

      <section >
        <div className="container">
          <JobApplicationForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
