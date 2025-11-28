import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export default function HeroSection() {
  return (
    <section className="section" style={{ background: 'var(--color-cream)' }}>
      <div className="container hero-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div className="badge badge-terracotta" style={{ width: 'fit-content' }}>
            Just a bite smarter
          </div>
          <h1 style={{ fontSize: 46 }}>Cook Smarter. Just A Bite.</h1>
          <p style={{ fontSize: 18, color: 'rgba(61,64,91,0.85)', maxWidth: 560 }}>
            Niibl helps you convert, scale, and save recipes effortlessly. Paste or upload your recipe,
            choose servings, and let the converter handle the math.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button as={Link} to="/app" variant="primary" size="lg">
              Try the Converter
            </Button>
            <Button as={Link} to="#how" variant="secondary">
              How It Works
            </Button>
          </div>
        </div>
        <div>
          <div
            className="card card-elevated"
            style={{
              minHeight: 260,
              background: 'linear-gradient(135deg, #ffffff 0%, #f9f5ed 50%, #ffe8df 100%)',
              display: 'grid',
              placeItems: 'center',
              border: '1px solid var(--color-border)',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div className="badge badge-sage" style={{ marginBottom: 10 }}>Preview</div>
              <h3 style={{ marginBottom: 8 }}>Upload → Confirm → Convert</h3>
              <p className="muted-text">A friendly preview of your converted recipe lives here.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
