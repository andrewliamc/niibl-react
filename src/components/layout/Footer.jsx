import LogoWordmark from './LogoWordmark'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-cream-muted)', marginTop: 64 }}>
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, paddingBlock: 20 }}
      >
        <LogoWordmark size="md" withTagline />
        <div className="muted-text" style={{ fontSize: 13 }}>
          Niibl · Just A Bite · 2025
        </div>
      </div>
    </footer>
  )
}
