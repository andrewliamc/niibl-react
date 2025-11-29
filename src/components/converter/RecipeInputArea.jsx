import TextRecipeInput from './TextRecipeInput'
import ImageRecipeUpload from './ImageRecipeUpload'
import PdfRecipeUpload from './PdfRecipeUpload'

export default function RecipeInputArea({
  mode,
  textValue,
  onTextChange,
  onFileChange,
  ocrStatus,
  ocrError,
  isOcrRunning,
}) {
  if (mode === 'image') {
    return <ImageRecipeUpload onFileChange={onFileChange} status={ocrStatus} error={ocrError} isLoading={isOcrRunning} />
  }

  if (mode === 'pdf') {
    return <PdfRecipeUpload onFileChange={onFileChange} status={ocrStatus} error={ocrError} isLoading={isOcrRunning} />
  }

  return <TextRecipeInput value={textValue} onChange={onTextChange} />
}
