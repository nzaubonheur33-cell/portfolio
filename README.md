# Bonheur Nzau - Portfolio Personnel

Portfolio professionnel de Bonheur Nzau, étudiant en informatique et développeur full-stack.

## Structure du Projet

```
stitch_bonheur_nzau_developer_portfolio/
├── index.html          # Page principale
├── css/
│   ├── input.css       # Fichier CSS source avec directives Tailwind
│   └── output.css      # Fichier CSS compilé (généré automatiquement)
├── js/
│   └── main.js         # Scripts JavaScript (langage, filtres, modales)
├── assets/             # Dossier pour les images et ressources
├── tailwind.config.js  # Configuration Tailwind CSS personnalisée
└── package.json        # Dépendances et scripts npm
```

## Installation et Développement

### Installation des dépendances
```bash
npm install
```

### Mode développement (avec surveillance)
```bash
npm run dev
```
Cette commande compile le CSS en mode surveillance et régénère automatiquement les changements.

### Build de production
```bash
npm run build
```
Cette commande minifie le CSS pour la production.

## Fonctionnalités

- **Site bilingue** (Français/Anglais) avec changement de langue dynamique
- **Filtrage des compétences** par catégorie (Frontend, Backend, Databases, DevOps, AI)
- **Formulaires interactifs** avec validation et modales
- **Design responsive** pour tous les appareils
- **Système de modales** pour les études de cas et les préviews administratives

## Technologies Utilisées

- **HTML5** - Structure sémantique
- **Tailwind CSS** - Framework CSS utility-first
- **JavaScript (Vanilla)** - Interactivité et manipulation DOM
- **Google Fonts** - Typographie (Plus Jakarta Sans, JetBrains Mono)
- **Material Symbols** - Icônes Google

## Personnalisation

### Configuration Tailwind
Le fichier `tailwind.config.js` contient la configuration personnalisée avec :
- Palette de couleurs personnalisée
- Typographie personnalisée
- Espacements et bordures personnalisés

### Contenu
Le contenu peut être modifié directement dans le fichier `index.html` :
- Sections de la page (Hero, About, Skills, Services, Projects, etc.)
- Textes et informations personnelles
- Liens vers les projets GitHub

## Déploiement

Pour déployer ce portfolio :
1. Exécuter `npm run build` pour générer le CSS de production
2. Uploader le contenu du dossier sur un serveur web statique
3. Le site est prêt à être utilisé

## Auteur

**Bonheur Nzau**
- Étudiant en Informatique @ Université Nouveaux Horizons
- Spécialisation: Intelligence Artificielle
- Email: nzaubonheur84@gmail.com
- GitHub: https://github.com/bonheur84