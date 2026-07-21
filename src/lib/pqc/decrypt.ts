import crypto from 'crypto';
import { MlKem768 } from 'mlkem';
import { getPrivateKey } from './keyManager';
import { EncryptedPayload } from './encrypt';

/**
 * Decrypts a JSON payload using hybrid AES-256-GCM + ML-KEM
 */
export async function decryptPayload(payload: EncryptedPayload): Promise<any> {
  const privateKey = getPrivateKey(payload.key_version);

  if (privateKey.length === 0) {
    throw new Error("ML-KEM Private Key is not configured for version " + payload.key_version);
  }

  // 1. Decapsulate to recover the symmetric shared secret
  const encapsulatedKey = Buffer.from(payload.encapsulated_key, 'base64');
  
  // The sharedSecret recovered here will perfectly match the one generated during encryption
  const kem = new MlKem768();
  const sharedSecret = await kem.decap(encapsulatedKey, privateKey);

  // 2. Prepare AES-256-GCM for decryption
  const iv = Buffer.from(payload.iv, 'base64');
  const authTag = Buffer.from(payload.auth_tag, 'base64');
  const decipher = crypto.createDecipheriv('aes-256-gcm', sharedSecret, iv);
  decipher.setAuthTag(authTag);

  // 3. Decrypt the data
  let plaintext = decipher.update(payload.ciphertext, 'base64', 'utf8');
  plaintext += decipher.final('utf8');

  // 4. Return parsed JSON
  return JSON.parse(plaintext);
}
