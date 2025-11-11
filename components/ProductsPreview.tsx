'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { products } from '@/data/products'

export default function ProductsPreview() {
  const featured = products.slice(0, 4)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nos Produits
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une sélection exclusive d'articles de décoration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 mb-4">
                <div className="aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Nouveau
                  </div>
                )}
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-primary-600 font-semibold text-lg">{product.price} €</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/produits"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
          >
            Découvrir tous nos produits
          </Link>
        </div>
      </div>
    </section>
  )
}
