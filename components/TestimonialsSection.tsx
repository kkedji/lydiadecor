'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sophie Martin',
    text: 'Lydia Décor a transformé notre salon en un espace élégant et chaleureux. Le résultat dépasse nos attentes !',
    rating: 5,
    project: 'Rénovation salon'
  },
  {
    name: 'Jean Dupont',
    text: 'Un service professionnel et des conseils précieux. Notre maison est maintenant un véritable havre de paix.',
    rating: 5,
    project: 'Décoration complète'
  },
  {
    name: 'Marie Lambert',
    text: 'L\'équipe a su comprendre mes envies et créer un intérieur qui me ressemble. Je recommande vivement !',
    rating: 5,
    project: 'Chambre à coucher'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre plus belle récompense
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.project}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
