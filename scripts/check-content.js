// Script pour générer des images placeholder
// Vous pouvez utiliser ce script ou simplement remplacer les images par les vôtres

import { readdir } from 'fs/promises'
import path from 'path'

const contentDir = path.join(process.cwd(), 'public', 'content')

async function checkContent() {
  try {
    const realisationsDir = path.join(contentDir, 'realisations')
    const produitsDir = path.join(contentDir, 'produits')
    
    console.log('📁 Vérification du contenu...\n')
    
    // Check réalisations
    const realisations = await readdir(realisationsDir)
    console.log(`✅ Réalisations: ${realisations.filter(f => f !== '.gitkeep').length} fichiers`)
    
    // Check produits
    const produits = await readdir(produitsDir)
    console.log(`✅ Produits: ${produits.filter(f => f !== '.gitkeep').length} fichiers`)
    
    if (realisations.length <= 1 || produits.length <= 1) {
      console.log('\n⚠️  Ajoutez vos images dans les dossiers suivants:')
      console.log('   - public/content/realisations/')
      console.log('   - public/content/produits/')
      console.log('\n💡 En attendant, des placeholders sont utilisés.')
    }
  } catch (error) {
    console.error('Erreur lors de la vérification:', error)
  }
}

checkContent()
