'use client'

import { motion } from 'framer-motion'

const services = [
  {
    icon: '✨',
    title: 'Décoration Personnalisée',
    description: 'Un design sur-mesure qui reflète votre personnalité et répond à vos besoins spécifiques.'
  },
  {
    icon: '🏠',
    title: 'Aménagement d\'Intérieur',
    description: 'Optimisation de l\'espace et agencement harmonieux pour un intérieur fonctionnel.'
  },
  {
    icon: '🎨',
    title: 'Conseil en Décoration',
    description: 'Expertise professionnelle pour vous guider dans vos choix de couleurs, matériaux et styles.'
  },
  {
    icon: '🛋️',
    title: 'Sélection de Mobilier',
    description: 'Une collection exclusive d\'articles de décoration et de mobilier de qualité.'
  }
]

export default function ServicesSection() {
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
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un accompagnement complet pour transformer votre vision en réalité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
