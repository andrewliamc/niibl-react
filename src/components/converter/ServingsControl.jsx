import TextInput from '../ui/TextInput'
import ServingsSlider from '../ui/ServingsSlider'

export default function ServingsControl({
  originalServings,
  targetServings,
  onOriginalChange,
  onTargetChange,
}) {
  return (
    <div style={{ display: 'grid', gap: 14 }}>
      <div className="two-col">
        <TextInput
          type="number"
          label="Original recipe serves"
          value={originalServings}
          min={1}
          onChange={(e) => onOriginalChange?.(Number(e.target.value))}
        />
        <TextInput
          type="number"
          label="I want to serve"
          value={targetServings}
          min={1}
          onChange={(e) => onTargetChange?.(Number(e.target.value))}
        />
      </div>
      <ServingsSlider min={1} max={16} value={targetServings} onChange={onTargetChange} />
    </div>
  )
}
