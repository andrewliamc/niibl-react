import HowItWorksStepCard from './HowItWorksStepCard'

const steps = [
  {
    stepNumber: 1,
    title: 'Upload',
    description: 'Paste your recipe text or drop an image/PDF. We keep it neat and ready to parse.',
  },
  {
    stepNumber: 2,
    title: 'Confirm',
    description: 'Check servings and units. Adjust sliders before we do the math for you.',
  },
  {
    stepNumber: 3,
    title: 'Convert',
    description: 'Instantly scale ingredients and instructions. Copy, save, or share your recipe.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how" className="section" style={{ background: 'var(--color-cream-muted)' }}>
      <div className="container">
        <h2 className="section-heading">How Niibl Works</h2>
        <div className="grid-3">
          {steps.map((step) => (
            <HowItWorksStepCard key={step.stepNumber} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}
