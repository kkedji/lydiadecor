'use client'

import { useState } from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

interface DevisLine {
  id: string
  description: string
  quantity: number
  unitPrice: number
  total: number
}

export default function DevisPage() {
  // États du devis
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [clientAddress, setClientAddress] = useState('')
  const [lines, setLines] = useState<DevisLine[]>([])
  
  // Ligne à ajouter
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(0)

  // Ajouter une ligne
  const addLine = () => {
    if (!description.trim()) return

    const newLine: DevisLine = {
      id: Date.now().toString(),
      description: description,
      quantity: quantity,
      unitPrice: price,
      total: price * quantity
    }

    setLines([...lines, newLine])
    setDescription('')
    setQuantity(1)
    setPrice(0)
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

  // Formater les nombres avec espace comme séparateur de milliers
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  // Générer le PDF
  const generatePDF = () => {
    if (!clientName.trim()) {
      alert('Veuillez renseigner le nom du client')
      return
    }

    const devisNumber = generateDevisNumber()
    const doc = new jsPDF()

    // Logo en haut à gauche
    try {
      const logo = new Image()
      logo.src = '/logos/logo-accueil.png'
      doc.addImage(logo, 'PNG', 15, 10, 30, 30)
    } catch (error) {
      // Si le logo n'est pas disponible, afficher le texte
      doc.setFontSize(24)
      doc.setTextColor(147, 51, 234)
      doc.text('Lydia Décor', 20, 20)
    }
    
    // Informations de l'entreprise
    doc.setFontSize(10)
    doc.setTextColor(100)
    doc.text('Kpogan, Lomé, Togo', 50, 20)
    doc.text('Tél: +228 90 91 36 65', 50, 25)
    doc.text('Email: estuolklyly@gmail.com', 50, 30)

    // Numéro de devis
    doc.setFontSize(16)
    doc.setTextColor(0)
    doc.text(`DEVIS N° ${devisNumber}`, 20, 55)
    
    doc.setFontSize(10)
    doc.text(`Date: ${new Date().toLocaleDateString('fr-FR')}`, 20, 62)

    // Informations client
    doc.setFontSize(12)
    doc.text('Client:', 120, 55)
    doc.setFontSize(10)
    doc.text(clientName, 120, 62)
    if (clientEmail) doc.text(clientEmail, 120, 67)
    if (clientPhone) doc.text(clientPhone, 120, 72)
    if (clientAddress) doc.text(clientAddress, 120, 77)

    // Tableau des lignes
    const tableData = lines.map(line => [
      line.description,
      line.quantity.toString(),
      `${formatPrice(line.unitPrice)} FCFA`,
      `${formatPrice(line.total)} FCFA`
    ])

    autoTable(doc, {
      startY: 90,
      head: [['Description', 'Quantité', 'Prix Unitaire', 'Total']],
      body: tableData,
      foot: [[
        { content: 'TOTAL', colSpan: 3, styles: { halign: 'right', fontStyle: 'bold' } },
        { content: `${formatPrice(calculateTotal())} FCFA`, styles: { fontStyle: 'bold' } }
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

  // Page du générateur de devis
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="font-display text-2xl md:text-4xl font-bold text-gray-900">
            Générateur de Devis
          </h1>
          <p className="text-gray-600 mt-2">Lydia Décor - Création de devis professionnels</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne gauche - Formulaire */}
          <div className="lg:col-span-2 space-y-6">
            {/* Informations client */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg">
              <h2 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Informations Client
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
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

            {/* Ajouter une ligne */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg">
              <h2 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Ajouter une Ligne au Devis
              </h2>
              <div className="space-y-3 md:space-y-4">
                <input
                  type="text"
                  placeholder="Nom du produit / service / prestation"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 transition-colors text-sm md:text-base"
                />
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-full sm:w-24 px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 transition-colors text-sm md:text-base"
                    placeholder="Qté"
                  />
                  <input
                    type="number"
                    min="0"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
                    className="flex-grow px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 transition-colors text-sm md:text-base"
                    placeholder="Prix unitaire (FCFA)"
                  />
                  <button
                    onClick={addLine}
                    className="bg-primary-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-sm md:text-base whitespace-nowrap"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Aperçu du devis */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg lg:sticky lg:top-24">
              <h2 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Aperçu du Devis
              </h2>

              {lines.length === 0 ? (
                <p className="text-gray-500 text-center py-6 md:py-8 text-sm md:text-base">
                  Aucune ligne ajoutée
                </p>
              ) : (
                <>
                  <div className="space-y-2 mb-4 md:mb-6 max-h-64 md:max-h-96 overflow-y-auto">
                    {lines.map(line => (
                      <div
                        key={line.id}
                        className="flex items-start justify-between p-2 md:p-3 bg-gray-50 rounded-lg gap-2"
                      >
                        <div className="flex-grow min-w-0">
                          <p className="font-semibold text-xs md:text-sm text-gray-900 truncate">
                            {line.description}
                          </p>
                          <p className="text-xs text-gray-600">
                            {line.quantity} × {line.unitPrice.toLocaleString('fr-FR')} FCFA
                          </p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <p className="font-semibold text-primary-600 text-xs md:text-sm">
                            {line.total.toLocaleString('fr-FR')} FCFA
                          </p>
                          <button
                            onClick={() => removeLine(line.id)}
                            className="text-red-600 hover:text-red-700 p-1"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4 md:mb-6">
                      <span className="font-display text-lg md:text-xl font-bold">TOTAL</span>
                      <span className="font-display text-xl md:text-2xl font-bold text-primary-600">
                        {calculateTotal().toLocaleString('fr-FR')} FCFA
                      </span>
                    </div>

                    <button
                      onClick={generatePDF}
                      className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 md:px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-200 text-sm md:text-base"
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
