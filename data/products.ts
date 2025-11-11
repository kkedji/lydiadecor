export interface Product {
  id: string
  name: string
  category: string
  price: number
  description: string
  image: string
  images?: string[]
  isNew?: boolean
  inStock?: boolean
  dimensions?: string
  materials?: string
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Canapé Milano',
    category: 'Salon',
    price: 850000,
    description: 'Canapé 3 places en velours avec pieds en bois de chêne. Design contemporain et confort optimal.',
    image: '/content/produits/canape-milano.jpg',
    isNew: true,
    inStock: true,
    dimensions: 'L 220 x P 95 x H 85 cm',
    materials: 'Velours, Bois de chêne'
  },
  {
    id: '2',
    name: 'Table Basse Marbre',
    category: 'Salon',
    price: 260000,
    description: 'Table basse ronde avec plateau en marbre blanc et piètement doré.',
    image: '/content/produits/table-marbre.jpg',
    isNew: true,
    inStock: true,
    dimensions: 'Ø 80 x H 45 cm',
    materials: 'Marbre, Métal doré'
  },
  {
    id: '3',
    name: 'Fauteuil Velours Émeraude',
    category: 'Salon',
    price: 360000,
    description: 'Fauteuil d\'appoint en velours vert émeraude, parfait pour ajouter une touche de couleur.',
    image: '/content/produits/fauteuil-emeraude.jpg',
    isNew: false,
    inStock: true,
    dimensions: 'L 75 x P 80 x H 85 cm',
    materials: 'Velours, Bois'
  },
  {
    id: '4',
    name: 'Suspension Design Cuivre',
    category: 'Luminaire',
    price: 125000,
    description: 'Suspension en cuivre brossé pour un éclairage chaleureux et élégant.',
    image: '/content/produits/suspension-cuivre.jpg',
    isNew: true,
    inStock: true,
    dimensions: 'Ø 35 x H 40 cm',
    materials: 'Cuivre, Verre'
  },
  {
    id: '5',
    name: 'Miroir Arche Doré',
    category: 'Décoration',
    price: 98000,
    description: 'Grand miroir en forme d\'arche avec cadre doré, idéal pour agrandir l\'espace.',
    image: '/content/produits/miroir-arche.jpg',
    isNew: false,
    inStock: true,
    dimensions: 'L 80 x H 120 cm',
    materials: 'Métal doré, Verre'
  },
  {
    id: '6',
    name: 'Coussin Bohème',
    category: 'Textile',
    price: 25000,
    description: 'Coussin décoratif aux motifs géométriques, housse en coton.',
    image: '/content/produits/coussin-boheme.jpg',
    isNew: false,
    inStock: true,
    dimensions: '45 x 45 cm',
    materials: 'Coton'
  },
  {
    id: '7',
    name: 'Tapis Berbère',
    category: 'Textile',
    price: 195000,
    description: 'Tapis berbère authentique en laine, motifs traditionnels.',
    image: '/content/produits/tapis-berbere.jpg',
    isNew: false,
    inStock: true,
    dimensions: '160 x 230 cm',
    materials: 'Laine'
  },
  {
    id: '8',
    name: 'Vase Céramique Terracotta',
    category: 'Décoration',
    price: 45000,
    description: 'Vase en céramique artisanale, finition terracotta mate.',
    image: '/content/produits/vase-terracotta.jpg',
    isNew: true,
    inStock: true,
    dimensions: 'Ø 20 x H 30 cm',
    materials: 'Céramique'
  }
]
