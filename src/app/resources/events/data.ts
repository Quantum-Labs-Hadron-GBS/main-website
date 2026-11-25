// Event content for /resources/events. Add future events to EVENTS; the page lists upcoming ones first.

export interface AgendaItem {
  time: string;
  title: string;
  desc: string;
}

export interface HadronEvent {
  id: string;
  partner: string;
  series: string;
  title: string;
  /** Local date/time in IST, ISO 8601 */
  startDate: string;
  endDate: string;
  dateLabel: string;
  timeLabel: string;
  venueName: string;
  venueAddress: string;
  city: string;
  format: string;
  agenda: AgendaItem[];
  audience: string[];
  audienceNote: string;
  hosts: { name: string; role?: string; desc: string }[];
  companySizes: string[];
}

export const SALESFORCE_AGENTIC_ITSM: HadronEvent = {
  id: "salesforce-agentic-itsm-mumbai-2026",
  partner: "Salesforce × Hadron",
  series: "Executive ITSM Roundtable",
  title: "Agentic AI Is Reshaping IT Service Management.",
  startDate: "2026-12-02T15:00:00+05:30",
  endDate: "2026-12-02T21:00:00+05:30",
  dateLabel: "2 December 2026",
  timeLabel: "3:00 PM IST onwards",
  venueName: "Blah! BKC, The Capital",
  venueAddress: "The Capital, Bandra Kurla Complex",
  city: "Mumbai",
  format: "Closed-Door Executive Roundtable & Networking Dinner (Invitation-Only)",
  agenda: [
    {
      time: "3:00 PM",
      title: "Opening Keynote: The Autonomous Enterprise Shift (Salesforce)",
      desc: "Opening remarks on the enterprise shift toward autonomous IT operations and executive priorities for 2027.",
    },
    {
      time: "3:15 PM",
      title: "Unified Service on Salesforce: The Agentic ITSM Point of View",
      desc: "How Salesforce unifies CRM data, workflow automation, and agentic AI to modernize enterprise IT service delivery.",
    },
    {
      time: "3:45 PM",
      title: "Agentic ITSM in Action: Live Resolution & Guardrails Walkthrough",
      desc: "Live walkthrough of autonomous incident resolution, automated change management, and real-time governance controls.",
    },
    {
      time: "4:15 PM",
      title: "From Strategy to Scale: Hadron’s Deployment & Integration Playbook",
      desc: "Practical implementation patterns, legacy integration strategies, and rapid time-to-value blueprints from the field.",
    },
    {
      time: "4:45 PM",
      title: "CIO Roundtable: Governance, Operating Models & Measurable ROI",
      desc: "Moderated peer-to-peer dialogue on AI governance, operating model shifts, and measurable ITSM outcomes.",
    },
    {
      time: "6:00 PM",
      title: "Executive Cocktails & Dinner, Hosted with Hadron GBS",
      desc: "Continue conversations over curated cocktails and dinner with fellow Mumbai CIOs and technology leaders.",
    },
  ],
  audience: [
    "Chief Information Officers (CIOs) & CTOs",
    "VPs & Heads of IT Infrastructure & Operations",
    "Digital Transformation & Enterprise Architecture Leaders",
    "Heads of IT Service Management & Shared Services",
  ],
  audienceNote: "Seating is strictly limited and invitation-only to ensure candid peer dialogue.",
  hosts: [
    {
      name: "Salesforce",
      desc: "Empowering enterprises to connect customer, employee, and IT service workflows with trusted, autonomous AI agents.",
    },
    {
      name: "Hadron",
      role: "Implementation Partner",
      desc: "Specialized Salesforce implementation partner helping enterprises architect, deploy, and scale governed digital service operations.",
    },
  ],
  companySizes: ["500–1,000", "1,001–5,000", "5,001–10,000", "10,000+"],
};

export const EVENTS: HadronEvent[] = [SALESFORCE_AGENTIC_ITSM];
