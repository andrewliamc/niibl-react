const STORAGE_KEY = 'niibl_saved_recipes'

function readRaw() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (err) {
    console.error('Unable to read saved recipes', err)
    return []
  }
}

function writeRaw(recipes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes))
  } catch (err) {
    console.error('Unable to persist recipes', err)
  }
}

export function getSavedRecipes() {
  return readRaw()
}

export function saveRecipe(recipe) {
  const recipes = readRaw()
  const id = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`
  const entry = { ...recipe, id, createdAt: new Date().toISOString() }
  writeRaw([entry, ...recipes])
  return entry
}
