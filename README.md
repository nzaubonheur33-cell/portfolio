# 📁 Bonheur Nzau — Developer Portfolio

> Portfolio Full-Stack professionnel — React, Node.js, TypeScript, Prisma, MySQL

---

## 🏗️ Architecture du projet

```
portfolio/
├── client/                   # Frontend React (Vite + TailwindCSS)
│   ├── public/               # Fichiers statiques (logo, cv.pdf)
│   ├── src/
│   │   ├── components/       # Composants UI réutilisables
│   │   │   ├── motion/       # Animations Framer Motion
│   │   │   └── ui/           # Composants de chargement (Spinner, Skeleton)
│   │   ├── hooks/            # Custom React hooks
│   │   ├── locales/          # Fichiers de traduction (fr.json, en.json)
│   │   ├── pages/
│   │   │   └── admin/        # Dashboard & Login Admin (protégé)
│   │   ├── services/         # Appels API (axios)
│   │   └── main.jsx          # Point d'entrée React
│   ├── index.html            # Template HTML + SEO meta tags
│   ├── vite.config.js        # Configuration Vite
│   ├── tailwind.config.js    # Configuration TailwindCSS
│   └── package.json
│
├── server/                   # Backend Node.js (Express + TypeScript)
│   ├── src/
│   │   ├── config/           # Configuration Prisma
│   │   ├── controllers/      # Logique métier (auth, contact, projects)
│   │   ├── middlewares/      # Auth JWT, gestion des erreurs
│   │   ├── routes/           # Définition des routes API
│   │   └── index.ts          # Point d'entrée Express
│   ├── tsconfig.json
│   └── package.json
│
├── prisma/                   # ORM Prisma
│   ├── schema.prisma         # Schéma de la base de données
│   ├── seed.ts               # Création du compte Admin initial
│   └── migrations/           # Migrations SQL générées
│
├── .env.example              # Variables d'environnement (template)
├── .gitignore
├── package.json              # Scripts monorepo (dev, build)
└── README.md
```

---

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+
- MySQL 8+

### Installation

```bash
# Cloner le projet
git clone https://github.com/bonheur84/portfolio.git
cd portfolio

# Installer toutes les dépendances (client + server)
npm run install:all
```

### Configuration

```bash
# Copier le fichier d'environnement
cp .env.example .env

# Renseigner les variables dans .env
DATABASE_URL="mysql://root:motdepasse@localhost:3306/portfolio"
JWT_SECRET="votre_secret_jwt"
RESEND_API_KEY="votre_cle_resend"  # optionnel
```

### Base de données

```bash
# Appliquer les migrations
npx prisma migrate dev

# Générer le client Prisma
npx prisma generate

# Créer le compte admin
node -e "
const {PrismaClient}=require('@prisma/client');
const bcrypt=require('bcrypt');
const p=new PrismaClient();
bcrypt.hash('B@nheur2026!',12).then(h=>p.adminUser.upsert({where:{email:'nzaubonheur84@gmail.com'},update:{passwordHash:h},create:{name:'Bonheur Nzau',email:'nzaubonheur84@gmail.com',passwordHash:h,role:'ADMIN'}})).then(()=>p.\$disconnect());
"
```

### Lancement en développement

```bash
# Démarre client (port 5173) + server (port 5000) en parallèle
npm run dev
```

---

## 🌐 URLs

| Service   | URL                         |
| --------- | --------------------------- |
| Portfolio | http://localhost:5173       |
| Admin     | http://localhost:5173/admin |
| API       | http://localhost:5000/api   |

---

🛠️ Stack technique

| Couche                     | Technologies                                                         |
| -------------------------- | -------------------------------------------------------------------- |
| **Frontend**         | React 18, Vite, TailwindCSS, Framer Motion, i18next, React Hook Form |
| **Backend**          | Node.js, Express, TypeScript, JWT, Bcrypt, Zod, Resend               |
| **Base de données** | MySQL 8 + Prisma ORM v5                                              |
| **Tooling**          | ESLint, Nodemon, Concurrently                                        |

---

## 📦 Scripts disponibles

```bash
npm run dev           # Démarre client + server en parallèle
npm run dev:client    # Démarre seulement le client
npm run dev:server    # Démarre seulement le server
npm run build         # Build production (client + server)
npm run install:all   # Installe toutes les dépendances
```

---

## 📄 Licence

Projet personnel — © 2026 Bonheur Nzau. Tous droits réservés.
