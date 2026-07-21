import crypto from 'crypto';
import { MlKem768 } from 'mlkem';
import { getCurrentKeyPair } from './keyManager';

export interface EncryptedPayload {
  ciphertext: string;       // base64
  encapsulated_key: string; // base64
  iv: string;               // base64
  auth_tag: string;         // base64
  key_version: number;
}

/**
 * Encrypts a JSON payload using hybrid AES-256-GCM + ML-KEM
 */
export async function encryptPayload(data: object): Promise<EncryptedPayload> {
  const payloadString = JSON.stringify(data);
  const { publicKey, version } = getCurrentKeyPair();

  if (publicKey.length === 0) {
    throw new Error("ML-KEM Public Key is not configured.");
  }

  // 1. Encapsulate to generate the symmetric shared secret and its encapsulation
  // The sharedSecret from ML-KEM-768 is exactly 32 bytes (256 bits), perfect for AES-256.
  const kem = new MlKem768();
  const [encapsulatedKey, sharedSecret] = await kem.encap(publicKey);

  // 2. Prepare AES-256-GCM
  const iv = crypto.randomBytes(12); // standard 96-bit IV for GCM
  const cipher = crypto.createCipheriv('aes-256-gcm', sharedSecret, iv);

  // 3. Encrypt the data
  let ciphertext = cipher.update(payloadString, 'utf8', 'base64');
  ciphertext += cipher.final('base64');
  const authTag = cipher.getAuthTag();

  // 4. Return formatted package
  return {
    ciphertext,
    encapsulated_key: Buffer.from(encapsulatedKey).toString('base64'),
    iv: iv.toString('base64'),
    auth_tag: authTag.toString('base64'),
    key_version: version,
  };
}
