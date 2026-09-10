"use client";

import ServiceLayout from "../../../services/ServiceLayout";

export default function TrainingProgramPage() {
  return (
    <ServiceLayout
      expertName="Training"
      title="Hadron ServiceNow Excellence Hub Training Program"
      subtitle="Get a head start with future-ready skills, chart your path, and design your future. Explore what’s possible with the Hadron ServiceNow Excellence Hub. This program offers a comprehensive platform to explore and unlock your potential with ServiceNow, equipping you with the tools to chart your career path and design a future full of possibilities."
      heroVideoUrl="https://res.cloudinary.com/ax6dtcht/video/upload/v1785324517/now_in_this_same_theme_like_amrowr.mp4"
      heroVideoRotated={false}
      solutionsImgUrl="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324496/ChatGPT_Image_Jul_29_2026_03_20_31_PM_j7g9xc.png"
      solutions={[
        { title: "Who Should Join? (IT Background)", desc: "Perfect for ITSM Engineers, ITOM Engineers, Existing ServiceNow Engineers, or Java Professionals looking to excel." },
        { title: "Who Should Join? (Non-IT & Teaching)", desc: "Designed for HR Professionals, Audit, Risk, Compliance staff, IT Engineering College teachers, and Java/.NET Trainers wanting to switch to IT." },
        { title: "Supercharge Your Career", desc: "With our integrated work training program, you can take on exciting projects, choose an ICT specialization, and gain on-the-job training with ServiceNow certifications." },
        { title: "Impactful Projects & Curriculum", desc: "Learn Basics of Service Management, ITIL v4 Foundation, and JavaScript on ServiceNow, alongside hands-on projects and internship certification." },
        { title: "Be Part of the Extraordinary", desc: "Join our team and immerse yourself in a dynamic, innovative, and supportive environment that fosters growth and excellence for ITSM and ITOM engineers." }
      ]}
      framework={[]}
      whyHadron={[
        { title: "Career Growth", desc: "Propel your career to new heights with comprehensive training and highly sought-after industry credentials." },
        { title: "Innovative Projects", desc: "Engage in hands-on, real-world customer projects and in-house initiatives within a dynamic IT landscape." },
        { title: "Collaborative Environment", desc: "Immerse yourself in a supportive, forward-thinking organization that is dedicated to fostering excellence." },
        { title: "Fast-Paced Growth", desc: "Accelerate your career development while pursuing a part-time diploma or professional certification." },
        { title: "Global Exposure", desc: "Stand out in the competitive global job market with the expertise and confidence of a seasoned ServiceNow professional." }
      ]}
    />
  );
}
