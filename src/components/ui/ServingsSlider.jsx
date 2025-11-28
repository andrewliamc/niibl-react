export default function ServingsSlider({ min = 1, max = 12, value, onChange }) {
  return (
    <div>
      <input
        className="slider-track"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
      />
      <div className="helper" style={{ marginTop: 8 }}>
        Serving size: {value}
      </div>
    </div>
  )
}
