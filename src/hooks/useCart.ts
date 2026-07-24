'use client'

import { useState, useEffect } from 'react'
import { CartItem } from '@/types'
import { cartStorage } from '@/lib/cart'

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setItems(cartStorage.getCart())
    setMounted(true)
  }, [])

  const addItem = (productId: string, addons: string[] = []) => {
    cartStorage.addItem(productId, addons)
    setItems(cartStorage.getCart())
  }

  const updateQuantity = (productId: string, quantity: number, addons: string[] = []) => {
    cartStorage.updateQuantity(productId, quantity, addons)
    setItems(cartStorage.getCart())
  }

  const removeItem = (productId: string, addons: string[] = []) => {
    cartStorage.removeItem(productId, addons)
    setItems(cartStorage.getCart())
  }

  const clearCart = () => {
    cartStorage.clearCart()
    setItems([])
  }

  const getTotalItems = () => items.reduce((sum, item) => sum + item.quantity, 0)

  return {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    getTotalItems,
    mounted,
  }
}
