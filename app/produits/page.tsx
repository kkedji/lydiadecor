'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { products } from '@/data/products'

export default function ProduitsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  
  const categories = ['Tous', ...Array.from(new Set(products.map(p => p.category)))]
  
  const filteredProducts = selectedCategory === 'Tous'
    ? products
    : products.filter(p => p.category === selectedCategory)

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
            Nos Produits
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Une sélection exclusive d'articles de décoration choisis avec soin pour
            sublimer votre intérieur
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

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.isNew && (
                    <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Nouveau
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold">
                        Rupture de stock
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary-600 font-semibold mb-2 uppercase tracking-wide">
                    {product.category}
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  {product.dimensions && (
                    <p className="text-xs text-gray-500 mb-2">
                      Dimensions: {product.dimensions}
                    </p>
                  )}
                  {product.materials && (
                    <p className="text-xs text-gray-500 mb-4">
                      Matériaux: {product.materials}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">
                      {product.price} €
                    </span>
                    <button className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-700 transition-colors duration-200">
                      Contact
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                Aucun produit trouvé dans cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="font-display text-xl font-bold mb-2">Livraison Gratuite</h3>
              <p className="text-gray-600">Sur toutes les commandes de plus de 500€</p>
            </div>
            <div>
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-display text-xl font-bold mb-2">Qualité Premium</h3>
              <p className="text-gray-600">Produits sélectionnés avec soin</p>
            </div>
            <div>
              <div className="text-5xl mb-4">💬</div>
              <h3 className="font-display text-xl font-bold mb-2">Conseil Personnalisé</h3>
              <p className="text-gray-600">Notre équipe est là pour vous guider</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
