'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { realisations } from '@/data/realisations'

export default function RealisationsPreview() {
  const featured = realisations.slice(0, 3)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets les plus récents
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featured.map((realisation, index) => (
            <motion.div
              key={realisation.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={realisation.image}
                  alt={realisation.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-2xl font-bold mb-2">{realisation.title}</h3>
                <p className="text-sm opacity-90 mb-3">{realisation.category}</p>
                <p className="text-sm">{realisation.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/realisations"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
          >
            Voir toutes nos réalisations
          </Link>
        </div>
      </div>
    </section>
  )
}
