'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { Product } from '@/config/menu'
import { useCart } from '@/hooks/useCart'

interface ProductCardProps {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(0)
  const { addItem, updateQuantity } = useCart()

  const handleAdd = () => {
    if (quantity === 0) {
      addItem(product.id)
      setQuantity(1)
    } else {
      const newQuantity = quantity + 1
      setQuantity(newQuantity)
      updateQuantity(product.id, newQuantity)
    }
  }

  const handleIncrease = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    updateQuantity(product.id, newQuantity)
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      updateQuantity(product.id, newQuantity)
    } else {
      setQuantity(0)
      updateQuantity(product.id, 0)
    }
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-softer hover:shadow-soft transition-shadow">
      <div className="bg-gradient-to-br from-brand-green-light to-brand-forest h-40 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5" />
        <div className="text-center text-white z-10">
          <p className="text-sm opacity-80">Product Image</p>
          <p className="text-xs opacity-60">{product.name}</p>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-brand-forest mb-2 text-lg">{product.name}</h3>

        <div className="flex gap-4 mb-3 text-sm">
          <div>
            <p className="text-brand-text-light text-xs">PROTEIN</p>
            <p className="font-semibold text-brand-forest">{product.protein}g</p>
          </div>
          <div>
            <p className="text-brand-text-light text-xs">CALORIES</p>
            <p className="font-semibold text-brand-forest">{product.calories} kcal</p>
          </div>
        </div>

        {product.ingredients && (
          <p className="text-xs text-brand-text-light mb-4 leading-relaxed">{product.ingredients}</p>
        )}

        <div className="mb-4 pb-4 border-t border-brand-cream-dark pt-4">
          <p className="text-2xl font-bold text-brand-forest">₹{product.price}</p>
        </div>

        {quantity === 0 ? (
          <button
            onClick={handleAdd}
            className="w-full bg-brand-forest hover:bg-brand-forest-dark text-white font-bold py-2 px-4 rounded-xl transition"
          >
            ADD
          </button>
        ) : (
          <div className="flex items-center justify-between bg-brand-cream rounded-xl p-2">
            <button
              onClick={handleDecrease}
              className="p-1 hover:bg-white rounded transition"
              aria-label="Decrease quantity"
            >
              <Minus className="w-5 h-5 text-brand-forest" />
            </button>
            <span className="font-bold text-brand-forest text-lg">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="p-1 hover:bg-white rounded transition"
              aria-label="Increase quantity"
            >
              <Plus className="w-5 h-5 text-brand-forest" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
