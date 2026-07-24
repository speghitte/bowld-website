export const WHATSAPP_NUMBER = '+91 9098253621'

export const GYM_PARTNERS = [
  {
    id: 'muscle-factory',
    name: 'Muscle Factory',
    value: 'Muscle Factory',
  },
  {
    id: 'fit-fine',
    name: 'Fit and Fine',
    value: 'Fit and Fine',
  },
]

export interface Product {
  id: string
  name: string
  category: 'bowls' | 'smoothies'
  price: number
  protein: number
  calories: number
  image: string
  ingredients?: string
  description?: string
}

export interface Addon {
  id: string
  name: string
  price: number
}

export interface SubscriptionPlan {
  id: string
  name: string
  price: number
  bowls: number
  period: string
  features: string[]
  highlighted?: boolean
}

export const BOWLS: Product[] = [
  {
    id: 'greek-goddess',
    name: 'Greek Goddess',
    category: 'bowls',
    price: 169,
    protein: 20,
    calories: 420,
    image: '/images/bowls/greek-goddess.jpg',
    ingredients: 'Paneer, cucumber, tomato, lettuce, olives, Greek-style dressing.',
  },
  {
    id: 'chatpata-chickpea',
    name: 'Chatpata Chickpea',
    category: 'bowls',
    price: 149,
    protein: 18,
    calories: 390,
    image: '/images/bowls/chatpata-chickpea.jpg',
    ingredients: 'Chickpeas, cucumber, tomato, onion, coriander, lemon and Indian spices.',
  },
  {
    id: 'mexican-fiesta',
    name: 'Mexican Fiesta',
    category: 'bowls',
    price: 189,
    protein: 22,
    calories: 450,
    image: '/images/bowls/mexican-fiesta.jpg',
    ingredients: 'Rajma, corn, paneer, lettuce, tomato and Mexican-style dressing.',
  },
  {
    id: 'paneer-tikka-power',
    name: 'Paneer Tikka Power',
    category: 'bowls',
    price: 199,
    protein: 28,
    calories: 480,
    image: '/images/bowls/paneer-tikka-power.jpg',
    ingredients: 'Tikka paneer, vegetables, lettuce and house dressing.',
  },
  {
    id: 'corn-paneer',
    name: 'Corn & Paneer',
    category: 'bowls',
    price: 179,
    protein: 24,
    calories: 440,
    image: '/images/bowls/corn-paneer.jpg',
    ingredients: 'Paneer, sweet corn, cucumber, tomato and fresh greens.',
  },
  {
    id: 'high-protein-rajma',
    name: 'High Protein Rajma',
    category: 'bowls',
    price: 189,
    protein: 25,
    calories: 460,
    image: '/images/bowls/high-protein-rajma.jpg',
    ingredients: 'Rajma, paneer, fresh vegetables and protein-focused dressing.',
  },
  {
    id: 'mediterranean-bowl',
    name: 'Mediterranean Bowl',
    category: 'bowls',
    price: 199,
    protein: 23,
    calories: 430,
    image: '/images/bowls/mediterranean-bowl.jpg',
    ingredients: 'Paneer, chickpeas, cucumber, tomato, olives and Mediterranean dressing.',
  },
  {
    id: 'desi-protein-mix',
    name: 'Desi Protein Mix',
    category: 'bowls',
    price: 179,
    protein: 21,
    calories: 410,
    image: '/images/bowls/desi-protein-mix.jpg',
    ingredients: 'Chickpeas, paneer, vegetables, coriander and Indian spices.',
  },
  {
    id: 'classic-caesar',
    name: 'Classic Caesar',
    category: 'bowls',
    price: 189,
    protein: 24,
    calories: 450,
    image: '/images/bowls/classic-caesar.jpg',
    ingredients: 'Paneer, lettuce, vegetables and creamy Caesar-style dressing.',
  },
  {
    id: 'sprout-power',
    name: 'Sprout Power',
    category: 'bowls',
    price: 159,
    protein: 19,
    calories: 360,
    image: '/images/bowls/sprout-power.jpg',
    ingredients: 'Mixed sprouts, cucumber, tomato, onion, coriander and lemon.',
  },
  {
    id: 'quinoa-protein',
    name: 'Quinoa Protein',
    category: 'bowls',
    price: 219,
    protein: 26,
    calories: 470,
    image: '/images/bowls/quinoa-protein.jpg',
    ingredients: 'Quinoa, paneer, chickpeas and fresh vegetables.',
  },
  {
    id: 'beast-bowl',
    name: 'Beast Bowl',
    category: 'bowls',
    price: 249,
    protein: 35,
    calories: 520,
    image: '/images/bowls/beast-bowl.jpg',
    ingredients: 'A high-protein combination of paneer, legumes, vegetables and house dressing.',
  },
]

export const SMOOTHIES: Product[] = [
  {
    id: 'chocolate-protein',
    name: 'Chocolate Protein',
    category: 'smoothies',
    price: 159,
    protein: 22,
    calories: 310,
    image: '/images/smoothies/chocolate-protein.jpg',
  },
  {
    id: 'peanut-butter-protein',
    name: 'Peanut Butter Protein',
    category: 'smoothies',
    price: 169,
    protein: 25,
    calories: 340,
    image: '/images/smoothies/peanut-butter-protein.jpg',
  },
  {
    id: 'banana-oats',
    name: 'Banana Oats',
    category: 'smoothies',
    price: 149,
    protein: 18,
    calories: 290,
    image: '/images/smoothies/banana-oats.jpg',
  },
  {
    id: 'coffee-protein',
    name: 'Coffee Protein',
    category: 'smoothies',
    price: 159,
    protein: 22,
    calories: 280,
    image: '/images/smoothies/coffee-protein.jpg',
  },
  {
    id: 'berry-blast',
    name: 'Berry Blast',
    category: 'smoothies',
    price: 179,
    protein: 20,
    calories: 260,
    image: '/images/smoothies/berry-blast.jpg',
  },
]

export const ADDONS: Addon[] = [
  {
    id: 'extra-paneer',
    name: 'Extra Paneer',
    price: 40,
  },
  {
    id: 'extra-protein',
    name: 'Extra Protein',
    price: 50,
  },
  {
    id: 'extra-dressing',
    name: 'Extra Dressing',
    price: 20,
  },
  {
    id: 'extra-chickpeas',
    name: 'Extra Chickpeas',
    price: 25,
  },
  {
    id: 'extra-rajma',
    name: 'Extra Rajma',
    price: 25,
  },
]

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'lite',
    name: 'LITE',
    price: 999,
    bowls: 5,
    period: 'week',
    features: ['5 regular protein bowls'],
  },
  {
    id: 'pro',
    name: 'PRO',
    price: 1399,
    bowls: 5,
    period: 'week',
    features: ['5 premium protein bowls', 'Priority ordering'],
    highlighted: true,
  },
  {
    id: 'max',
    name: 'MAX',
    price: 1799,
    bowls: 5,
    period: 'week',
    features: ['5 high-protein bowls', 'Premium selections', 'Priority ordering'],
  },
]
