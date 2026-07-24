'use client'

import { SubscriptionPlan } from '@/config/menu'
import { Check } from 'lucide-react'

interface SubscriptionCardProps {
  plan: SubscriptionPlan
  onSelect?: () => void
}

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ plan, onSelect }) => {
  return (
    <div
      className={`rounded-2xl p-6 shadow-soft transition-all ${
        plan.highlighted
          ? 'bg-brand-forest text-white ring-2 ring-brand-green scale-105'
          : 'bg-white text-brand-text-dark'
      }`}
    >
      {plan.highlighted && (
        <div className="inline-block bg-brand-green px-3 py-1 rounded-full text-xs font-bold mb-4">
          MOST POPULAR
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

      <div className="mb-4">
        <p className="text-3xl font-bold">₹{plan.price}</p>
        <p className={plan.highlighted ? 'text-brand-cream text-sm' : 'text-brand-text-light text-sm'}>
          per {plan.period}
        </p>
      </div>

      <p className={`mb-6 font-semibold ${plan.highlighted ? 'text-brand-cream' : ''}`}>
        {plan.bowls} bowls per week
      </p>

      <ul className="mb-6 space-y-3">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-brand-cream' : 'text-brand-forest'}`} />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={`w-full font-bold py-3 rounded-xl transition ${
          plan.highlighted
            ? 'bg-white text-brand-forest hover:bg-brand-cream'
            : 'bg-brand-forest text-white hover:bg-brand-forest-dark'
        }`}
      >
        CHOOSE PLAN
      </button>
    </div>
  )
}
