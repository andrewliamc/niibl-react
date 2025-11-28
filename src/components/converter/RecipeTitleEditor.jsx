export default function RecipeTitleEditor({ value, onChange }) {
  return (
    <input
      className="input"
      style={{
        fontSize: 22,
        fontWeight: 900,
        borderWidth: 0,
        border: 'none',
        padding: 0,
        marginBottom: 12,
      }}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  )
}
