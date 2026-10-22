import { Mail, MapPin, Phone, Printer } from 'lucide-react'
import { Container, Eyebrow, SeitenKopf } from '../components/Bausteine'
import { firma } from '../data/firma'
import { useSeitenTitel } from '../lib/useSeitenTitel'

export function Kontakt() {
  useSeitenTitel('Kontakt')

  const wege = [
    { icon: Phone, label: 'Telefon', wert: firma.telefon, href: firma.telefonLink },
    { icon: Mail, label: 'E-Mail', wert: firma.email, href: `mailto:${firma.email}` },
    { icon: Printer, label: 'Fax', wert: firma.fax },
    { icon: MapPin, label: 'Geschäftssitz', wert: `${firma.strasse}, ${firma.ort}`, href: firma.karteLink },
  ]

  return (
    <>
      <SeitenKopf titel="Wir beraten Sie gerne!" eyebrow="Kontakt" bild="/bilder/flur-saniert.webp">
        <p>Rufen Sie uns an oder schreiben Sie uns – wir melden uns schnellstmöglich bei Ihnen.</p>
      </SeitenKopf>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div className="overflow-hidden rounded-lg bg-stein">
            <img src="/bilder/edis-sejdinovic.webp" alt={firma.ansprechpartner} className="aspect-[4/3] w-full object-cover object-top" />
            <div className="p-7">
              <Eyebrow>Ihr Ansprechpartner</Eyebrow>
              <p className="mt-3 font-display text-2xl font-extrabold">{firma.ansprechpartner}</p>
              <p className="text-anthrazit/70">{firma.funktion}</p>
              <p className="mt-4 font-semibold">{firma.name}</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">So erreichen Sie uns</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {wege.map(({ icon: Icon, label, wert, href }) => {
                const inhalt = (
                  <>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-marke text-white">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs font-bold tracking-widest text-anthrazit/55 uppercase">{label}</span>
                      <span className="mt-1 block font-semibold break-words">{wert}</span>
                    </span>
                  </>
                )
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex h-full gap-4 rounded-lg border border-linie p-5 transition-colors hover:border-marke"
                      >
                        {inhalt}
                      </a>
                    ) : (
                      <div className="flex h-full gap-4 rounded-lg border border-linie p-5">{inhalt}</div>
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="mt-10 rounded-lg bg-anthrazit p-7 text-white">
              <h3 className="text-xl font-bold text-white">Anfahrt</h3>
              <p className="mt-2 text-white/80">
                Unser Büro liegt in Planegg, direkt vor den Toren Münchens. Bitte vereinbaren Sie vorab einen Termin.
              </p>
              <a
                href={firma.karteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-marke px-5 py-2.5 text-sm font-semibold hover:bg-marke-dunkel"
              >
                <MapPin className="size-4" aria-hidden /> Auf der Karte öffnen
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
