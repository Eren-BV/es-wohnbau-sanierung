import { Link } from 'react-router-dom'
import { ArrowRight, ClipboardList, Hammer, Handshake, House, ReceiptEuro, Star } from 'lucide-react'
import { Container, Eyebrow, GewerkeRaster, KontaktBand } from '../components/Bausteine'
import { firma } from '../data/firma'
import { abgeschlosseneBilder } from '../data/projekte'
import { useSeitenTitel } from '../lib/useSeitenTitel'

const vorteile = [
  { icon: House, titel: 'Komplettsanierung aus einer Hand', text: 'Profitieren Sie von einer reibungslosen und zügigen Umsetzung Ihrer Sanierung.' },
  { icon: Hammer, titel: 'Gewerke im eigenen Haus', text: 'Profitieren Sie von unserem Team, denn wir haben alle wesentlichen Gewerke im Haus.' },
  { icon: Handshake, titel: 'Regionales Partnernetzwerk', text: 'Profitieren Sie von unserem bewährten Netzwerk regionaler Handwerksunternehmen.' },
  { icon: ClipboardList, titel: 'Gesamte Planung und Baubetreuung', text: 'Sie erhalten die gesamte Planung sowie architektonische Leistungen aus unserem Haus.' },
  { icon: ReceiptEuro, titel: 'Transparente Preisgestaltung', text: 'Verlassen Sie sich auf unser Pauschalangebot – verständlich, transparent und verlässlich.' },
  { icon: Star, titel: 'Über 20 Jahre Erfahrung', text: 'Unser guter Name und unsere zufriedenen Auftraggeber sprechen für sich.' },
]

export function Start() {
  useSeitenTitel()

  return (
    <>
      {/* Einstieg */}
      <section className="relative isolate overflow-hidden bg-anthrazit">
        <video
          className="absolute inset-0 -z-10 size-full object-cover opacity-90"
          src="/videos/hero-bad.mp4"
          poster="/bilder/hero-bad-poster.webp"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-anthrazit/95 via-anthrazit/70 to-anthrazit/0" aria-hidden />
        <Container className="py-24 sm:py-32 lg:py-40">
          <Eyebrow hell>Generalsanierung im Großraum München</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.1] font-extrabold text-white sm:text-6xl">
            Sie möchten Ihre Immobilie <span className="text-[#ff4b4f]">aus einer Hand</span> sorgenfrei sanieren lassen?
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Unser Schwerpunkt liegt auf der ganzheitlichen und nachhaltigen Generalsanierung von Wohnungen und Häusern. Mit unserem
            Architekten unterstützen wir Sie auch planerisch und koordinieren sämtliche Gewerke aus einer Hand.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/kontakt"
              className="flex items-center justify-center gap-2 rounded-full bg-marke px-7 py-3.5 font-semibold text-white transition-colors hover:bg-marke-dunkel"
            >
              Beratung anfragen <ArrowRight className="size-5" aria-hidden />
            </Link>
            <Link
              to="/projekte"
              className="flex items-center justify-center rounded-full border-2 border-white/60 px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Unsere Projekte ansehen
            </Link>
          </div>
        </Container>
      </section>

      {/* Über das Unternehmen */}
      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Ihr Partner für Sanierung</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Sorgfalt, Zuverlässigkeit und Flexibilität</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-anthrazit/85">
              <p>
                Wenn Sie Ihre Wohnung oder Ihr Haus sanieren lassen möchten, sind wir Ihr Partner. Seit über 20 Jahren stehen wir{' '}
                <strong className="font-semibold text-anthrazit">Privatpersonen</strong> und{' '}
                <strong className="font-semibold text-anthrazit">Hausverwaltungen</strong> bei der Generalsanierung und handwerklichen
                Leistungen rund um den Bau zur Seite.
              </p>
              <p>
                Neben der Sorgfalt und Zuverlässigkeit bei der Umsetzung unserer Aufträge sehen wir gerade in unserer Flexibilität eine
                unserer großen Stärken. Und auch unser <strong className="font-semibold text-anthrazit">Preis-Leistungs-Verhältnis stimmt</strong>!
              </p>
            </div>
            <Link to="/ueber-uns" className="mt-8 inline-flex items-center gap-2 font-semibold text-marke hover:gap-3">
              Mehr über uns <ArrowRight className="size-5 transition-all" aria-hidden />
            </Link>
          </div>
          <div className="relative">
            <img src="/bilder/neubau-wohnen.webp" alt="Hell sanierter Wohnraum mit Holzboden" className="aspect-[4/3] w-full rounded-lg object-cover shadow-xl" />
            <div className="absolute -bottom-6 -left-4 rounded-lg bg-marke px-6 py-5 text-white shadow-xl sm:-left-8">
              <p className="font-display text-4xl font-extrabold">{new Date().getFullYear() - firma.gruendung}+</p>
              <p className="text-sm font-semibold">Jahre am Markt</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Vorteile */}
      <section className="bg-stein py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Ihre Vorteile</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Das bieten wir Ihnen</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vorteile.map(({ icon: Icon, titel, text }) => (
              <div key={titel} className="rounded-lg bg-white p-7 shadow-sm">
                <span className="flex size-12 items-center justify-center rounded-full bg-marke/10 text-marke">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-bold">{titel}</h3>
                <p className="mt-2 leading-relaxed text-anthrazit/75">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Gewerke */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Leistungen</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Alle Gewerke aus einer Hand</h2>
              <p className="mt-4 text-lg text-anthrazit/80">
                Alle wesentlichen Gewerke am Bau decken wir selbst ab. Die Abstimmung übernehmen immer wir – so geht alles zentral
                koordiniert und reibungslos über die Bühne.
              </p>
            </div>
            <Link to="/gewerke" className="inline-flex shrink-0 items-center gap-2 font-semibold text-marke">
              Alle Gewerke <ArrowRight className="size-5" aria-hidden />
            </Link>
          </div>
          <div className="mt-12">
            <GewerkeRaster />
          </div>
        </Container>
      </section>

      {/* Projekte-Vorschau */}
      <section className="bg-anthrazit py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow hell>Referenzen</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Einblicke in unsere Projekte</h2>
            </div>
            <Link to="/projekte" className="inline-flex items-center gap-2 font-semibold text-white">
              Alle Projekte <ArrowRight className="size-5" aria-hidden />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[abgeschlosseneBilder[4], abgeschlosseneBilder[8], abgeschlosseneBilder[3], abgeschlosseneBilder[14]].map((b, i) => (
              <img
                key={b.src}
                src={b.src}
                alt={b.titel}
                loading="lazy"
                className={`aspect-square w-full rounded-lg object-cover ${i % 2 ? 'lg:translate-y-8' : ''}`}
              />
            ))}
          </div>
        </Container>
      </section>

      <KontaktBand />
    </>
  )
}
