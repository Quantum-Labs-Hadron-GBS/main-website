import LogoLoop from "./LogoLoop";

/**
 * Logo display heights are calibrated to the natural aspect ratios of each image
 * so every logo appears visually balanced at the same optical weight.
 */
const PARTNERS = [
  {
    title: "ServiceNow",
    src: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523675/ServiceNow-Logo_kbaxks.png",
    style: { height: "48px" }
  },
  {
    title: "BMC Software",
    src: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523792/Logo_BMC_Software_oqiorh.png",
    height: 36,
  },
  {
    title: "Salesforce",
    src: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523790/Salesforce-Logo_y5q2ir.png",
    height: 52,
  },
  {
    title: "Freshworks",
    src: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523791/freshworks-logo_brandlogos.net_c6t5u_hu6w9j.png",
    height: 28,
  },
  {
    title: "Ivanti",
    src: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523791/Logo_Ivanti_ww1j1c.png",
    height: 36,
  },
];

export default function PartnerMarquee() {
  return (
    <div style={{ width: '100%', padding: '0.5rem 0', opacity: 0.7 }}>
      <LogoLoop 
        logos={PARTNERS} 
        speed={80} 
        direction="left"
        logoHeight={40}
        gap={96}
        fadeOut={false}
        pauseOnHover={true}
      />
    </div>
  );
}
