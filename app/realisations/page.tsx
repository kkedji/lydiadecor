'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function RealisationsPage() {
  const [media, setMedia] = useState<Array<{path: string, type: 'image' | 'video'}>>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Liste des images et vidéos
    // Images : déposez-les dans public/content/realisations/
    // Vidéos : déposez-les dans public/content/realisations/videos/
    const mediaFiles = [
      // Images (dans public/content/realisations/)
      { file: 'realisation1.jpg', type: 'image' as const },
      { file: 'realisation2.jpg', type: 'image' as const },
      { file: 'realisation3.jpg', type: 'image' as const },
      { file: 'realisation4.jpg', type: 'image' as const },
      { file: 'vid-realisation1.mp4', type: 'video' as const },
      { file: 'realisation2.mp4', type: 'video' as const },
      
      // Vidéos (dans public/content/realisations/videos/)
      // { file: 'mon-projet.mp4', type: 'video' as const },
      // { file: 'renovation-complete.mp4', type: 'video' as const },
    ]
    
    setMedia(mediaFiles.map(item => ({
      path: item.type === 'video' 
        ? `/content/realisations/videos/${item.file}`
        : `/content/realisations/${item.file}`,
      type: item.type
    })))
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
            Nos Réalisations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Découvrez nos projets de décoration et laissez-vous inspirer
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
              {media.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white aspect-square"
                >
                  {item.type === 'video' ? (
                    <video
                      src={item.path}
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                    />
                  ) : (
                    <Image
                      src={item.path}
                      alt={`Réalisation ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  )}
                  {item.type === 'video' && (
                    <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Vidéo
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {media.length === 0 && !loading && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                Aucune réalisation disponible pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
              Un projet en tête ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
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
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
