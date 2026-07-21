import fs from 'fs';
import path from 'path';
import { MlKem768 } from 'mlkem';

const keysDir = path.join(process.cwd(), 'keys');
const pubKeyPath = path.join(keysDir, 'public.key');
const privKeyPath = path.join(keysDir, 'private.key');

async function initKeys() {
  console.log('--- Hadron PQC Key Initialization ---');

  if (!fs.existsSync(keysDir)) {
    fs.mkdirSync(keysDir, { recursive: true });
  }

  // 1. Safety check: Never overwrite existing keys
  if (fs.existsSync(pubKeyPath) || fs.existsSync(privKeyPath)) {
    console.error('⚠️  CRITICAL: Existing keys found in the keys/ directory.');
    console.error('Generating new keys would permanently break decryption for existing database records.');
    console.error('Aborting key generation to protect data integrity.');
    process.exit(1);
  }

  console.log('Generating new ML-KEM-768 keypair... This may take a moment.');

  // 2. Generate the Keypair
  const kem = new MlKem768();
  const [publicKey, privateKey] = await kem.generateKeyPair();

  // 3. Convert to Hex for storage (so it matches our process.env loader)
  const pubHex = Buffer.from(publicKey).toString('hex');
  const privHex = Buffer.from(privateKey).toString('hex');

  // 4. Save to files
  fs.writeFileSync(pubKeyPath, pubHex, 'utf8');
  fs.writeFileSync(privKeyPath, privHex, 'utf8');

  console.log('✅ Keypair generated successfully!');
  console.log('Keys saved to:');
  console.log(`- ${pubKeyPath}`);
  console.log(`- ${privKeyPath}`);
  console.log('\nTo use these in development, add the following to your .env:');
  console.log(`PQC_MLKEM_PUBLIC_KEY="${pubHex}"`);
  console.log(`PQC_MLKEM_PRIVATE_KEY="${privHex}"`);
  console.log(`PQC_KEY_VERSION="1"`);
}

initKeys().catch((err) => {
  console.error('Fatal error during key generation:', err);
  process.exit(1);
});
