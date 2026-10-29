import LogoLoop from "./LogoLoop";

/**
 * Logo display heights are calibrated to the natural aspect ratios of each image
 * so every logo appears visually balanced at the same optical weight.
 */
// Same full-colour logo files and alt text as the partner ring on the main branch.
// Cloudinary e_trim strips padding baked into some files so heights compare evenly.
const trim = (url: string) => url.replace("/image/upload/", "/image/upload/e_trim/");
const logo = (name: string, src: string, height: string) => ({
  title: name,
  alt: `${name} Implementation Partner - Hadron GBS`,
  src,
  style: { height },
});

const PARTNERS = [
  logo("ServiceNow", trim("https://res.cloudinary.com/ax6dtcht/image/upload/v1785327265/ServiceNow-Logo_cqo5uy.png"), "1.6rem"),
  logo("BMC Helix", trim("https://res.cloudinary.com/dyhlpxwwo/image/upload/v1790836686/bmc-helix-logo_d38xak.png"), "2rem"),
  logo("Salesforce", trim("https://res.cloudinary.com/ax6dtcht/image/upload/v1785327266/Salesforce-Logo_j4dnwn.png"), "3rem"),
  logo("SAP", "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg", "2.4rem"),
  logo("Microsoft", "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg", "1.9rem"),
  logo("AWS", "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", "2.2rem"),
  logo("Freshworks", trim("https://res.cloudinary.com/ax6dtcht/image/upload/v1785327265/freshworks-logo_brandlogos.net_c6t5u_vu8yih.png"), "2rem"),
  logo("Atlassian", trim("https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788789011/Atlassian_logo_kiayvy.png"), "2rem"),
  logo("Ivanti", trim("https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788844978/Ivanti_logo_olqb3i.webp"), "2rem"),
  logo(
    "Precision Bridge",
    "https://images.squarespace-cdn.com/content/v1/6932bd55720baf7abaf81b66/eed84b94-0092-4c73-8089-a66ae2069f43/Precision+Bridge+2026+-+Landscape.png?format=500w",
    "2.4rem"
  ),
];

export default function PartnerMarquee() {
  return (
    <div style={{ width: '100%', padding: '0.5rem 0' }}>
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
