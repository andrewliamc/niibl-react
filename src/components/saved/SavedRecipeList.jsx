import SavedRecipeCard from './SavedRecipeCard'

export default function SavedRecipeList({ recipes, onSelect }) {
  if (!recipes?.length) {
    return <div className="muted-text">No saved conversions yet.</div>
  }

  return (
    <div style={{ display: 'grid', gap: 14 }}>
      {recipes.map((recipe) => (
        <SavedRecipeCard key={recipe.id} {...recipe} onOpen={() => onSelect?.(recipe.id)} />
      ))}
    </div>
  )
}
