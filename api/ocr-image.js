const FRACTION_MAP = {
  '½': '1/2',
  '¼': '1/4',
  '¾': '3/4',
  '⅓': '1/3',
  '⅔': '2/3',
  '⅛': '1/8',
  '⅜': '3/8',
  '⅝': '5/8',
  '⅞': '7/8',
}

const normalizeFractions = (text = '') => text.replace(/[½¼¾⅓⅔⅛⅜⅝⅞]/g, (match) => FRACTION_MAP[match] || match)

const parseBody = (req) => {
  if (!req?.body) return {}
  if (typeof req.body === 'object') return req.body
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body)
    } catch {
      return {}
    }
  }
  return {}
}

const firstString = (value) => {
  if (Array.isArray(value)) return value[0]
  return typeof value === 'string' ? value : undefined
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.OCR_SPACE_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'OCR API key not configured' })
  }

  const { imageBase64 } = parseBody(req)
  if (!imageBase64 || typeof imageBase64 !== 'string') {
    return res.status(400).json({ error: 'imageBase64 is required as a data URL' })
  }

  try {
    const form = new FormData()
    form.append('apikey', apiKey)
    form.append('base64Image', imageBase64)
    form.append('language', 'eng')
    form.append('OCREngine', '2')
    form.append('isOverlayRequired', 'false')

    const ocrResponse = await fetch('https://api.ocr.space/parse/image', {
      method: 'POST',
      body: form,
    })

    const data = await ocrResponse.json().catch(() => null)
    if (!data) {
      return res.status(502).json({ error: 'Unexpected OCR response' })
    }

    const parsedResult = Array.isArray(data.ParsedResults) ? data.ParsedResults[0] : null
    const rawText = parsedResult?.ParsedText ?? ''
    const apiError =
      data.IsErroredOnProcessing &&
      (firstString(parsedResult?.ErrorMessage) || firstString(data.ErrorMessage) || data.ErrorDetails)

    if (!ocrResponse.ok || apiError) {
      const message = apiError || 'OCR service could not process the file'
      return res.status(400).json({ error: message })
    }

    return res.status(200).json({
      rawText,
      normalizedText: normalizeFractions(rawText),
    })
  } catch (error) {
    console.error('OCR handler error', error)
    return res.status(500).json({ error: 'Unable to process OCR request' })
  }
}
