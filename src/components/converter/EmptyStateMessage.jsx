export default function EmptyStateMessage({ title, description }) {
  return (
    <div style={{ textAlign: 'center', padding: '40px 16px' }}>
      <div className="badge badge-neutral" style={{ marginBottom: 12 }}>
        Converter
      </div>
      <h3 style={{ fontSize: 20, marginBottom: 10 }}>{title}</h3>
      <p className="muted-text">{description}</p>
    </div>
  )
}
