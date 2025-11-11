'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { products } from '@/data/products'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const PASSWORD = '1234' // Mot de passe à 4 chiffres - CHANGEZ-LE !

interface DevisLine {
  id: string
  type: 'product' | 'custom'
  description: string
  quantity: number
  unitPrice: number
  total: number
}

export default function DevisPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  // États du devis
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [clientAddress, setClientAddress] = useState('')
  const [lines, setLines] = useState<DevisLine[]>([])
  const [selectedProductId, setSelectedProductId] = useState('')
  const [productQuantity, setProductQuantity] = useState(1)
  
  // Ligne personnalisée
  const [customDescription, setCustomDescription] = useState('')
  const [customQuantity, setCustomQuantity] = useState(1)
  const [customPrice, setCustomPrice] = useState(0)

  // Vérifier l'authentification au chargement
  useEffect(() => {
    const auth = localStorage.getItem('devis_auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem('devis_auth', 'true')
      setError('')
    } else {
      setError('Code incorrect')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('devis_auth')
    setPassword('')
  }

  // Ajouter un produit
  const addProduct = () => {
    if (!selectedProductId) return
    
    const product = products.find(p => p.id === selectedProductId)
    if (!product) return

    const newLine: DevisLine = {
      id: Date.now().toString(),
      type: 'product',
      description: product.name,
      quantity: productQuantity,
      unitPrice: product.price,
      total: product.price * productQuantity
    }

    setLines([...lines, newLine])
    setSelectedProductId('')
    setProductQuantity(1)
  }

  // Ajouter une ligne personnalisée
  const addCustomLine = () => {
    if (!customDescription.trim()) return

    const newLine: DevisLine = {
      id: Date.now().toString(),
      type: 'custom',
      description: customDescription,
      quantity: customQuantity,
      unitPrice: customPrice,
      total: customPrice * customQuantity
    }

    setLines([...lines, newLine])
    setCustomDescription('')
    setCustomQuantity(1)
    setCustomPrice(0)
  }

  // Supprimer une ligne
  const removeLine = (id: string) => {
    setLines(lines.filter(line => line.id !== id))
  }

  // Calculer le total
  const calculateTotal = () => {
    return lines.reduce((sum, line) => sum + line.total, 0)
  }

  // Générer le numéro de devis LDC MMAA-NNNN
  const generateDevisNumber = () => {
    const now = new Date()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const year = String(now.getFullYear()).slice(-2)
    
    // Récupérer le dernier numéro du localStorage
    const key = `devis_counter_${month}${year}`
    const lastNumber = parseInt(localStorage.getItem(key) || '0')
    const newNumber = lastNumber + 1
    
    // Sauvegarder le nouveau numéro
    localStorage.setItem(key, newNumber.toString())
    
    return `LDC ${month}${year}-${String(newNumber).padStart(4, '0')}`
  }

  // Générer le PDF
  const generatePDF = () => {
    if (!clientName.trim()) {
      alert('Veuillez renseigner le nom du client')
      return
    }

    const devisNumber = generateDevisNumber()
    const doc = new jsPDF()

    // En-tête
    doc.setFontSize(24)
    doc.setTextColor(147, 51, 234) // Couleur primary
    doc.text('Lydia Décor', 20, 20)
    
    doc.setFontSize(10)
    doc.setTextColor(100)
    doc.text('Kpogan, Lomé, Togo', 20, 27)
    doc.text('Tél: +228 90 12 14 58', 20, 32)
    doc.text('Email: lydiaestuolk@gmail.com', 20, 37)

    // Numéro de devis
    doc.setFontSize(16)
    doc.setTextColor(0)
    doc.text(`DEVIS N° ${devisNumber}`, 20, 50)
    
    doc.setFontSize(10)
    doc.text(`Date: ${new Date().toLocaleDateString('fr-FR')}`, 20, 57)

    // Informations client
    doc.setFontSize(12)
    doc.text('Client:', 120, 50)
    doc.setFontSize(10)
    doc.text(clientName, 120, 57)
    if (clientEmail) doc.text(clientEmail, 120, 62)
    if (clientPhone) doc.text(clientPhone, 120, 67)
    if (clientAddress) doc.text(clientAddress, 120, 72)

    // Tableau des lignes
    const tableData = lines.map(line => [
      line.description,
      line.quantity.toString(),
      `${line.unitPrice.toLocaleString('fr-FR')} FCFA`,
      `${line.total.toLocaleString('fr-FR')} FCFA`
    ])

    autoTable(doc, {
      startY: 85,
      head: [['Description', 'Quantité', 'Prix Unitaire', 'Total']],
      body: tableData,
      foot: [[
        { content: 'TOTAL', colSpan: 3, styles: { halign: 'right', fontStyle: 'bold' } },
        { content: `${calculateTotal().toLocaleString('fr-FR')} FCFA`, styles: { fontStyle: 'bold' } }
      ]],
      theme: 'striped',
      headStyles: { fillColor: [147, 51, 234] },
      footStyles: { fillColor: [240, 240, 240], textColor: [0, 0, 0] }
    })

    // Conditions
    const finalY = (doc as any).lastAutoTable.finalY || 85
    doc.setFontSize(9)
    doc.setTextColor(100)
    doc.text('Conditions de paiement: À définir', 20, finalY + 15)
    doc.text('Devis valable 30 jours', 20, finalY + 20)

    // Sauvegarder
    doc.save(`${devisNumber.replace(/\s/g, '_')}_${clientName.replace(/\s/g, '_')}.pdf`)
  }

  // Page de connexion
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full"
        >
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-bold text-gray-900 mb-2">
              Générateur de Devis
            </h1>
            <p className="text-gray-600">Accès réservé - Lydia Décor</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Code d'accès (4 chiffres)
              </label>
              <input
                type="password"
                maxLength={4}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError('')
                }}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 transition-colors text-center text-2xl tracking-widest"
                placeholder="****"
                autoFocus
              />
              {error && (
                <p className="text-red-600 text-sm mt-2">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-200"
            >
              Accéder
            </button>
          </form>
        </motion.div>
      </div>
    )
  }

  // Page du générateur de devis
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-display text-4xl font-bold text-gray-900">
            Générateur de Devis
          </h1>
          <button
            onClick={handleLogout}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Déconnexion
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne gauche - Formulaire */}
          <div className="lg:col-span-2 space-y-6">
            {/* Informations client */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Informations Client
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nom du client *"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Adresse"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 transition-colors"
                />
              </div>
            </div>

            {/* Ajouter un produit */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Ajouter un Produit
              </h2>
              <div className="flex gap-4">
                <select
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                  className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 transition-colors"
                >
                  <option value="">Sélectionner un produit...</option>
                  {products.map(product => (
                    <option key={product.id} value={product.id}>
                      {product.name} - {product.price.toLocaleString('fr-FR')} FCFA
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  min="1"
                  value={productQuantity}
                  onChange={(e) => setProductQuantity(parseInt(e.target.value) || 1)}
                  className="w-20 px-4 py-2 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 transition-colors"
                  placeholder="Qté"
                />
                <button
                  onClick={addProduct}
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                >
                  Ajouter
                </button>
              </div>
            </div>

            {/* Ajouter une ligne personnalisée */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Ligne Personnalisée
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Description (ex: Prestation pose, Fourniture spéciale...)"
                  value={customDescription}
                  onChange={(e) => setCustomDescription(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 transition-colors"
                />
                <div className="flex gap-4">
                  <input
                    type="number"
                    min="1"
                    value={customQuantity}
                    onChange={(e) => setCustomQuantity(parseInt(e.target.value) || 1)}
                    className="w-24 px-4 py-2 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 transition-colors"
                    placeholder="Qté"
                  />
                  <input
                    type="number"
                    min="0"
                    value={customPrice}
                    onChange={(e) => setCustomPrice(parseFloat(e.target.value) || 0)}
                    className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 transition-colors"
                    placeholder="Prix unitaire (FCFA)"
                  />
                  <button
                    onClick={addCustomLine}
                    className="bg-accent-600 text-white px-6 py-2 rounded-lg hover:bg-accent-700 transition-colors font-semibold"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Aperçu du devis */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Aperçu du Devis
              </h2>

              {lines.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  Aucune ligne ajoutée
                </p>
              ) : (
                <>
                  <div className="space-y-2 mb-6 max-h-96 overflow-y-auto">
                    {lines.map(line => (
                      <div
                        key={line.id}
                        className="flex items-start justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex-grow">
                          <p className="font-semibold text-sm text-gray-900">
                            {line.description}
                          </p>
                          <p className="text-xs text-gray-600">
                            {line.quantity} × {line.unitPrice.toLocaleString('fr-FR')} FCFA
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-primary-600">
                            {line.total.toLocaleString('fr-FR')} FCFA
                          </p>
                          <button
                            onClick={() => removeLine(line.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-display text-xl font-bold">TOTAL</span>
                      <span className="font-display text-2xl font-bold text-primary-600">
                        {calculateTotal().toLocaleString('fr-FR')} FCFA
                      </span>
                    </div>

                    <button
                      onClick={generatePDF}
                      className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-200"
                    >
                      📄 Générer le PDF
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
