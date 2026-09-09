"use client";

import ServiceLayout from "../ServiceLayout";

export default function TrainingProgramPage() {
  return (
    <ServiceLayout
      expertName="Training"
      title="Hadron ServiceNow Excellence Hub Training Program"
      subtitle="Implementation ends. Operations don’t. Get a head start with future-ready skills, chart your path, and design your future. Explore what’s possible with the Hadron ServiceNow Excellence Hub. This Training Program is your gateway to mastering future-ready skills. This program offers a comprehensive platform to explore and unlock your potential with ServiceNow, equipping you with the tools to chart your career path and design a future full of possibilities."
      heroVideoUrl="https://res.cloudinary.com/ax6dtcht/video/upload/v1785324517/now_in_this_same_theme_like_amrowr.mp4"
      heroVideoRotated={false}
      solutionsImgUrl="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324496/ChatGPT_Image_Jul_29_2026_03_20_31_PM_j7g9xc.png"
      solutions={[
        { title: "Be Part of the Extraordinary", desc: "Join the extraordinary team at Hadron GBS ServiceNow Excellence Hub. This is an opportunity for ITSM and ITOM engineers to excel in their careers at a fast pace. Being part of our team means immersing yourself in a dynamic, innovative, and supportive environment that fosters growth and excellence. As a ServiceNow professional, you have the chance to thrive in a forward-thinking organization." }
      ]}
      framework={[]}
      whyHadron={[]}
    />
  );
}
