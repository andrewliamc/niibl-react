import { useMemo, useState } from 'react'
import { parseRecipeText, scaleIngredients } from '../../utils/recipe'
import { saveRecipe } from '../../utils/storage'
import { extractTextFromImage, extractTextFromPdf } from '../../utils/ocr'
import ConverterLayout from './ConverterLayout'
import ConverterInputPanel from './ConverterInputPanel'
import ConverterOutputPanel from './ConverterOutputPanel'

export default function ConverterPage() {
  const [inputMode, setInputMode] = useState('text')
  const [recipeText, setRecipeText] = useState('')
  const [uploadedFile, setUploadedFile] = useState(null)
  const [originalServings, setOriginalServings] = useState(4)
  const [targetServings, setTargetServings] = useState(6)
  const [recipe, setRecipe] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isOcrRunning, setIsOcrRunning] = useState(false)
  const [ocrStatus, setOcrStatus] = useState('')
  const [ocrError, setOcrError] = useState('')

  const ratio = useMemo(
    () => (originalServings > 0 ? targetServings / originalServings : 1),
    [originalServings, targetServings],
  )

  const handleFileChange = async (file) => {
    setUploadedFile(file)
    setOcrError('')

    if (!file) {
      setRecipeText('')
      setOcrStatus('')
      return
    }

    setIsOcrRunning(true)
    setOcrStatus('Preparing file...')

    try {
      const isPdf = file.type === 'application/pdf' || file.name?.toLowerCase().endsWith('.pdf')
      const text = isPdf
        ? await extractTextFromPdf(file, setOcrStatus)
        : await extractTextFromImage(file, setOcrStatus)

      const cleanedText = text.trim()
      setRecipeText(cleanedText)
      setOcrStatus(cleanedText ? 'Text captured from your upload.' : 'No text detected—try another file.')
    } catch (error) {
      console.error(error)
      setOcrError('We could not read that file. Try a clearer scan or another file.')
      setOcrStatus('')
    } finally {
      setIsOcrRunning(false)
    }
  }

  const handleConvert = () => {
    setIsLoading(true)
    setTimeout(() => {
      const parsed = parseRecipeText(recipeText)
      const scaledIngredients = scaleIngredients(parsed.ingredients, ratio)

      setRecipe({
        ...parsed,
        title: parsed.title || 'Converted Recipe',
        serves: targetServings,
        originalServes: originalServings,
        ingredients: scaledIngredients,
        source: uploadedFile?.name,
      })
      setIsLoading(false)
    }, 250)
  }

  const handleCopy = () => {
    if (!recipe) return
    const text = [
      `Recipe: ${recipe.title}`,
      `Serves: ${recipe.serves} (from ${recipe.originalServes})`,
      '',
      'Ingredients:',
      ...recipe.ingredients.map((ing) => `- ${ing.amount} ${ing.unit} ${ing.name}`.trim()),
      '',
      'Instructions:',
      recipe.instructions,
    ].join('\n')
    navigator.clipboard?.writeText(text)
  }

  const handleSave = () => {
    if (!recipe) return
    const entry = saveRecipe(recipe)
    alert(`Saved “${entry.title}” to your recipes.`)
  }

  return (
    <div style={{ background: 'var(--color-cream-muted)', paddingBottom: 48, paddingTop: 16 }}>
      <div className="container" style={{ paddingBottom: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div>
            <p className="badge badge-neutral" style={{ marginBottom: 8 }}>
              App
            </p>
            <h2 style={{ fontSize: 34 }}>Converter</h2>
            <p className="muted-text">Paste, upload, and scale in one focused workspace.</p>
          </div>
        </div>
      </div>
      <ConverterLayout
        left={
          <ConverterInputPanel
            inputMode={inputMode}
            onModeChange={setInputMode}
            recipeText={recipeText}
            onRecipeTextChange={setRecipeText}
            onFileChange={handleFileChange}
            ocrStatus={ocrStatus}
            ocrError={ocrError}
            isOcrRunning={isOcrRunning}
            originalServings={originalServings}
            targetServings={targetServings}
            onOriginalChange={setOriginalServings}
            onTargetChange={setTargetServings}
            onConvert={handleConvert}
            isLoading={isLoading}
          />
        }
        right={
          <ConverterOutputPanel
            recipe={recipe}
            isLoading={isLoading}
            onCopy={handleCopy}
            onSave={handleSave}
            onTitleChange={(value) => setRecipe((prev) => (prev ? { ...prev, title: value } : prev))}
          />
        }
      />
    </div>
  )
}
