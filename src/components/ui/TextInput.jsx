export default function TextInput({ label, helperText, error, ...props }) {
  return (
    <div style={{ width: '100%' }}>
      {label ? <label className="label">{label}</label> : null}
      <input className="input" {...props} />
      {helperText ? <div className="helper">{helperText}</div> : null}
      {error ? (
        <div className="helper" style={{ color: 'var(--color-terracotta)' }}>
          {error}
        </div>
      ) : null}
    </div>
  )
}
