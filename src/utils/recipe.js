const baseIngredients = [
  { amount: 1, unit: 'cup', name: 'flour' },
  { amount: 0.5, unit: 'cup', name: 'sugar' },
  { amount: 2, unit: 'pcs', name: 'eggs' },
  { amount: 0.25, unit: 'cup', name: 'butter' },
]

function parseAmount(amountStr) {
  if (!amountStr) return null
  const tokens = amountStr.trim().split(/\s+/)
  let total = 0

  tokens.forEach((token) => {
    if (token.includes('/')) {
      const [num, den] = token.split('/').map(Number)
      if (!Number.isNaN(num) && !Number.isNaN(den) && den !== 0) {
        total += num / den
      }
    } else {
      const n = Number(token)
      if (!Number.isNaN(n)) total += n
    }
  })

  return total || null
}

export function parseRecipeText(text) {
  if (!text?.trim()) {
    return {
      title: 'Converted Recipe',
      ingredients: baseIngredients,
      instructions: 'Add your instructions to keep steps aligned with the converted amounts.',
    }
  }

  const lines = text
    .split(/\n+/)
    .map((l) => l.trim())
    .filter(Boolean)

  const ingredients = []
  const instructionLines = []

  lines.forEach((line) => {
    if (/^\d+\.\s/.test(line)) {
      instructionLines.push(line)
      return
    }

    const match = line.match(/^([\d][\d\s\/.]*)\s+([A-Za-z]+)?\s*(.*)$/)
    const amount = match ? parseAmount(match[1]) : null

    if (amount) {
      const unit = match?.[2] || ''
      const name = match?.[3] || line.replace(match?.[1] || '', '').trim()
      ingredients.push({ amount, unit, name: name || 'Ingredient' })
    } else {
      instructionLines.push(line)
    }
  })

  return {
    title: lines[0] || 'Converted Recipe',
    ingredients: ingredients.length ? ingredients : baseIngredients,
    instructions: instructionLines.join('\n') || 'Add your instructions to keep steps aligned.',
  }
}

export function scaleIngredients(ingredients, ratio) {
  return ingredients.map((item) => ({
    ...item,
    amount: Number((item.amount * ratio).toFixed(2)),
    highlightChange: ratio !== 1,
  }))
}
