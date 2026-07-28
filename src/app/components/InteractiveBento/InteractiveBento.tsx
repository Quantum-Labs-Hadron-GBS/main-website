"use client";

import React from 'react';

export default function InteractiveBento() {
  const cards = [
    {
      title: "Architecture-Led Delivery",
      desc: "We treat every engagement as a systems problem. Our architects design for structure, coherence, and long-term platform health.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Outcome-Driven Accountability",
      desc: "We define success through measurable KPIs from day one (MTTR, CSAT, throughput) and stay accountable to them.",
      img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "GenAI-Powered Transformation",
      desc: "Embedding automation across ServiceNow, Salesforce, and SAP.",
      img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Collaborative Governance",
      desc: "No black boxes. Open patterns and structured governance cadences.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Rigorous Discovery",
      desc: "Decisions grounded in real operating conditions and workflows, not untested assumptions.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Lifecycle Accountability",
      desc: "From hypercare to managed services, keeping platforms optimized.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Flexible Engagement Models",
      desc: "We adapt our operating model to match your business priorities, not the other way around.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      {cards.map((card, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', background: 'var(--card-bg)', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}>
          <div style={{ width: '100%', height: '280px', position: 'relative' }}>
             <img src={card.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={card.title} />
          </div>
          <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--fg)', marginBottom: '1rem' }}>{card.title}</h3>
            <p style={{ color: 'var(--fg-muted)', fontSize: '1rem', lineHeight: 1.6, flex: 1, marginBottom: '2rem' }}>{card.desc}</p>
            <a href="#" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Learn More →</a>
          </div>
        </div>
      ))}
    </div>
  );
}
