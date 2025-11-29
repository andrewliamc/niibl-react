import FileDropzone from '../ui/FileDropzone'

export default function PdfRecipeUpload({ onFileChange, status, error, isLoading }) {
  return (
    <FileDropzone
      label="Upload a PDF"
      helperText="Drop your PDF recipe and we’ll run OCR automatically."
      accept="application/pdf"
      onFileSelect={onFileChange}
      statusText={status}
      errorText={error}
      isProcessing={isLoading}
    />
  )
}
