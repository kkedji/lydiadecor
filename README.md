# Lydia Décor

Site web moderne et élégant pour **Lydia Décor** - Votre spécialiste en décoration d'intérieur.

## 🎨 Fonctionnalités

- **Design moderne et responsive** - Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Galerie de réalisations** - Présentez vos projets avec filtres par catégorie
- **Catalogue de produits** - Exposez vos articles de décoration
- **Gestion de contenu locale** - Ajoutez facilement photos et vidéos via des dossiers locaux
- **Page de contact** - Formulaire de contact intégré
- **Animations fluides** - Interface utilisateur élégante avec Framer Motion
- **Optimisé pour Netlify** - Déploiement facile via GitHub

## 🚀 Technologies utilisées

- **Next.js 14** - Framework React pour production
- **TypeScript** - Typage statique pour plus de fiabilité
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Bibliothèque d'animations
- **Netlify** - Hébergement et déploiement

## 📁 Structure du projet

```
lydiadecor/
├── app/                    # Pages Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── realisations/      # Page des réalisations
│   ├── produits/          # Page des produits
│   ├── a-propos/          # Page à propos
│   └── contact/           # Page de contact
├── components/            # Composants réutilisables
├── data/                  # Données (réalisations, produits)
├── public/
│   └── content/          # Vos photos et vidéos
│       ├── realisations/ # Photos de projets
│       └── produits/     # Photos de produits
├── tailwind.config.ts    # Configuration Tailwind
└── netlify.toml          # Configuration Netlify
```

## 🛠️ Installation

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```

3. **Ouvrir dans le navigateur** :
   ```
   http://localhost:3000
   ```

## 📸 Ajouter du contenu

### Ajouter des réalisations :

1. Placez vos photos dans `public/content/realisations/`
2. Modifiez `data/realisations.ts` pour ajouter les informations :

```typescript
{
  id: '7',
  title: 'Nom du projet',
  category: 'Salon', // ou Chambre, Cuisine, etc.
  description: 'Description courte',
  image: '/content/realisations/votre-photo.jpg',
  date: '2024-11',
  details: 'Détails supplémentaires'
}
```

### Ajouter des produits :

1. Placez vos photos dans `public/content/produits/`
2. Modifiez `data/products.ts` :

```typescript
{
  id: '9',
  name: 'Nom du produit',
  category: 'Salon',
  price: 299,
  description: 'Description du produit',
  image: '/content/produits/votre-photo.jpg',
  isNew: true,
  inStock: true,
  dimensions: 'L x P x H cm',
  materials: 'Matériaux utilisés'
}
```

## 🌐 Déploiement sur Netlify

### Méthode 1 : Via GitHub (Recommandé)

1. **Créer un dépôt GitHub** :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/votre-username/lydiadecor.git
   git push -u origin main
   ```

2. **Connecter à Netlify** :
   - Allez sur [netlify.com](https://www.netlify.com)
   - Cliquez sur "Add new site" > "Import an existing project"
   - Choisissez GitHub et sélectionnez votre dépôt
   - Netlify détectera automatiquement Next.js
   - Cliquez sur "Deploy site"

3. **Configuration automatique** :
   - Build command : `npm run build`
   - Publish directory : `out`
   - Tout est déjà configuré dans `netlify.toml`

### Méthode 2 : Netlify CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Login à Netlify
netlify login

# Déployer
netlify deploy --prod
```

## 🎨 Personnalisation

### Couleurs :

Modifiez `tailwind.config.ts` pour changer les couleurs :

```typescript
colors: {
  primary: {
    600: '#votre-couleur', // Couleur principale
  },
  accent: {
    600: '#votre-couleur', // Couleur d'accentuation
  },
}
```

### Logo et Nom :

Modifiez dans `components/Header.tsx` et `components/Footer.tsx` :

```tsx
Lydia <span className="text-primary-600">Décor</span>
```

### Informations de contact :

Modifiez dans `app/contact/page.tsx` et `components/Footer.tsx`.

## 📱 Optimisations

- ✅ Images optimisées automatiquement par Next.js
- ✅ Code splitting automatique
- ✅ CSS minifié et optimisé
- ✅ Performance maximale (Lighthouse Score > 90)
- ✅ SEO optimisé
- ✅ Responsive design

## 🆘 Support

Pour toute question ou problème :
- Consultez la documentation Next.js : [nextjs.org/docs](https://nextjs.org/docs)
- Consultez la documentation Netlify : [docs.netlify.com](https://docs.netlify.com)

## 📄 Licence

Ce projet est conçu pour Lydia Décor. Tous droits réservés.

---

**Créé avec ❤️ pour Lydia Décor**
