import Textarea from '../ui/Textarea'

export default function TextRecipeInput({ value, onChange }) {
  return (
    <Textarea
      label="Paste your recipe"
      placeholder="Paste your recipe text here..."
      helperText="We’ll detect ingredients and instructions."
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  )
}
