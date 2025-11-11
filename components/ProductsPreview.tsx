'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { products } from '@/data/products'

export default function ProductsPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nos Produits
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Une sélection exclusive d'articles de décoration
          </p>
          <Link
            href="/produits"
            className="inline-block bg-accent-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Découvrir tous nos produits
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
