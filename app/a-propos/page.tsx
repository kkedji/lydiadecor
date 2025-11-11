'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AProposPage() {
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
            À propos de Lydia Décor
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Votre partenaire de confiance pour créer des intérieurs qui vous ressemblent
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Lydia Décor est née d'une passion pour la décoration d'intérieur et
                  l'envie de transformer des espaces en véritables havres de paix.
                </p>
                <p>
                  Avec plus de 15 ans d'expérience, notre équipe met son expertise au
                  service de vos projets, qu'il s'agisse d'une simple rénovation ou
                  d'un aménagement complet.
                </p>
                <p>
                  Nous croyons que chaque espace est unique et mérite une attention
                  particulière. C'est pourquoi nous adoptons une approche personnalisée
                  pour chaque projet, en écoutant vos besoins et en respectant votre budget.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/team/lydia.jpg"
                alt="Lydia - Fondatrice de Lydia Décor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-display text-2xl font-bold mb-1">Lydia</h3>
                <p className="text-lg">Fondatrice & Décoratrice</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ce qui guide notre travail au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Créativité',
                description: 'Des designs uniques et personnalisés pour chaque client'
              },
              {
                icon: '⭐',
                title: 'Excellence',
                description: 'Un engagement qualité à chaque étape du projet'
              },
              {
                icon: '🤝',
                title: 'Écoute',
                description: 'Une attention particulière à vos besoins et envies'
              },
              {
                icon: '♻️',
                title: 'Durabilité',
                description: 'Des choix responsables et des matériaux durables'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Processus - Colonne gauche */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
                  Notre Processus
                </h2>
                <p className="text-xl text-gray-600">
                  Comment nous travaillons avec vous
                </p>
              </motion.div>

              <div className="space-y-8">
                {[
                  {
                    step: '01',
                    title: 'Consultation Initiale',
                    description: 'Rencontre pour comprendre vos besoins, votre style et votre budget'
                  },
                  {
                    step: '02',
                    title: 'Conception & Proposition',
                    description: 'Création de plans, moodboards et sélection de produits adaptés'
                  },
                  {
                    step: '03',
                    title: 'Validation & Ajustements',
                    description: 'Révisions et affinements jusqu\'à votre entière satisfaction'
                  },
                  {
                    step: '04',
                    title: 'Réalisation',
                    description: 'Mise en œuvre du projet avec suivi et coordination'
                  },
                  {
                    step: '05',
                    title: 'Livraison Finale',
                    description: 'Installation finale et présentation de votre nouvel espace'
                  }
                ].map((process, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {process.step}
                      </div>
                    </div>
                    <div className="flex-grow pt-2">
                      <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                        {process.title}
                      </h3>
                      <p className="text-gray-600 text-lg">{process.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Logo - Colonne droite */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src="/logos/logo-apropos.png"
                  alt="Lydia Décor Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            Prêt à commencer votre projet ?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contactez-nous pour une consultation gratuite
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </div>
  )
}
