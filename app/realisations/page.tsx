'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { realisations } from '@/data/realisations'

export default function RealisationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  
  const categories = ['Tous', ...Array.from(new Set(realisations.map(r => r.category)))]
  
  const filteredRealisations = selectedCategory === 'Tous'
    ? realisations
    : realisations.filter(r => r.category === selectedCategory)

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
            Découvrez nos projets de décoration d'intérieur et laissez-vous inspirer
            pour votre prochain projet
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRealisations.map((realisation, index) => (
              <motion.div
                key={realisation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={realisation.image}
                    alt={realisation.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                      {realisation.category}
                    </span>
                    <span className="text-sm text-gray-500">{realisation.date}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
                    {realisation.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{realisation.description}</p>
                  {realisation.details && (
                    <p className="text-sm text-gray-500 italic">{realisation.details}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredRealisations.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                Aucune réalisation trouvée dans cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            Envie d'un projet similaire ?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Demander un devis gratuit
          </a>
        </div>
      </section>
    </div>
  )
}
