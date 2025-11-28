import Card from '../ui/Card'

export default function BenefitCard({ title, description, icon }) {
  return (
    <Card>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: 'var(--color-sage-ghost)',
            display: 'grid',
            placeItems: 'center',
            color: 'var(--color-terracotta)',
            fontWeight: 800,
          }}
        >
          {icon || '★'}
        </div>
        <h3 style={{ fontSize: 18 }}>{title}</h3>
      </div>
      <p className="muted-text">{description}</p>
    </Card>
  )
}
