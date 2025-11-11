# Guide de démarrage rapide

## 🚀 Mise en route

### 1. Installation

```bash
npm install
```

### 2. Lancement en développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### 3. Ajouter vos contenus

#### Photos de réalisations :
1. Placez vos photos dans : `public/content/realisations/`
2. Formats acceptés : `.jpg`, `.jpeg`, `.png`, `.webp`
3. Taille recommandée : 1920x1080px minimum
4. Nommez vos fichiers de façon descriptive : `salon-moderne-1.jpg`

#### Photos de produits :
1. Placez vos photos dans : `public/content/produits/`
2. Format carré recommandé : 1000x1000px
3. Nommez vos fichiers : `nom-produit.jpg`

#### Mise à jour des données :
- Réalisations : Modifiez `data/realisations.ts`
- Produits : Modifiez `data/products.ts`

### 4. Build pour production

```bash
npm run build
```

Les fichiers de production seront dans le dossier `out/`

## 📤 Déploiement sur Netlify

### Option A : Via GitHub (Recommandé)

1. **Créez un repo GitHub** :
```bash
git init
git add .
git commit -m "Initial commit - Lydia Décor"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/lydiadecor.git
git push -u origin main
```

2. **Sur Netlify** :
   - Connectez-vous sur netlify.com
   - "New site from Git" → Choisissez GitHub
   - Sélectionnez votre repo `lydiadecor`
   - Netlify détecte automatiquement Next.js
   - Cliquez "Deploy"

3. **Configuration automatique** :
   - Build : `npm run build`
   - Publish : `out`
   - Tout est configuré dans `netlify.toml` ✅

### Option B : Drag & Drop

1. Build local :
```bash
npm run build
```

2. Sur netlify.com :
   - Glissez-déposez le dossier `out/`

## 🎨 Personnalisation

### Changer les couleurs :
Éditez `tailwind.config.ts` - Section `colors`

### Changer le logo/nom :
Éditez `components/Header.tsx` et `components/Footer.tsx`

### Modifier les infos de contact :
Éditez `app/contact/page.tsx` et `components/Footer.tsx`

## 📱 Structure des pages

- **/** - Page d'accueil
- **/realisations** - Galerie de projets
- **/produits** - Catalogue de produits
- **/a-propos** - À propos de Lydia Décor
- **/contact** - Formulaire de contact

## 🛠️ Commandes utiles

```bash
npm run dev       # Développement
npm run build     # Build production
npm run start     # Serveur production local
npm run lint      # Vérification du code
```

## ❓ Besoin d'aide ?

- Next.js : https://nextjs.org/docs
- Netlify : https://docs.netlify.com
- Tailwind : https://tailwindcss.com/docs

---

**Bon déploiement ! 🚀**
