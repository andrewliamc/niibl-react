import InputModeTabs from './InputModeTabs'
import RecipeInputArea from './RecipeInputArea'
import ServingsControl from './ServingsControl'
import Button from '../ui/Button'

export default function ConverterInputPanel({
  inputMode,
  onModeChange,
  recipeText,
  onRecipeTextChange,
  onFileChange,
  originalServings,
  targetServings,
  onOriginalChange,
  onTargetChange,
  onConvert,
  isLoading,
}) {
  return (
    <div className="card" style={{ display: 'grid', gap: 16 }}>
      <div className="converter-header">
        <div>
          <h3 style={{ fontSize: 20, marginBottom: 6 }}>1. Add your recipe</h3>
          <p className="muted-text">Paste text or upload a file to get started.</p>
        </div>
        <InputModeTabs value={inputMode} onChange={onModeChange} />
      </div>

      <RecipeInputArea
        mode={inputMode}
        textValue={recipeText}
        onTextChange={onRecipeTextChange}
        onFileChange={onFileChange}
      />

      <div>
        <h4 style={{ marginBottom: 12, fontSize: 18 }}>2. Servings</h4>
        <ServingsControl
          originalServings={originalServings}
          targetServings={targetServings}
          onOriginalChange={onOriginalChange}
          onTargetChange={onTargetChange}
        />
      </div>

      <Button
        onClick={onConvert}
        variant="primary"
        size="lg"
        fullWidth
        disabled={isLoading}
        style={{ marginTop: 8, fontSize: 16 }}
      >
        {isLoading ? 'Converting...' : 'Convert Recipe'}
      </Button>
    </div>
  )
}
