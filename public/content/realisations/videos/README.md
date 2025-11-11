# Dossier Vidéos des Réalisations

## Instructions pour ajouter vos vidéos

Déposez vos vidéos ici et référencez-les dans `data/realisations.ts`

### Formats supportés :
- **MP4** (recommandé)
- **WebM**
- **MOV**

### Recommandations :
- **Durée** : 15-60 secondes
- **Résolution** : 1920x1080 (Full HD) ou 1280x720 (HD)
- **Taille** : Maximum 50 MB par vidéo
- **Nommage** : `projet-nom-descriptif.mp4`

### Exemple :
```
/content/realisations/videos/salon-moderne-visite.mp4
/content/realisations/videos/cuisine-renovation-avant-apres.mp4
```

### Comment les ajouter dans le code :

Dans `data/realisations.ts`, ajoutez le champ `videos` :

```typescript
{
  id: '1',
  title: 'Salon Moderne Minimaliste',
  category: 'Salon',
  description: '...',
  image: '/content/realisations/salon-moderne-1.jpg',
  videos: [
    '/content/realisations/videos/salon-moderne-visite.mp4'
  ],
  date: '2024-10'
}
```

### Affichage :
- La vidéo remplacera l'image principale sur la carte
- Un badge "Vidéo disponible" sera affiché
- Les visiteurs pourront lire la vidéo directement
