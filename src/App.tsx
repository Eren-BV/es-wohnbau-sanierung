import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Start } from './pages/Start'
import { UeberUns } from './pages/UeberUns'
import { Generalsanierung } from './pages/Generalsanierung'
import { Gewerke } from './pages/Gewerke'
import { GewerkDetail } from './pages/GewerkDetail'
import { Projekte } from './pages/Projekte'
import { Kontakt } from './pages/Kontakt'
import { Impressum } from './pages/Impressum'
import { Datenschutz } from './pages/Datenschutz'
import { NichtGefunden } from './pages/NichtGefunden'

export default function App() {
  const { pathname } = useLocation()

  // Bei Seitenwechsel nach oben springen
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#inhalt" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">
        Zum Inhalt springen
      </a>
      <Header />
      <main id="inhalt" className="flex-1">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/generalsanierung" element={<Generalsanierung />} />
          <Route path="/gewerke" element={<Gewerke />} />
          <Route path="/gewerke/:slug" element={<GewerkDetail />} />
          <Route path="/projekte" element={<Projekte />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NichtGefunden />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
