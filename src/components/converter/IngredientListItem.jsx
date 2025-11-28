export default function IngredientListItem({ amount, unit, name, highlightChange }) {
  return (
    <li
      style={{
        display: 'flex',
        gap: 10,
        alignItems: 'baseline',
        padding: '6px 0',
        borderBottom: '1px solid rgba(61,64,91,0.08)',
      }}
    >
      <span style={{ color: highlightChange ? 'var(--color-terracotta)' : 'var(--color-text)', fontWeight: 700 }}>
        {amount} {unit}
      </span>
      <span style={{ color: 'var(--color-text)' }}>{name}</span>
    </li>
  )
}
