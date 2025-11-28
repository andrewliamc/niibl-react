export default function LogoWordmark({ size = 'md', withTagline = false }) {
  const sizes = { sm: 18, md: 22, lg: 26 }
  const fontSize = sizes[size] || sizes.md

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span
          style={{
            fontWeight: 900,
            fontSize,
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
          }}
        >
          Niibl
        </span>
        <span style={{ fontWeight: 700, fontSize: fontSize * 0.6, color: 'var(--color-terracotta)' }}>
          beta
        </span>
      </div>
      {withTagline ? (
        <span style={{ fontSize: 12, color: 'rgba(61,64,91,0.7)', fontWeight: 600 }}>
          Just a bite smarter
        </span>
      ) : null}
    </div>
  )
}
