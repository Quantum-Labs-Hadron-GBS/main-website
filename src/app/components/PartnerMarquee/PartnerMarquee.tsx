import LogoLoop from "./LogoLoop";

/**
 * Logo display heights are calibrated to the natural aspect ratios of each image
 * so every logo appears visually balanced at the same optical weight.
 */
const PARTNERS = [
  {
    title: "ServiceNow",
    src: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324489/ServiceNow_Logo_Reversed_aqxmfe.png",
    style: { height: "78px" },
  },
  {
    title: "BMC Software",
    src: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324497/Logo_BMC_Software_olyhgt.png",
    height: 36,
  },
  {
    title: "Salesforce",
    src: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324490/salesforce_ivtogr.png",
    style: { height: "85px" },
  },
  {
    title: "SAP",
    src: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324488/Logo-sap-white-3ew137nnu3s9plvqegzf9c_equux0.png",
    style: { height: "52px" },
  },
  {
    title: "AWS",
    src: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324488/aws_acbntn.png",
    style: { height: "60px" },
  },
  {
    title: "Microsoft",
    src: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324490/microsoft-logo-png-white-31_tzq0t0.png",
    style: { height: "90px" },
  },
  {
    title: "Freshworks",
    src: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324494/freshworks-logo_brandlogos.net_c6t5u_r8oarq.png",
    height: 28,
  },
  {
    title: "Ivanti",
    src: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324495/Logo_Ivanti_txrbc9.png",
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
