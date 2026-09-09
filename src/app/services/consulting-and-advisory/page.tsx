"use client";

import ServiceLayout from "../ServiceLayout";

export default function ConsultingAdvisoryPage() {
  return (
    <ServiceLayout
      expertName="Consulting"
      title="Consulting & Advisory Services"
      subtitle="Convert System Complexity into Decision Clarity. Enterprise platforms are high-stakes investments. Without the right strategy and governance in place, organizations struggle to realise their full ROI, especially amid accelerating AI adoption, cloud migration, and ESM modernisation."
      heroVideoUrl="https://res.cloudinary.com/ax6dtcht/video/upload/v1785324517/now_in_this_same_theme_like_amrowr.mp4"
      heroVideoRotated={false}
      solutionsImgUrl="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324511/ChatGPT_Image_Jul_29_2026_04_41_26_PM_sxuoeq.png"
      solutions={[
        {
          title: "Platform Strategy and Architecture",
          desc: "We help you build the right foundation before you invest. Our advisors ensure your platform choices align with your business goals and that your architecture can scale as demands evolve. • Enterprise platform strategy: Align technology choices to business outcomes and avoid costly misalignment. • Architecture advisory: Design scalable, integrable foundations built for long-term reliability. • Integration planning: Map dependencies early to prevent delivery risk downstream."
        },
        {
          title: "Technology Assessments",
          desc: "You can't optimise what you haven't measured. We establish a clear baseline, assessing what your platforms deliver today versus what they should, then turn that data into a prioritised action plan. • Platform assessments: Compare actual versus designed performance across your environment. • Integration mapping: Chart system interactions and identify what needs fixing. • ROI optimisation: Pinpoint quick wins and untapped value in your existing investments."
        },
        {
          title: "Transformation Advisory",
          desc: "Technology change is organisational change. We align your people, decision-making structures, and operating model around new systems to drive adoption, not just deployment. • Digital strategy: Grounded in your business model, capabilities, and real constraints. • Change management: Readiness planning, communications, and adoption frameworks. • Decision frameworks: Tools that help executives weigh technology trade-offs with confidence."
        },
        {
          title: "Program & Delivery Advisory",
          desc: "Most transformation programmes fail at the governance level. We build the oversight structures that keep programmes strategically aligned, from day one through final delivery. • Programme governance: Clear accountability, escalation rights, and structured reviews. • Maturity assessments: Readiness checks across governance, sponsorship, and delivery processes."
        }
      ]}
      framework={[]}
      whyHadron={[
        {
          title: "Current-State Visibility",
          desc: "We map your platforms’ actual operations to surface gaps and dependencies before decisions are locked in."
        },
        {
          title: "Durable Governance",
          desc: "Frameworks and roadmaps that hold through execution — not just planning."
        },
        {
          title: "Early Risk Exposure",
          desc: "We surface governance gaps and integration weaknesses before they become cost overruns."
        },
        {
          title: "Leadership Decision Support",
          desc: "Structured briefs and evaluations that help leaders act with minimal uncertainty."
        }
      ]}
    />
  );
}
