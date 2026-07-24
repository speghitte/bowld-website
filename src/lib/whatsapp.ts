import { OrderData } from '@/types'
import { WHATSAPP_NUMBER } from '@/config/menu'

export const generateWhatsAppMessage = (order: OrderData): string => {
  const { items, total, checkout } = order
  const { name, phone, location, address, notes } = checkout

  let message = `Hi Bowl'd! 🥗\n\nI'd like to place an order.\n\nName: ${name}\nPhone: ${phone}\nLocation: ${location}`

  if (address) {
    message += `\nAddress: ${address}`
  }

  message += `\n\nORDER:\n\n`

  items.forEach((item) => {
    const itemTotal = item.price * item.quantity
    message += `${item.quantity} × ${item.name}\n₹${itemTotal}\n`

    if (item.addons && item.addons.length > 0) {
      message += `Add-ons:\n`
      item.addons.forEach((addon) => {
        message += `  • ${addon.name} (₹${addon.price})\n`
      })
    }
  })

  message += `\nTOTAL: ₹${total}`

  if (notes) {
    message += `\n\nNotes:\n${notes}`
  }

  message += `\n\nPlease confirm my order.`

  return message
}

export const openWhatsApp = (message: string): void => {
  const encodedMessage = encodeURIComponent(message)
  const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
  window.open(url, '_blank')
}
