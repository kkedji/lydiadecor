# Configuration WhatsApp - Lydia Décor

## 📱 Comment configurer votre numéro WhatsApp

J'ai ajouté des boutons WhatsApp à 3 endroits sur votre site :

### 1️⃣ **Header (Menu de navigation)**
- Desktop : Icône WhatsApp à côté du bouton "Devis gratuit"
- Mobile : Bouton WhatsApp vert dans le menu déroulant

### 2️⃣ **Footer (Pied de page)**
- Lien WhatsApp dans la section Contact

### 3️⃣ **Fichiers à modifier**

Pour mettre votre vrai numéro WhatsApp, remplacez `33123456789` par votre numéro dans ces fichiers :

#### `components/Header.tsx` (2 emplacements)
```tsx
// Ligne ~41 (Desktop)
href="https://wa.me/33123456789"

// Ligne ~73 (Mobile)
href="https://wa.me/33123456789"
```

#### `components/Footer.tsx` (1 emplacement)
```tsx
// Ligne ~38
href="https://wa.me/33123456789"
```

## 🔢 Format du numéro WhatsApp

Le numéro doit être au format international **sans espaces, ni tirets, ni +** :

### ✅ Exemples corrects :
- France : `33612345678` (remplace le 0 par 33)
- Belgique : `32412345678`
- Suisse : `41791234567`

### ❌ Formats incorrects :
- ~~+33 6 12 34 56 78~~
- ~~06 12 34 56 78~~
- ~~+33-6-12-34-56-78~~

## 💡 Exemple avec un vrai numéro

Si votre numéro est **06 12 34 56 78**, le lien WhatsApp sera :
```
https://wa.me/33612345678
```

## 🔍 Rechercher et remplacer rapidement

Dans VS Code, utilisez Ctrl+H (ou Cmd+H sur Mac) :
- **Rechercher :** `33123456789`
- **Remplacer par :** Votre numéro (ex: `33612345678`)
- Cliquez sur "Remplacer tout"

## ✨ Fonctionnalités

Les boutons WhatsApp :
- ✅ S'ouvrent dans un nouvel onglet
- ✅ Lancent directement une conversation WhatsApp
- ✅ Fonctionnent sur mobile ET desktop
- ✅ Design responsive et élégant

## 🎨 Personnalisation

Les boutons sont stylisés avec :
- Couleur verte officielle WhatsApp
- Icône SVG WhatsApp
- Effet hover animé
- Responsive design

---

**Besoin d'aide ?** Dites-moi simplement votre numéro et je le configure pour vous ! 📱
