export default function Card({ title, subtitle, children, className, accent }) {
  const classNames = ['card', 'card-elevated', className].filter(Boolean).join(' ')

  return (
    <div className={classNames}>
      {accent ? (
        <div
          style={{
            width: '100%',
            height: 4,
            borderRadius: 9999,
            background: accent,
            marginBottom: 14,
          }}
        />
      ) : null}
      {title ? <h3 style={{ fontSize: 20, marginBottom: 8 }}>{title}</h3> : null}
      {subtitle ? (
        <p className="muted-text" style={{ marginBottom: 12 }}>
          {subtitle}
        </p>
      ) : null}
      {children}
    </div>
  )
}
