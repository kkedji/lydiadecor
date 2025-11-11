'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Prêt à transformer votre intérieur ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Demander un devis
            </Link>
            <Link
              href="/realisations"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Voir nos réalisations
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
