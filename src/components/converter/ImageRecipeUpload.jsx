import FileDropzone from '../ui/FileDropzone'

export default function ImageRecipeUpload({ onFileChange, status, error, isLoading }) {
  return (
    <FileDropzone
      label="Upload an image"
      helperText="PNG or JPG is great. We’ll read the text as soon as it finishes uploading."
      accept="image/*"
      onFileSelect={onFileChange}
      statusText={status}
      errorText={error}
      isProcessing={isLoading}
    />
  )
}
