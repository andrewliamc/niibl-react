import IngredientListItem from './IngredientListItem'

export default function IngredientList({ items }) {
  return (
    <div>
      <h4 style={{ marginBottom: 10 }}>Ingredients</h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items?.map((item) => (
          <IngredientListItem key={item.name} {...item} />
        ))}
      </ul>
    </div>
  )
}
