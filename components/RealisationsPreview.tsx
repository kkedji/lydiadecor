'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { realisations } from '@/data/realisations'

export default function RealisationsPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez nos projets de décoration d'intérieur
          </p>
          <Link
            href="/realisations"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Voir toutes nos réalisations
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
