export interface CartItem {
  productId: string
  quantity: number
  addons: string[]
}

export interface CheckoutFormData {
  name: string
  phone: string
  location: string
  address?: string
  notes?: string
}

export interface OrderData {
  items: Array<{
    productId: string
    name: string
    price: number
    quantity: number
    addons: Array<{ id: string; name: string; price: number }>
  }>
  subtotal: number
  total: number
  checkout: CheckoutFormData
}
