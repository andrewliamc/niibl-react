import Card from '../ui/Card'

export default function HowItWorksStepCard({ stepNumber, title, description }) {
  return (
    <Card accent="var(--color-terracotta)">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <div
          className="badge badge-terracotta"
          style={{ borderRadius: 10, fontWeight: 800, fontSize: 13 }}
        >
          Step {stepNumber}
        </div>
        <h3 style={{ fontSize: 20 }}>{title}</h3>
      </div>
      <p className="muted-text">{description}</p>
    </Card>
  )
}
