# Database Schema & Storage

The database architecture is built using Prisma ORM mapping to a managed PostgreSQL cluster (Neon).

## Core Models

### `User`
Stores authenticated users allowed to access the internal portal.
- **Fields:** `id`, `email`, `name`, `password_hash` (temporary local auth), `role`, `createdAt`, `updatedAt`
- **Roles:** `ADMIN`, `SALES`, `HR`, `ANALYTICS`
- *Note:* In production with Microsoft Entra ID, `password_hash` will be null.

### `ContactSubmission` & `JobApplication`
Stores highly sensitive PII derived from public forms.
- **Fields:** `id`, `ciphertext`, `encapsulated_key`, `iv`, `auth_tag`, `key_version`, `resume_url` (Jobs only), `status` (Jobs only), `createdAt`
- **Security:** No plaintext PII is ever written to these tables. All fields belonging to the applicant/contact are bundled into a JSON object and hybrid-encrypted prior to database insertion.

### `AnalyticsEvent`
Stores non-PII behavioral and traffic data for dashboard consumption.
- **Fields:** `id`, `sessionId`, `page`, `timeOnPage`, `scrollDepth`, `referrer`, `serviceView`, `device`, `country`, `eventName`, `createdAt`
- **Security:** Requires no encryption. Used strictly for aggregate dashboards in the Sales/Analytics portal views.

### `AuditLog`
Stores a tamper-evident log of critical actions performed by authenticated portal users.
- **Fields:** `id`, `userId`, `action` (e.g., "VIEWED_APPLICATION", "EXPORTED_LEADS"), `details`, `createdAt`
- **Security:** Essential for tracking access to decrypted records by internal personnel.

## Document Storage
Physical resumes and other uploaded files are not stored in PostgreSQL. They are routed to a scalable object storage bucket (e.g., Azure Blob Storage, Vercel Blob). The application only stores the secure URL/reference to the object within the encrypted payload or as a column in the `JobApplication` table.
