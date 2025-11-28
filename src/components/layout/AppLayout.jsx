import Header from './Header'
import Footer from './Footer'

export default function AppLayout({ children }) {
  return (
    <div className="page">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
