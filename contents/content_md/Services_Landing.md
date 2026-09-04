# Page: Services Landing

## Outgoing Links
- [/contact](/contact)

## Images & Media
- https://res.cloudinary.com/dyhlpxwwo/video/upload/v1787732744/Use_the_attached_image_as_the_htroef.mp4
- https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787726230/consulting_vvqqhe.jpg
- https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787725935/implementation_vde2yp.png
- https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787726082/operational_servies_zfrag1.png
- https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787726177/Managed_Services_yh3ukg.png

## Text Content
```text


--- Source: src/app/services/page.tsx ---

ServiceNow

Optimise IT Service Management and enterprise operations with tailored ServiceNow implementations.

BMC Software

Modernise service delivery and streamline operations using comprehensive BMC platforms.

Salesforce

Drive customer success and unified operations with scalable Salesforce enterprise solutions.

SAP

Integrate core business processes and accelerate digital transformation with SAP.

Ivanti

Unify IT operations, security, and asset management to proactively secure and manage all your endpoints.

Atlassian

Streamline agile development and enterprise collaboration with integrated Atlassian toolchains.

Microsoft Cloud

Empower your workforce and scale enterprise applications seamlessly with Microsoft Cloud solutions.

AWS Cloud

Architect, migrate, and manage resilient cloud infrastructures powered by Amazon Web Services.

Freshworks

Deliver intuitive customer and employee experiences with intelligent, scalable Freshworks platforms.

{/* Hero Section */}

{/* Background Video */}

Our Services

Convert System Complexity into Decision Clarity. We consult, build, and manage enterprise platforms so digital and cloud systems run reliably every day.

{/* Services List Section */}

{/* ── Section Header ── */}

SERVICES

{/* ── Services Hover Grid ── */}

{card.title}

{card.desc}

Read More

{/* Detailed Services */}

{/* Service 1: Advisory */}

SERVICE 1 OF 4

Consulting & Advisory Services

Convert System Complexity into Decision Clarity

Enterprise platforms are high-stakes investments. Without the right strategy and governance in place, organisations struggle to realise their full ROI, especially amid accelerating AI adoption, cloud migration, and ESM modernisation. Hadron GBS Advisory gives you the clarity, governance, and architectural grounding to move forward with confidence, before commitments are locked in.

Platform Strategy & Architecture:

Align technology choices to business outcomes and design scalable foundations.

Technology Assessments:

Establish a clear baseline and compare actual versus designed performance.

Transformation Advisory:

Align your people, decision-making structures, and operating model.

Programme & Delivery Advisory:

Build oversight structures that keep programmes strategically aligned.

→ Schedule a Discovery Discussion

{/* Service 2: Implementation */}

SERVICE 2 OF 4

Implementation & Execution

Turning Strategy into Systems That Deliver

Strategy sets the direction. Implementation is where programmes succeed or fail. Hadron GBS takes your approved plan and turns it into an operational system. We build the governance, coordination, and delivery discipline that holds from the first sprint to the final handover.

Governance inside every cadence:

Weekly steering reviews, sprint demos, and live KPI dashboards.

Coordinated multi-vendor delivery:

We manage the coordination layer and ensure no team is waiting on another.

Risk & dependency management:

Risks are logged, owned, and reviewed early.

Adoption & stabilisation:

A dedicated hypercare phase follows every release.

→ Request a Programme Review

{/* Service 3: Support */}

SERVICE 3 OF 4

Operational Support Services

Keep Your Platforms Running After Go-Live

Implementation ends. Operations don't. Hadron GBS Operational Support restores control with defined processes, accountable ownership, and a team that knows your platform from the inside. Because the people who built your solution stay on to run it, knowledge doesn't get lost in a handoff.

End-to-end L1–L3 support:

Issues routed by complexity across enterprise platforms.

ESM and ITSM operations:

Incident, service request, and change management.

Performance reporting:

KPI tracking and dashboards aligned to SLA cadences.

Service optimisation:

Regular assessments surface recurring issues to reduce incident volume.

→ Start the Conversation

{/* Service 4: Managed Services */}

SERVICE 4 OF 4

Managed Services

Stop Managing Vendors. Start Owning Outcomes.

Managed services are not staff augmentation or ad-hoc support. It's a shift in ownership, from your team to ours, with clear accountability, defined SLAs, and predictable costs. The teams who build your platform stay to run it.

End-to-End Ownership:

One accountable team owns requests, incidents, and governance.

SLA-Driven Delivery:

Response windows, resolution targets, and throughput tracked continuously.

Vendor Consolidation:

Multiple platforms covered within one governed delivery structure.

Predictable Costs:

A defined commercial model replaces reactive cost exposure.

→ Start the Conversation

{/* Why Hadron Section */}

Why Organisations Choose Hadron GBS

Our model is built around one principle: the teams who design your solution should be the same teams that deliver and run it. That continuity is where most enterprise partners fall short.

Continuity of Knowledge

The same people who build your platform stay to run it. No knowledge lost in handoffs.

Enterprise-Tested Expertise

Our guidance is shaped by direct experience in complex, high-stakes environments — not theory.

Governance Built In

Structured oversight runs throughout every engagement — not bolted on at the end.

Outcomes, Not Activities

We measure success by business impact: adoption rates, resolution times, cost predictability, and ROI.

Proactive Risk Management

We surface governance gaps and integration weaknesses early — before they become expensive problems.

Platform Breadth

ServiceNow, Salesforce, SAP, BMC, Ivanti, Atlassian, AWS, Azure, GCP — one partner across your full environment.

--- Source: src/app/services/ServiceLayout.tsx ---

0.5rem

{/* HERO BANNER */}

{heroVideoUrl ? (

) : (

{title}

{shortSubtitle}

{/* COMPREHENSIVE SOLUTIONS (New Asymmetric Layout) */}
        {solutions.length > 0 && (

{/* Left Sticky Sidebar */}

Our Offerings

Leverage our end-to-end services and solutions that deliver measurable business impact across your entire enterprise.

setActiveTab('offerings')}
                  >
                    Service Offerings

{framework.length > 0 && (

setActiveTab('framework')}
                    >
                      Our Service Framework

{/* Right Content Area */}

{activeTab === 'offerings' && (

{String(i + 1).padStart(2, '0')}.

{sol.title}

{sol.desc}

)}

                  {activeTab === 'framework' && (

{step.step}.

{step.title}

{step.desc}

Outcome:

{step.outcome}

)}

        {/* WHY HADRON GBS? */}
        {whyHadron.length > 0 && (

Why Hadron GBS?

{why.title}

{why.desc}
```
