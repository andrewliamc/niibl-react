export default function Textarea({ label, helperText, ...props }) {
  return (
    <div style={{ width: '100%' }}>
      {label ? <label className="label">{label}</label> : null}
      <textarea className="textarea" {...props} />
      {helperText ? <div className="helper">{helperText}</div> : null}
    </div>
  )
}
