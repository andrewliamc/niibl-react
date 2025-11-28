import { useEffect, useState } from 'react'
import { getSavedRecipes } from '../../utils/storage'
import SavedRecipeList from './SavedRecipeList'

export default function SavedConversionsPage() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    setRecipes(getSavedRecipes())
  }, [])

  return (
    <section className="section" style={{ background: 'var(--color-cream)' }}>
      <div className="container">
        <div style={{ marginBottom: 18 }}>
          <p className="badge badge-neutral" style={{ marginBottom: 8 }}>
            Saved
          </p>
          <h2 style={{ fontSize: 32, marginBottom: 8 }}>Recent Conversions</h2>
          <p className="muted-text">Quick access to recipes you’ve already scaled.</p>
        </div>
        <SavedRecipeList recipes={recipes} onSelect={(id) => alert(`Open saved recipe ${id}`)} />
      </div>
    </section>
  )
}
