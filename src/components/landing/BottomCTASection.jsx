import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export default function BottomCTASection() {
  return (
    <section className="section" style={{ background: 'var(--color-navy)' }}>
      <div className="container" style={{ display: 'grid', gap: 16, textAlign: 'center' }}>
        <h2 style={{ color: 'var(--color-cream)', fontSize: 32 }}>
          Ready to convert your first recipe?
        </h2>
        <p style={{ color: 'rgba(244,241,222,0.85)', fontSize: 16 }}>
          Jump into the converter to paste, upload, and scale in one flow.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button as={Link} to="/app" variant="primary" size="lg">
            Open the Converter
          </Button>
        </div>
      </div>
    </section>
  )
}
