import FileDropzone from '../ui/FileDropzone'

export default function ImageRecipeUpload({ onFileChange }) {
  return (
    <FileDropzone
      label="Upload an image"
      helperText="PNG or JPG is great. We’ll read the text soon."
      accept="image/*"
      onFileSelect={onFileChange}
    />
  )
}
