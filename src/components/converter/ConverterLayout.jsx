export default function ConverterLayout({ left, right }) {
  return (
    <div className="container" style={{ paddingBlock: 48 }}>
      <div className="converter-grid">{left}{right}</div>
    </div>
  )
}
