"use client";

import React from 'react';

export default function InteractiveBento() {
  const cards = [
    {
      title: "Hadron Blueprint",
      desc: "Adapts best-in-class foundation models for your business, ensuring sustainable and successful programs tailored to specific data.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Hadron Engine",
      desc: "A set of services, solutions, and platforms that acts as a force multiplier for cloud-powered enterprise transformation.",
      img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Hadron Scale",
      desc: "Empower your teams with the superpower of automation to create memorable customer experiences and drive growth.",
      img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600"
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
