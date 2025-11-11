# 📸 Comment ajouter vos réalisations

## Instructions simples

### 1. Ajoutez vos fichiers dans les bons dossiers

**Pour les IMAGES** : Déposez-les directement dans
```
public/content/realisations/
```
Exemples : projet1.jpg, salon-moderne.jpg, renovation-cuisine.png

**Pour les VIDÉOS** : Déposez-les dans le sous-dossier
```
public/content/realisations/videos/
```
Exemples : projet-complet.mp4, visite-virtuelle.mp4

### 2. Mettez à jour la liste dans le code
Ouvrez le fichier : `app/realisations/page.tsx`

Trouvez la section (ligne 13 environ) :
```typescript
const mediaFiles = [
  // Images (dans public/content/realisations/)
  { file: 'salon-moderne-1.jpg', type: 'image' as const },
  
  // Vidéos (dans public/content/realisations/videos/)
  { file: 'mon-projet.mp4', type: 'video' as const },
]
```

### 3. Ajoutez vos réalisations

**Pour une photo** :
```typescript
{ file: 'mon-projet-1.jpg', type: 'image' as const },
```

**Pour une vidéo** :
```typescript
{ file: 'visite-appartement.mp4', type: 'video' as const },
```

## ✨ Exemple complet :

```typescript
const mediaFiles = [
  { file: 'salon-renovation.jpg', type: 'image' as const },
  { file: 'cuisine-moderne.jpg', type: 'image' as const },
  { file: 'visite-maison.mp4', type: 'video' as const },
  { file: 'chambre-suite.jpg', type: 'image' as const },
  { file: 'avant-apres.mp4', type: 'video' as const },
]
```

## 📋 Formats supportés :

### Images :
- JPG / JPEG
- PNG
- WebP

### Vidéos :
- MP4 (recommandé)
- WebM

## 💡 Recommandations :

### Pour les images :
- **Taille** : 1200x900 pixels (format 4:3)
- **Poids** : Maximum 2 MB

### Pour les vidéos :
- **Durée** : 15-60 secondes
- **Résolution** : 1920x1080 ou 1280x720
- **Poids** : Maximum 50 MB

### Nommage :
- Utilisez des noms simples sans espaces
- ✅ `renovation-salon-2024.jpg`
- ✅ `visite-appartement.mp4`
- ❌ `Salon Rénové (Avant-Après) 2024.jpg`

## 🎬 Badge automatique :
Les vidéos afficheront automatiquement un badge "Vidéo" en haut à droite !

---

**Note** : Vous pouvez mélanger photos et vidéos dans la même galerie. Les vidéos auront des contrôles de lecture intégrés.
