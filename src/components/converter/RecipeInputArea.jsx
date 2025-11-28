import TextRecipeInput from './TextRecipeInput'
import ImageRecipeUpload from './ImageRecipeUpload'
import PdfRecipeUpload from './PdfRecipeUpload'

export default function RecipeInputArea({ mode, textValue, onTextChange, onFileChange }) {
  if (mode === 'image') {
    return <ImageRecipeUpload onFileChange={onFileChange} />
  }

  if (mode === 'pdf') {
    return <PdfRecipeUpload onFileChange={onFileChange} />
  }

  return <TextRecipeInput value={textValue} onChange={onTextChange} />
}
