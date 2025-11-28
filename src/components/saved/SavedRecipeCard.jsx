import Button from '../ui/Button'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

function formatDate(dateString) {
  if (!dateString) return 'Saved recipe'
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return 'Saved recipe'
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

export default function SavedRecipeCard({ title, serves, createdAt, onOpen }) {
  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ fontSize: 18, marginBottom: 6 }}>{title}</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <Badge variant="sage">Serves {serves}</Badge>
            <span className="muted-text" style={{ fontSize: 13 }}>{formatDate(createdAt)}</span>
          </div>
        </div>
        <Button variant="secondary" size="sm" onClick={onOpen}>
          Open
        </Button>
      </div>
    </Card>
  )
}
