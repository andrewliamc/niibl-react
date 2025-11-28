export default function InstructionsBlock({ instructions, editable = false, onChange }) {
  if (editable) {
    return (
      <div style={{ marginTop: 18 }}>
        <label className="label">Notes / Instructions</label>
        <textarea
          className="textarea"
          value={instructions}
          onChange={(e) => onChange?.(e.target.value)}
          rows={6}
        />
      </div>
    )
  }

  return (
    <div style={{ marginTop: 18 }}>
      <h4 style={{ marginBottom: 8 }}>Instructions</h4>
      <p className="muted-text">{instructions || 'Paste instructions to keep everything together.'}</p>
    </div>
  )
}
