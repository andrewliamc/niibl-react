import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import LandingPage from './components/landing/LandingPage'
import ConverterPage from './components/converter/ConverterPage'
import SavedConversionsPage from './components/saved/SavedConversionsPage'

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<ConverterPage />} />
        <Route path="/saved" element={<SavedConversionsPage />} />
      </Routes>
    </AppLayout>
  )
}
