# 📸 Comment ajouter vos articles

## Instructions simples

### 1. Ajoutez vos images
Déposez toutes vos photos de produits dans ce dossier :
```
public/content/produits/
```

### 2. Mettez à jour la liste
Ouvrez le fichier : `app/produits/page.tsx`

Trouvez la section (ligne 12 environ) :
```typescript
const imageFiles = [
  'canape-milano.jpg',
  'table-marbre.jpg',
  // ... ajoutez vos images ici
]
```

### 3. Ajoutez le nom de vos images
Ajoutez simplement le nom de chaque fichier image :
```typescript
const imageFiles = [
  'mon-produit-1.jpg',
  'mon-produit-2.jpg',
  'mon-produit-3.png',
  'autre-article.jpg',
  // etc...
]
```

## ✨ C'est tout !

### Formats supportés :
- JPG / JPEG
- PNG
- WebP

### Recommandations :
- **Taille** : Environ 1000x1000 pixels (carré)
- **Poids** : Maximum 1-2 MB par image
- **Nommage** : Utilisez des noms simples sans espaces
  - ✅ `table-basse-marbre.jpg`
  - ❌ `Table Basse en Marbre (2024).jpg`

### Exemple complet :

1. Vous ajoutez 3 photos dans `public/content/produits/` :
   - `canape-bleu.jpg`
   - `lampe-design.jpg`
   - `table-bois.jpg`

2. Vous modifiez `app/produits/page.tsx` :
```typescript
const imageFiles = [
  'canape-bleu.jpg',
  'lampe-design.jpg',
  'table-bois.jpg'
]
```

3. Les images s'affichent automatiquement sur votre site ! 🎉

## 🔄 Pour retirer un article

Supprimez simplement la ligne correspondante dans `imageFiles`.

---

**Note** : Pas besoin de redémarrer le serveur en développement, les changements sont automatiques !
