'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { useCart } from '@/hooks/useCart'

interface HeaderProps {
  onCartClick?: () => void
  onMenuClick?: (section: string) => void
}

export const Header: React.FC<HeaderProps> = ({ onCartClick, onMenuClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { getTotalItems, mounted } = useCart()
  const cartCount = mounted ? getTotalItems() : 0

  const navItems = [
    { label: 'Menu', id: 'menu' },
    { label: 'Smoothies', id: 'smoothies' },
    { label: 'Subscriptions', id: 'subscriptions' },
    { label: 'About', id: 'about' },
  ]

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false)
    onMenuClick?.(id)
  }

  return (
    <header className="sticky top-0 z-40 bg-brand-cream border-b border-brand-cream-dark">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <div className="text-2xl font-bold text-brand-forest">BOWL'D</div>
          <div className="text-xs text-brand-text-light font-medium">Fuel Your Strength</div>
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium text-brand-text-dark hover:text-brand-forest transition"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={onCartClick}
            className="relative p-2 hover:bg-brand-cream-dark rounded-lg transition"
            aria-label="Shopping cart"
          >
            <ShoppingBag className="w-6 h-6 text-brand-forest" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-brand-forest text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="md:hidden p-2 hover:bg-brand-cream-dark rounded-lg transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-brand-cream-dark px-4 py-4 border-t border-brand-cream-dark">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left px-4 py-2 text-sm font-medium text-brand-text-dark hover:text-brand-forest transition rounded hover:bg-white"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
