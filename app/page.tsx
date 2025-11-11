'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import RealisationsPreview from '@/components/RealisationsPreview'
import ProductsPreview from '@/components/ProductsPreview'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <RealisationsPreview />
      <ProductsPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
