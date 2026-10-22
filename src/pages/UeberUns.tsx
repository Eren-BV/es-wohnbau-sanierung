import { Container, Eyebrow, KontaktBand, SeitenKopf } from '../components/Bausteine'
import { firma } from '../data/firma'
import { useSeitenTitel } from '../lib/useSeitenTitel'

const leistungsbild = [
  'Projektentwicklung',
  'Kompletter Innenausbau bei Neubauten',
  'Alle Gewerke bei Bestandsgebäuden – von der Planung bis zur Bezugsfertigkeit',
  'Architektenleistungen',
  'Maklerdienstleistungen',
  'Unterstützung bei Planung und Projektierung von Grundstücken',
]

export function UeberUns() {
  useSeitenTitel('Über uns')

  return (
    <>
      <SeitenKopf titel="Über uns" eyebrow={`Seit ${firma.gruendung} in München`} bild="/bilder/treppenhaus-altbau.webp">
        <p>360° Immobilienservice – vom Grundstück bis zur bezugsfertigen Wohnung.</p>
      </SeitenKopf>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <img src="/bilder/mehrfamilienhaus-b.webp" alt="Visualisierung eines Mehrfamilienhauses" className="aspect-[4/3] w-full rounded-lg object-cover shadow-xl" />
            <img
              src="/bilder/firmenwagen.webp"
              alt="Firmenwagen von ES Wohnbau & Sanierung"
              loading="lazy"
              className="mt-5 aspect-[16/9] w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <Eyebrow>Wer wir sind</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Erstklassige Neubau- und Bestandsimmobilien</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-anthrazit/85">
              <p>
                Wir sind eine {firma.gruendung} gegründete Gesellschaft aus München. Wir entwickeln, planen, bauen, sanieren und verkaufen
                erstklassige und exklusive Neubau- und Bestandsimmobilien. Um unsere Projekte erfolgreich umsetzen zu können, suchen wir
                laufend nach passenden Entwicklungsprojekten, unbebauten Grundstücken sowie Bestandsimmobilien mit Entwicklungspotenzial.
              </p>
              <p>
                Kurz gesagt: Wir vereinen in unserem Unternehmen (seit 2020 Holding) sehr erfahrene Immobilienexperten aus verschiedenen
                Sparten der Immobilien- und Finanzbranche und können unseren Kunden somit einen 360° Immobilienservice anbieten. Dazu
                gehört ein Netzwerk aus erfolgreichen Partnern, Maklern, Hausverwaltungen sowie Rechts- und Steuerberatern.
              </p>
              <p className="font-semibold text-anthrazit">
                Egal welches Anliegen Sie zum Thema Immobilie haben – bauen, sanieren, verkaufen, vermieten, bewerten, finanzieren, kaufen
                oder mieten: Bei uns sind Sie garantiert richtig!
              </p>
            </div>

            <h3 className="mt-12 text-xl font-bold">Unser Leistungsbild</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {leistungsbild.map((l) => (
                <li key={l} className="flex gap-3 rounded-lg bg-stein p-4 text-sm font-semibold">
                  <span className="mt-1.5 h-1.5 w-3 shrink-0 bg-marke" aria-hidden />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <KontaktBand />
    </>
  )
}
