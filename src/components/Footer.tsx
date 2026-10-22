import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { firma, navigation } from '../data/firma'
import { gewerke } from '../data/gewerke'

export function Footer() {
  return (
    <footer className="bg-anthrazit text-white/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/bilder/logo-es-zeichen.png" alt="" className="h-14 w-auto" />
          <p className="mt-4 font-display text-lg font-bold text-white">{firma.kurzname}</p>
          <p className="mt-2 text-sm leading-relaxed">
            Ganzheitliche Generalsanierung von Wohnungen und Häusern im Großraum München – seit {firma.gruendung}.
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold tracking-widest text-white uppercase">Kontakt</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-marke" aria-hidden />
              <span>
                {firma.strasse}
                <br />
                {firma.ort}
              </span>
            </li>
            <li>
              <a href={firma.telefonLink} className="flex gap-3 hover:text-white">
                <Phone className="mt-0.5 size-4 shrink-0 text-marke" aria-hidden />
                {firma.telefon}
              </a>
            </li>
            <li>
              <a href={`mailto:${firma.email}`} className="flex gap-3 break-all hover:text-white">
                <Mail className="mt-0.5 size-4 shrink-0 text-marke" aria-hidden />
                {firma.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold tracking-widest text-white uppercase">Gewerke</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {gewerke.map((g) => (
              <li key={g.slug}>
                <Link to={`/gewerke/${g.slug}`} className="hover:text-white">
                  {g.titel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold tracking-widest text-white uppercase">Seiten</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navigation.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {firma.name}
          </p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-white">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-white">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
