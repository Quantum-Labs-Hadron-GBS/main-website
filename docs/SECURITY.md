# Security Architecture & Cryptographic Standards

This document outlines the security architecture for the Hadron Enterprise Portal, focusing on our implementation of Post-Quantum Cryptography (PQC) and strict Role-Based Access Control (RBAC).

## Post-Quantum Cryptography (PQC)

We have implemented a hybrid encryption architecture to protect all sensitive Personally Identifiable Information (PII) before it is persisted to the database.

### Cryptographic Algorithms
- **Symmetric Encryption:** AES-256-GCM
- **Key Encapsulation:** ML-KEM-768 (NIST FIPS-203 standard)
- **Library:** We use the `mlkem` package implementing the NIST FIPS-203 ML-KEM standard. This is treated as a third-party dependency and must be kept updated to the latest standard specifications.

### Encryption Pipeline (Data Ingress)
When a user submits a sensitive form (e.g., Contact Form, Job Application):
1. The server generates a dynamic, random shared secret by running `mlkem768.encap(publicKey)`.
2. This generates the shared symmetric key (32 bytes) and the `encapsulated_key` (ciphertext of the symmetric key).
3. The server generates a random 96-bit Initialization Vector (IV).
4. The entire JSON payload is encrypted using `AES-256-GCM` parameterized with the shared secret and IV.
5. The `ciphertext`, `encapsulated_key`, `iv`, `auth_tag`, and `key_version` are stored in the PostgreSQL database.
6. The plaintext is immediately discarded from memory.

### Decryption Pipeline (Data Egress)
When an authorized internal user requests a record:
1. The server retrieves the database record.
2. Based on the `key_version`, the correct ML-KEM private key is loaded.
3. The server runs `mlkem768.decap(encapsulated_key, privateKey)` to recover the shared symmetric key.
4. The payload is decrypted using `AES-256-GCM` and returned to the authorized user's browser.

### Key Management & Rotation
- **Key Generation:** Keys are generated strictly once using `npm run pqc:init`. The script checks for the existence of previous keys and will deliberately fail rather than overwrite them.
- **Storage:** In development, keys are stored in `keys/public.key` and `keys/private.key` (excluded from version control). In production, keys must reside in a managed HSM or Azure Key Vault.
- **Rotation:** A `key_version` integer accompanies every encrypted record. When a new keypair is generated, the application increments its internal version counter. Old records continue to be decrypted using historical keys.
- **Backup & Disaster Recovery:** The master ML-KEM private key must be backed up to offline, encrypted cold storage (e.g., air-gapped hardware encrypted drives) with strict access control protocols. Loss of the private key results in permanent, mathematically irreversible data loss of all records encrypted under that key version.

## Authentication & Authorization
- **Current (Local):** `CredentialsProvider` utilizing `Argon2` for password hashing.
- **Production (Target):** Microsoft Entra ID (Azure AD) via Auth.js. No passwords will be stored; authorization is federated.
- **RBAC:** Roles (`ADMIN`, `SALES`, `HR`, `ANALYTICS`) are strongly typed and verified server-side on every API request and route change.
- **Middleware:** Next.js Middleware strictly intercepts unauthorized traffic, isolating `portal.hadrongbs.com` entirely from the public-facing `www` routes.
