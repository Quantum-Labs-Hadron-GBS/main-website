import { MlKem768 } from 'mlkem';

export interface EncryptedPayload {
  ciphertext: string;       // base64
  encapsulated_key: string; // base64
  iv: string;               // base64
  auth_tag: string;         // base64
  key_version: number;
}

// Convert hex string to Uint8Array
function fromHex(hex: string): Uint8Array {
  if (!hex) return new Uint8Array(0);
  const matched = hex.match(/.{1,2}/g);
  if (!matched) return new Uint8Array(0);
  return new Uint8Array(matched.map((byte) => parseInt(byte, 16)));
}

// Convert ArrayBuffer to base64
function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

/**
 * Encrypts a JSON payload in the browser using ML-KEM + AES-256-GCM (Web Crypto API)
 */
export async function browserEncryptPayload(
  data: object,
  publicKeyHex: string,
  keyVersion: number
): Promise<EncryptedPayload> {
  const payloadString = JSON.stringify(data);
  const publicKey = fromHex(publicKeyHex);

  if (publicKey.length === 0) {
    throw new Error("Invalid ML-KEM Public Key");
  }

  // 1. Encapsulate to generate the symmetric shared secret and its encapsulation
  const kem = new MlKem768();
  const [encapsulatedKey, sharedSecret] = await kem.encap(publicKey);

  // 2. Prepare Web Crypto AES-256-GCM
  const iv = window.crypto.getRandomValues(new Uint8Array(12)); // 96-bit IV
  
  // Import the raw shared secret into Web Crypto
  const cryptoKey = await window.crypto.subtle.importKey(
    "raw",
    sharedSecret.buffer,
    { name: "AES-GCM" },
    false,
    ["encrypt"]
  );

  const encoder = new TextEncoder();
  const encodedData = encoder.encode(payloadString);

  // 3. Encrypt the data
  // WebCrypto AES-GCM returns the ciphertext and auth tag concatenated
  const encryptedBuffer = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    cryptoKey,
    encodedData
  );

  // Split ciphertext and auth tag (last 16 bytes for AES-GCM by default)
  const ciphertextBuffer = encryptedBuffer.slice(0, encryptedBuffer.byteLength - 16);
  const authTagBuffer = encryptedBuffer.slice(encryptedBuffer.byteLength - 16);

  // 4. Return formatted package
  return {
    ciphertext: arrayBufferToBase64(ciphertextBuffer),
    encapsulated_key: arrayBufferToBase64(encapsulatedKey.buffer),
    iv: arrayBufferToBase64(iv.buffer),
    auth_tag: arrayBufferToBase64(authTagBuffer),
    key_version: keyVersion,
  };
}
