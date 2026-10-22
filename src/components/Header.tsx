import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import clsx from 'clsx'
import { firma, navigation } from '../data/firma'

export function Header() {
  const [offen, setOffen] = useState(false)
  const { pathname } = useLocation()

  // Mobilmenü bei Seitenwechsel schließen
  useEffect(() => {
    setOffen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-linie bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3" aria-label="ES Wohnbau & Sanierung – Startseite">
          <img src="/bilder/logo-es-zeichen.png" alt="" className="h-11 w-auto" />
          <span className="font-display leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-anthrazit">ES Wohnbau</span>
            <span className="block text-xs font-semibold tracking-[0.2em] text-marke uppercase">& Sanierung</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {navigation.slice(1).map((eintrag) => (
            <NavLink
              key={eintrag.to}
              to={eintrag.to}
              className={({ isActive }) =>
                clsx(
                  'rounded px-3 py-2 font-display text-[15px] font-semibold transition-colors',
                  isActive ? 'text-marke' : 'text-anthrazit hover:text-marke',
                )
              }
            >
              {eintrag.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={firma.telefonLink}
          className="hidden items-center gap-2 rounded-full bg-marke px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-marke-dunkel md:flex"
        >
          <Phone className="size-4" aria-hidden />
          {firma.telefon}
        </a>

        <button
          type="button"
          className="rounded p-2 text-anthrazit lg:hidden"
          onClick={() => setOffen((o) => !o)}
          aria-expanded={offen}
          aria-label={offen ? 'Menü schließen' : 'Menü öffnen'}
        >
          {offen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {offen && (
        <nav className="border-t border-linie bg-white px-4 pb-6 lg:hidden" aria-label="Mobile Navigation">
          {navigation.map((eintrag) => (
            <NavLink
              key={eintrag.to}
              to={eintrag.to}
              end
              className={({ isActive }) =>
                clsx(
                  'block border-b border-linie py-3.5 font-display text-lg font-semibold',
                  isActive ? 'text-marke' : 'text-anthrazit',
                )
              }
            >
              {eintrag.label}
            </NavLink>
          ))}
          <a
            href={firma.telefonLink}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-marke px-5 py-3 font-semibold text-white"
          >
            <Phone className="size-4" aria-hidden />
            {firma.telefon}
          </a>
        </nav>
      )}
    </header>
  )
}
