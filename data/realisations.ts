export interface Realisation {
  id: string
  title: string
  category: string
  description: string
  image: string
  images?: string[]
  date: string
  client?: string
  details?: string
}

export const realisations: Realisation[] = [
  {
    id: '1',
    title: 'Salon Moderne Minimaliste',
    category: 'Salon',
    description: 'Transformation complète d\'un salon avec un design épuré et contemporain, privilégiant les lignes pures et les matériaux naturels.',
    image: '/content/realisations/salon-moderne-1.jpg',
    images: [
      '/content/realisations/salon-moderne-1.jpg',
      '/content/realisations/salon-moderne-2.jpg'
    ],
    date: '2024-10',
    details: 'Palette de couleurs neutres, mobilier design scandinave, éclairage indirect pour une ambiance chaleureuse.'
  },
  {
    id: '2',
    title: 'Chambre Bohème Chic',
    category: 'Chambre',
    description: 'Création d\'un espace cocooning aux inspirations bohèmes avec textiles naturels et végétation.',
    image: '/content/realisations/chambre-boheme-1.jpg',
    images: [
      '/content/realisations/chambre-boheme-1.jpg',
      '/content/realisations/chambre-boheme-2.jpg'
    ],
    date: '2024-09',
    details: 'Tons chauds, macramé mural, plantes d\'intérieur, literie en lin naturel.'
  },
  {
    id: '3',
    title: 'Cuisine Contemporaine',
    category: 'Cuisine',
    description: 'Aménagement d\'une cuisine ouverte alliant fonctionnalité et esthétique moderne.',
    image: '/content/realisations/cuisine-moderne-1.jpg',
    images: [
      '/content/realisations/cuisine-moderne-1.jpg',
      '/content/realisations/cuisine-moderne-2.jpg'
    ],
    date: '2024-08',
    details: 'Îlot central, façades laquées, plan de travail en quartz, électroménager encastré.'
  },
  {
    id: '4',
    title: 'Bureau à Domicile Élégant',
    category: 'Bureau',
    description: 'Espace de travail inspirant combinant productivité et confort.',
    image: '/content/realisations/bureau-elegant-1.jpg',
    date: '2024-07',
    details: 'Mobilier ergonomique, rangements sur-mesure, éclairage naturel optimisé.'
  },
  {
    id: '5',
    title: 'Salle de Bain Spa',
    category: 'Salle de bain',
    description: 'Transformation en véritable espace bien-être aux inspirations zen.',
    image: '/content/realisations/sdb-spa-1.jpg',
    date: '2024-06',
    details: 'Douche à l\'italienne, baignoire îlot, vasque en pierre naturelle, ambiance spa.'
  },
  {
    id: '6',
    title: 'Chambre d\'Enfant Ludique',
    category: 'Chambre',
    description: 'Espace coloré et fonctionnel favorisant créativité et repos.',
    image: '/content/realisations/chambre-enfant-1.jpg',
    date: '2024-05',
    details: 'Rangements optimisés, coin lecture, couleurs douces stimulantes, mobilier évolutif.'
  }
]
