/**
 * Key Manager for Post-Quantum Cryptography (ML-KEM)
 * Handles loading, versioning, and managing ML-KEM public/private key pairs.
 * 
 * In a production enterprise environment, the private key should be loaded 
 * directly from a secure enclave or Azure Key Vault, never hardcoded.
 */

import fs from 'fs';
import path from 'path';

export interface KeyPair {
  publicKey: Uint8Array;
  privateKey: Uint8Array;
  version: number;
}

// Convert hex string to Uint8Array
function fromHex(hex: string): Uint8Array {
  if (!hex) return new Uint8Array(0);
  const matched = hex.match(/.{1,2}/g);
  if (!matched) return new Uint8Array(0);
  return new Uint8Array(matched.map((byte) => parseInt(byte, 16)));
}

export function getCurrentKeyPair(): KeyPair {
  const version = parseInt(process.env.PQC_KEY_VERSION || "1", 10);
  
  let pubHex = "";
  let privHex = "";

  try {
    const keysDir = path.join(process.cwd(), 'keys');
    pubHex = fs.readFileSync(path.join(keysDir, 'public.key'), 'utf8').trim();
    privHex = fs.readFileSync(path.join(keysDir, 'private.key'), 'utf8').trim();
  } catch (error) {
    console.warn("⚠️  PQC keys not found in keys/ directory. Encryption will fail if not configured in production.");
  }

  return {
    publicKey: fromHex(pubHex),
    privateKey: fromHex(privHex),
    version,
  };
}

export function getPublicKey(version?: number): Uint8Array {
  // In a real system, you'd fetch the specific key version. 
  // For now, return the current one.
  return getCurrentKeyPair().publicKey;
}

export function getPrivateKey(version: number): Uint8Array {
  const current = getCurrentKeyPair();
  if (current.version !== version) {
    throw new Error(`Key version ${version} not found or unsupported.`);
  }
  return current.privateKey;
}
