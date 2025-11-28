const options = [
  { value: 'text', label: 'Paste Text' },
  { value: 'image', label: 'Upload Image' },
  { value: 'pdf', label: 'Upload PDF' },
]

export default function InputModeTabs({ value, onChange }) {
  return (
    <div className="tabs">
      {options.map((option) => (
        <button
          key={option.value}
          className={['tab-button', value === option.value ? 'active' : ''].join(' ')}
          type="button"
          onClick={() => onChange?.(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
