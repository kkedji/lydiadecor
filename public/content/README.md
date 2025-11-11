# Dossier de Contenu - Lydia Décor

Ce dossier contient toutes les photos et vidéos qui seront affichées sur le site web.

## Structure

```
content/
├── realisations/     # Photos de vos projets/réalisations
├── produits/         # Photos des produits à vendre
├── hero/            # Images pour la page d'accueil
└── about/           # Photos de l'équipe, atelier, etc.
```

## Comment ajouter du contenu

### Pour les réalisations :
1. Placez vos photos dans `content/realisations/`
2. Nommez les fichiers de façon descriptive (ex: `salon-moderne-1.jpg`)
3. Modifiez le fichier `data/realisations.ts` pour ajouter les informations :
   - Titre du projet
   - Description
   - Catégorie
   - Date
   - Chemin vers l'image

### Pour les produits :
1. Placez vos photos dans `content/produits/`
2. Nommez les fichiers de façon descriptive (ex: `canape-milano.jpg`)
3. Modifiez le fichier `data/products.ts` pour ajouter :
   - Nom du produit
   - Prix
   - Description
   - Catégorie
   - Dimensions et matériaux
   - Chemin vers l'image

## Formats recommandés

- **Format** : JPEG ou PNG
- **Résolution** : 1920x1080px minimum pour les photos principales
- **Poids** : Optimisez vos images (< 500KB si possible)
- **Ratio** : 4:3 pour les réalisations, 1:1 pour les produits

## Placeholders

Des images placeholder sont actuellement utilisées. Remplacez-les par vos propres photos en conservant les mêmes noms de fichiers.
