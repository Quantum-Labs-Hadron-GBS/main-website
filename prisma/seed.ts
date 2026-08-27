import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  // Hash passwords
  const hrPasswordHash = await argon2.hash('HRPassword123!');
  const analyticsPasswordHash = await argon2.hash('QuantumLab123!');

  // Upsert HR user
  const hrUser = await prisma.user.upsert({
    where: { email: 'hr@hadrongbs.com' },
    update: {
      password_hash: hrPasswordHash,
      role: 'HR',
    },
    create: {
      email: 'hr@hadrongbs.com',
      name: 'HR Admin',
      password_hash: hrPasswordHash,
      role: 'HR',
    },
  });

  // Upsert Analytics user
  const analyticsUser = await prisma.user.upsert({
    where: { email: 'quantumlab@hadrongbs.com' },
    update: {
      password_hash: analyticsPasswordHash,
      role: 'ANALYTICS',
    },
    create: {
      email: 'quantumlab@hadrongbs.com',
      name: 'Quantum Analytics',
      password_hash: analyticsPasswordHash,
      role: 'ANALYTICS',
    },
  });

  console.log('Seed completed successfully!');
  console.log('HR User:', hrUser.email);
  console.log('Analytics User:', analyticsUser.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
