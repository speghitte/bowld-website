import { CartItem } from '@/types'

const CART_KEY = 'bowld_cart'

export const cartStorage = {
  getCart: (): CartItem[] => {
    if (typeof window === 'undefined') return []
    try {
      const cart = localStorage.getItem(CART_KEY)
      return cart ? JSON.parse(cart) : []
    } catch {
      return []
    }
  },

  setCart: (cart: CartItem[]) => {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart))
    } catch {
      console.error('Failed to save cart')
    }
  },

  addItem: (productId: string, addons: string[] = []) => {
    const cart = cartStorage.getCart()
    const existingItem = cart.find(
      (item) => item.productId === productId && JSON.stringify(item.addons) === JSON.stringify(addons)
    )

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ productId, quantity: 1, addons })
    }

    cartStorage.setCart(cart)
  },

  updateQuantity: (productId: string, quantity: number, addons: string[] = []) => {
    const cart = cartStorage.getCart()
    const item = cart.find(
      (item) => item.productId === productId && JSON.stringify(item.addons) === JSON.stringify(addons)
    )
    if (item) {
      if (quantity <= 0) {
        cartStorage.removeItem(productId, addons)
      } else {
        item.quantity = quantity
        cartStorage.setCart(cart)
      }
    }
  },

  removeItem: (productId: string, addons: string[] = []) => {
    const cart = cartStorage.getCart()
    const filtered = cart.filter(
      (item) => !(item.productId === productId && JSON.stringify(item.addons) === JSON.stringify(addons))
    )
    cartStorage.setCart(filtered)
  },

  clearCart: () => {
    cartStorage.setCart([])
  },
}
