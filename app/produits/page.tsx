'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProduitsPage() {
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Liste des images dans le dossier produits
    // Ajoutez simplement vos images ici avec leur nom de fichier
    const imageFiles = [
      'armoire-lit.jpg',
      'commode-bois.jpg',
      'cuisine-moderne.jpg',
      'etagère-rangement.jpg',
      'fauteil-tulip-cuir.jpg',
      'fauteuil-terrasse.jpg',
      'fauteuil-tulip.jpg',
      'lit.jpg',
      'lit-bois-design.jpg',
      'lit-deux-places-simple-bois.jpg',
      'lit-en-bois.jpg',
      'lit-en-bois1.jpg',
      'lit-en-boisjpg.jpg',
      'lit-moderne.jpg',
      'lit-style-moderne.jpg',
      'master-bed.jpg',
      'meuble tele.jpg',
      'meuble-cuisine.jpg',
      'meuble-deco.jpg',
      'terrasse.jpg',
      'table-4chaises.jpg',
      'salon-complet.jpg',
      'salle-a-manger.jpg',
      'meuble-interieur.jpg',
      'meuble-exterieur.jpg',
      'meuble-terrasse.jpg',
      'rideaux.jpg',
      'miroir-debout.jpg',
      'miroir-mural.jpg',
      'miroir-mur.jpg',
      'miroir-design.jpg',
      'miroir-design 2.jpg',
      'produit.jpg',
      'produit2.jpg',
      'produit1.jpg',
      'produit3.jpg',
      'produit4.jpg',
      'produit5.jpg',
      'produit6.jpg',
      'produit7.jpg',
      'produit8.jpg',
      'produit9.jpg',
      'produit10.jpg',
      'produit11.jpg',
    ]
    
    setImages(imageFiles.map(img => `/content/produits/${img}`))
    setLoading(false)
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
          >
            Nos Articles
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Voici une sélection de nos articles disponibles sur commande
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">Chargement...</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white aspect-square"
                >
                  <Image
                    src={image}
                    alt={`Article ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </motion.div>
              ))}
            </div>
          )}

          {images.length === 0 && !loading && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                Aucun article disponible pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
              Vous souhaitez commander ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contactez-nous pour obtenir plus d'informations sur nos articles, 
              connaître les disponibilités et recevoir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/22890913665"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="/contact"
                className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
              >
                Formulaire de contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
