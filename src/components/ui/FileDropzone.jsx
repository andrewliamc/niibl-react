import { useRef, useState } from 'react'

export default function FileDropzone({
  label,
  helperText,
  accept,
  onFileSelect,
  statusText,
  errorText,
  isProcessing,
}) {
  const inputRef = useRef(null)
  const [fileName, setFileName] = useState('')

  const handleChange = (event) => {
    const file = event.target.files?.[0]
    setFileName(file ? file.name : '')
    onFileSelect?.(file ?? null)
  }

  return (
    <div>
      {label ? <label className="label">{label}</label> : null}
      <div
        className="dropzone"
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            inputRef.current?.click()
          }
        }}
      >
        <div style={{ fontWeight: 600, marginBottom: 6 }}>Drop or upload a file</div>
        <div className="muted-text" style={{ marginBottom: 8 }}>
          {helperText || 'Images or PDFs are welcome for now.'}
        </div>
        {fileName ? <div style={{ fontWeight: 600 }}>{fileName}</div> : null}
        {isProcessing ? (
          <div className="muted-text" style={{ marginTop: 8, fontWeight: 600 }}>
            Processing with OCR...
          </div>
        ) : null}
        {statusText ? (
          <div className="muted-text" style={{ marginTop: 4 }}>
            {statusText}
          </div>
        ) : null}
        {errorText ? (
          <div style={{ marginTop: 8, color: '#b23b3b', fontWeight: 700 }}>{errorText}</div>
        ) : null}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        style={{ display: 'none' }}
        onChange={handleChange}
      />
    </div>
  )
}
