import BenefitCard from './BenefitCard'

const benefits = [
  {
    title: 'Reduce waste',
    description: 'Scale recipes to the exact servings you need and stop guessing with leftovers.',
    icon: '🌿',
  },
  {
    title: 'Scale effortlessly',
    description: 'Move a slider to instantly adjust ingredient amounts without manual math.',
    icon: '📐',
  },
  {
    title: 'Save favorites',
    description: 'Keep your best conversions handy. Reopen and tweak in seconds.',
    icon: '💾',
  },
]

export default function BenefitsSection() {
  return (
    <section className="section" style={{ background: 'var(--color-cream)' }}>
      <div className="container">
        <h2 className="section-heading">Why Niibl?</h2>
        <div className="grid-3">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  )
}
