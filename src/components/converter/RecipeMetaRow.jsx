import Badge from '../ui/Badge'

export default function RecipeMetaRow({ serves, originalServes }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
      <Badge variant="sage">Serves {serves}</Badge>
      {originalServes ? (
        <span className="muted-text">Scaled from {originalServes} servings</span>
      ) : null}
    </div>
  )
}
