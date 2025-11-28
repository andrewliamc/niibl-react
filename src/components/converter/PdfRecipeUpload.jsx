import FileDropzone from '../ui/FileDropzone'

export default function PdfRecipeUpload({ onFileChange }) {
  return (
    <FileDropzone
      label="Upload a PDF"
      helperText="Drop your PDF recipe—we’ll parse it in the next phase."
      accept="application/pdf"
      onFileSelect={onFileChange}
    />
  )
}
