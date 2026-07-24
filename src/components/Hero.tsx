'use client'

import { Leaf } from 'lucide-react'

interface HeroProps {
  onOrderClick?: () => void
  onMenuClick?: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick, onMenuClick }) => {
  return (
    <section className="bg-brand-cream min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8 animate-slideUp">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-forest mb-4 leading-tight">
            PROTEIN-PACKED.
            <br />
            FRESHLY BOWL'D.
          </h1>
          <p className="text-lg text-brand-text-light mb-8">
            Fresh, filling meals designed to make hitting your protein goals delicious.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onOrderClick}
              className="bg-brand-forest hover:bg-brand-forest-dark text-white font-bold py-3 px-8 rounded-xl transition transform hover:scale-105 active:scale-95"
            >
              ORDER NOW
            </button>
            <button
              onClick={onMenuClick}
              className="border-2 border-brand-forest text-brand-forest hover:bg-brand-forest hover:text-white font-bold py-3 px-8 rounded-xl transition"
            >
              VIEW MENU
            </button>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-brand-green to-brand-forest shadow-card animate-fadeIn">
          <div className="aspect-square md:aspect-video flex items-center justify-center text-white">
            <div className="text-center">
              <Leaf className="w-20 h-20 mx-auto mb-4 opacity-80" />
              <p className="text-xl font-semibold mb-2">Fresh Protein Bowls</p>
              <p className="text-sm opacity-80">Replace with your product image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
