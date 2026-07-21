# Hadron GBS Enterprise Architecture

This document describes the high-level architecture of the Hadron Enterprise Portal and Public Marketing platform.

## Overview
The application is a monolithic Next.js 16 (App Router) instance heavily utilizing server-side rendering, statically generated marketing pages, and strict server-enforced API routes. It serves two distinct domains/paths handled internally via Next.js Middleware.

### Routing Separation
- **`www.hadrongbs.com`**: The public-facing marketing entity. Contains high-fidelity SEO-optimized static pages (`/`, `/about`, `/services`, etc.). Requires no authentication.
- **`portal.hadrongbs.com`**: The secure internal dashboard entity. Requests to this domain (or `/portal`) are intercepted by Middleware. Unauthenticated traffic is rejected. Valid traffic is routed to the respective internal dashboards (`/sales`, `/hr`, `/analytics`).

## Technology Stack
- **Frontend & Framework:** Next.js 16 (App Router) with React 19, TypeScript, CSS Modules, and Framer Motion.
- **Backend APIs:** Next.js Route Handlers (`app/api/*`).
- **Database:** PostgreSQL managed via Prisma ORM.
- **Authentication:** Auth.js (NextAuth) transitioning from Local Credentials (Argon2) to Microsoft Entra ID.
- **Security & PQC:** Hybrid ML-KEM-768 + AES-256-GCM via the `mlkem` standard implementation.
- **Infrastructure:** Vercel (Hosting), Cloudflare (WAF/DNS/Turnstile).

## Folder Structure
```
src/
├── app/
│   ├── (public)/         # Marketing routes (Home, About, Services)
│   ├── portal/           # Secured dashboard layouts and routes
│   └── api/              # Secure backend API route handlers
├── components/           # Reusable UI components
├── lib/
│   ├── auth/             # NextAuth configuration and RBAC utilities
│   ├── pqc/              # ML-KEM key management and encryption logic
│   └── prisma/           # Database client instantiation
```

## Design Principles
1. **Never Rely on Obscurity:** Security relies on robust authentication (Entra ID) and server-side RBAC, never on hidden URLs.
2. **Hybrid Cryptography:** PII and sensitive data are encrypted on the server before storage. Plaintext is never stored in the database. Keys are never exposed to the client.
3. **Abstract Capabilities:** Authentication and Storage logic are decoupled so they can easily be replaced by Microsoft Azure equivalents in the future.
