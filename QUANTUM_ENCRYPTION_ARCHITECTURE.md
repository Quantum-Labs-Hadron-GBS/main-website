# Client-Side Post-Quantum Encryption (PQC) Architecture
**Hadron GBS Enterprise Platform**

This document explains the theory, cryptography, and exact data flow of the Client-Side Post-Quantum Encryption system implemented in the Hadron GBS platform. 

By pushing encryption to the browser (Application Layer), we defend against **"Harvest Now, Decrypt Later"** attacks, where state-sponsored adversaries capture encrypted internet traffic today with the intent of decrypting it once quantum computers become powerful enough to break standard RSA/ECC encryption.

---

## 1. The Cryptographic Algorithms

We use a **Hybrid Encryption** model. This is the gold standard for migrating to post-quantum security because it combines the speed and proven security of traditional symmetric encryption with the quantum-resistance of modern lattice-based cryptography.

### **ML-KEM-768 (Module-Lattice-Based Key-Encapsulation Mechanism)**
- **What it is**: The exact algorithm standardized by NIST (FIPS 203) in August 2024 to replace RSA and Elliptic Curve Cryptography (ECC) for key exchange. 
- **The Math**: It relies on the *Module Learning with Errors (MLWE)* problem over lattices. Unlike prime factorization (which Shor's Algorithm on a quantum computer can break in minutes), finding the shortest vector in a high-dimensional lattice is currently believed to be unsolvable by both classical and quantum computers.
- **Our Usage**: We use it to securely transport a symmetrical shared secret across the internet.

### **AES-256-GCM (Advanced Encryption Standard - Galois/Counter Mode)**
- **What it is**: The military-grade symmetric encryption standard. 
- **The Math**: Symmetric encryption is naturally resistant to quantum computers. Grover's Algorithm effectively halves the key space of symmetric ciphers. Thus, AES-128 is reduced to 64-bit security (which is vulnerable), but AES-256 is reduced to 128-bit security, which remains mathematically unbreakable by quantum computers.
- **Our Usage**: We use this to encrypt the actual payload (the JSON form data) using the WebCrypto API inside the browser.

---

## 2. The Data Flow (Step-by-Step)

Here is exactly what happens when a user clicks "Submit Application" on the website.

### Phase 1: Key Distribution (Page Load)
1. When the user loads the `/contact` or `/careers` page, the browser makes a silent background `GET` request to `/api/pqc/public-key`.
2. The server responds with the **ML-KEM-768 Public Key** (a large hexadecimal string) and a `keyVersion`.
3. The browser caches this public key in memory. The user fills out their sensitive PII (Personally Identifiable Information) in the form.

### Phase 2: Client-Side Browser Encryption (Clicking "Submit")
When the user clicks "Secure Submit Application":
1. **Dynamic Import**: The browser dynamically downloads the `mlkem` WebAssembly/JS library over the network. This prevents the homepage from loading slowly.
2. **KEM Encapsulation**: The browser feeds the server's ML-KEM Public Key into the ML-KEM algorithm. The algorithm spits out two things:
   - **Shared Secret**: A raw 32-byte (256-bit) array.
   - **Encapsulated Key (Ciphertext)**: A math puzzle that wraps the shared secret. Only the server's Private Key can solve this puzzle.
3. **AES Initialization**: The browser passes the 32-byte Shared Secret directly into the native `window.crypto.subtle` AES-GCM engine and generates a random 96-bit Initialization Vector (`iv`).
4. **Payload Encryption**: The browser encrypts the raw JSON form data using AES-256-GCM. This produces the `ciphertext` and an `auth_tag` (used to prove the data wasn't tampered with).
5. **Memory Wiped**: The browser discards the plaintext JSON and the raw Shared Secret from memory.

### Phase 3: Transmission (Zero Plaintext)
The browser sends an HTTP `POST` request to the Next.js server containing **zero plaintext**. The payload looks like this:
```json
{
  "ciphertext": "A92Fba7d...",
  "encapsulated_key": "BC22fe8...",
  "iv": "3c9a8b7f...",
  "auth_tag": "ab89ef9...",
  "key_version": 1
}
```
*Even if an ISP, a government agency, or a malicious router intercepts this packet, they only see random noise. They cannot decrypt it today, and they won't be able to decrypt it with a quantum computer tomorrow.*

### Phase 4: Storage
1. The Next.js API route receives the JSON.
2. It verifies the presence of the 5 fields.
3. It saves the encrypted blob directly to the PostgreSQL database (`JobApplication` or `ContactSubmission` tables). 
4. The server **does not decrypt** the data during this transaction.

---

## 3. The Decryption Flow (Admin / HR Portal)

When an authorized HR employee or Admin wants to view the data:

1. The server loads the **ML-KEM-768 Private Key** associated with the `key_version`. (This key never leaves the server).
2. **Decapsulation**: The server passes the `encapsulated_key` and the Private Key into the ML-KEM algorithm. The algorithm solves the lattice puzzle and recovers the exact same **32-byte Shared Secret** that the user's browser generated.
3. **AES Decryption**: The server loads the `ciphertext`, `iv`, and `auth_tag` into the AES-256-GCM decipher block, along with the recovered Shared Secret.
4. **Integrity Check**: The decipher checks the `auth_tag`. If a bit was flipped in transit, it throws `"Data Integrity Verification Failed"`.
5. **Decryption**: The decipher unlocks the data and returns the plaintext JSON to the authorized employee.

---

## 4. Why This is Enterprise-Grade

- **E2EE over TLS**: Traditional websites rely on TLS (HTTPS) to encrypt data in transit. We run our Client-Side Encryption *on top of* TLS.
- **Stateless Secrecy**: The server doesn't need to generate a session key or maintain a handshake state with the client. The client generates the key dynamically.
- **Quantum-Proof**: By using ML-KEM + AES-256, we adhere exactly to the NSA's Commercial National Security Algorithm Suite 2.0 (CNSA 2.0) guidelines for quantum-resistant data protection.
