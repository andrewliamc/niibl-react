import Button from '../ui/Button'
import Card from '../ui/Card'
import EmptyStateMessage from './EmptyStateMessage'
import RecipeTitleEditor from './RecipeTitleEditor'
import RecipeMetaRow from './RecipeMetaRow'
import IngredientList from './IngredientList'
import InstructionsBlock from './InstructionsBlock'

export default function ConverterOutputPanel({ recipe, isLoading, onCopy, onSave, onTitleChange }) {
  if (!recipe) {
    return (
      <Card>
        <EmptyStateMessage
          title={isLoading ? 'Converting...' : 'No recipe yet'}
          description="Run your first conversion to preview ingredients and notes."
        />
      </Card>
    )
  }

  return (
    <Card>
      <RecipeTitleEditor value={recipe.title} onChange={onTitleChange} />
      <RecipeMetaRow serves={recipe.serves} originalServes={recipe.originalServes} />
      <IngredientList items={recipe.ingredients} />
      <InstructionsBlock instructions={recipe.instructions} />
      <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
        <Button variant="primary" size="md" onClick={onCopy}>
          Copy
        </Button>
        <Button variant="secondary" size="md" onClick={onSave}>
          Save
        </Button>
      </div>
    </Card>
  )
}
