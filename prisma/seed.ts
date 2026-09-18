import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('B@nheur2026!', 12);

  const admin = await prisma.adminUser.upsert({
    where: { email: 'nzaubonheur84@gmail.com' },
    update: { passwordHash },  // Force la mise à jour du mot de passe
    create: {
      name: 'Bonheur Nzau',
      email: 'nzaubonheur84@gmail.com',
      passwordHash,
      role: 'ADMIN',
    },
  });

  console.log(`✅ Admin mis à jour : ${admin.email}`);
}

main()
  .catch((e) => {
    console.error('❌ Erreur seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
