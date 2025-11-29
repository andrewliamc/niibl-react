import Tesseract from 'tesseract.js'
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist'
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

// Ensure pdf.js knows where to load its worker in bundlers like Vite.
if (typeof window !== 'undefined') {
  GlobalWorkerOptions.workerSrc = pdfWorker
}

const OCR_LANGUAGE = 'eng'

const formatStatus = (status) => status.replace(/_/g, ' ')

function buildLogger(onStatus) {
  if (!onStatus) return undefined

  return (message) => {
    if (!message?.status) return
    const percent = typeof message.progress === 'number' ? Math.round(message.progress * 100) : null
    const text = formatStatus(message.status)
    onStatus(percent != null ? `${text} (${percent}%)` : text)
  }
}

export async function extractTextFromImage(source, onStatus) {
  onStatus?.('Running OCR...')
  const { data } = await Tesseract.recognize(source, OCR_LANGUAGE, {
    logger: buildLogger(onStatus),
  })
  onStatus?.('Finished OCR')
  return data.text?.trim() ?? ''
}

export async function extractTextFromPdf(file, onStatus) {
  onStatus?.('Loading PDF...')
  const pdf = await getDocument({ data: await file.arrayBuffer() }).promise

  const pageTexts = []

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber)
    const viewport = page.getViewport({ scale: 2 })
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    canvas.width = viewport.width
    canvas.height = viewport.height

    onStatus?.(`Rendering page ${pageNumber}/${pdf.numPages}...`)
    await page.render({ canvasContext: context, viewport }).promise

    onStatus?.(`Recognizing page ${pageNumber}/${pdf.numPages}...`)
    const pageText = await extractTextFromImage(canvas, (statusText) =>
      onStatus?.(`Page ${pageNumber}/${pdf.numPages}: ${statusText}`),
    )

    if (pageText) {
      pageTexts.push(pageText)
    }

    // Free canvas memory after each page.
    canvas.width = 0
    canvas.height = 0
  }

  const combined = pageTexts.join('\n\n').trim()
  onStatus?.('Finished scanning PDF')
  return combined
}
