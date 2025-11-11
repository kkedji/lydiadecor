'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <Image
                src="/logos/logo-accueil.png"
                alt="Lydia Décor"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Créez l'intérieur de vos <span className="text-primary-600">rêves</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez nos réalisations uniques et notre collection exclusive d'articles de décoration pour sublimer votre espace
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/realisations"
                className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Voir nos réalisations
              </Link>
              <Link
                href="/produits"
                className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-50 transition-all duration-200"
              >
                Découvrir les produits
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div>
              <div className="text-4xl font-bold text-primary-600">25+</div>
              <div className="text-gray-600 mt-2">Projets réalisés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">98%</div>
              <div className="text-gray-600 mt-2">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">5+</div>
              <div className="text-gray-600 mt-2">Années d'expérience</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
