import ServiceLayout from "../ServiceLayout";

export default function Page() {
  return (
    <ServiceLayout
      breadcrumbName="AWS Cloud"
      title={`Scale with Confidence: Your Journey to the <span >AWS Cloud</span> with Hadron GBS`}
      subtitle="At Hadron GBS, we help organizations harness the world’s most comprehensive and broadly adopted cloud platform. As a strategic AWS partner, we specialize in transforming rigid, on-premise infrastructures into agile, cloud-native environments."
      solutions={[
        { title: "Cloud Migration & Modernization", desc: "Seamlessly transition your applications to AWS using proven frameworks (Rehost, Replatform, Refactor) to reduce data center footprints and increase agility." },
        { title: "AWS Data & Analytics", desc: "Break down data silos by building robust data lakes and warehouses using Amazon Redshift and AWS Glue for real-time business intelligence." },
        { title: "Serverless Computing", desc: "Build and run applications without managing servers using AWS Lambda, allowing your developers to focus entirely on code and innovation." },
        { title: "Generative AI with Amazon Bedrock", desc: "Accelerate your AI journey by building and scaling generative AI applications with high-performing foundation models." },
        { title: "AWS Security & Compliance", desc: "Implement a 'Security-by-Design' posture using AWS Identity and Access Management (IAM), GuardDuty, and KMS to ensure your data stays protected." },
        { title: "DevOps & CI/CD", desc: "Automate your software delivery lifecycle with AWS CodePipeline and CodeDeploy for faster, more reliable deployments." },
        { title: "Storage & Content Delivery", desc: "Optimize data availability and web performance using Amazon S3 and Amazon CloudFront for global reach and durability." }
      ]}
      framework={[
        { step: "01", title: "Consulting & Advisory", desc: "Not every platform is right for every problem. We assess your technical landscape and business goals to recommend the right AWS stack—whether it’s focused on compute, database complexity, or deep integration.", outcome: "A strategic AWS roadmap and a governed framework that prevents shadow IT while fostering innovation." },
        { step: "02", title: "Implementation & Execution", desc: "Our agile delivery model focuses on MVPs that deliver value fast. We work in short sprints, involving your stakeholders at every step to ensure the final architecture matches user needs.", outcome: "A fully functional, integrated application deployed in a fraction of the time required for traditional development." },
        { step: "03", title: "Operational Support & Managed Services", desc: "As your portfolio of cloud apps grows, management becomes critical. We provide ongoing support, platform updates, and security audits to ensure your apps remain performant and compliant with enterprise standards.", outcome: "A sustainable and secure application ecosystem that evolves as your business processes change." }
      ]}
      whyHadron={[
        { title: "Security-First Cloud", desc: "We treat security as a baseline, not an add-on, ensuring every AWS deployment meets rigorous global compliance standards." },
        { title: "Data-Driven Innovation", desc: "We don’t just move your data to the cloud; we help you activate it using AWS’s advanced machine learning and analytics tools." },
        { title: "Customer-Obsessed Delivery", desc: "We act as an extension of your team, providing the transparency and technical consistency required to manage complex, distributed systems." }
      ]}
    />
  );
}
