import { Container, Eyebrow, KontaktBand, SeitenKopf } from '../components/Bausteine'
import { Galerie } from '../components/Galerie'
import { VorherNachher } from '../components/VorherNachher'
import { abgeschlosseneBilder, aktuelleBilder, aktuelleProjekte, kunden, vorherNachher } from '../data/projekte'
import { useSeitenTitel } from '../lib/useSeitenTitel'

const formel = [
  {
    titel: 'Individualität',
    text: 'Unsere Planung sieht hohe Flexibilität im Haus- und Umbau vor. Sie haben viele Möglichkeiten, Grundrisse und Ausstattung variabel mitzugestalten und Ihre Wünsche einfließen zu lassen.',
  },
  {
    titel: 'Nachhaltigkeit',
    text: 'Nachhaltiges Bauen zahlt sich aus – für die Umwelt und Ihr Bankkonto. Für einen reduzierten Energiebedarf erfüllen wir die jeweils neuesten Anforderungen an energieeffizientes Bauen. Unsere Energieberater sind gerne für Sie da.',
  },
  {
    titel: 'Traumlagen',
    text: 'Dank unseres Netzwerks können wir Ihnen Einfamilienhäuser, Doppelhäuser, Stadthäuser und Wohnungen in ausgesuchten, ruhigen Lagen mit bester Infrastruktur anbieten.',
  },
]

export function Projekte() {
  useSeitenTitel('Projekte')

  return (
    <>
      <SeitenKopf titel="Unsere Formel für Ihr Glück" eyebrow="Projekte & Referenzen" bild="/bilder/material-auswahl.webp" />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-6 md:grid-cols-3">
          {formel.map((f, i) => (
            <div key={f.titel} className="border-t-4 border-marke bg-stein p-7">
              <p className="font-display text-sm font-bold text-marke">0{i + 1}</p>
              <h2 className="mt-2 text-2xl font-extrabold">{f.titel}</h2>
              <p className="mt-3 leading-relaxed text-anthrazit/80">{f.text}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>Aktuell</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Aktuelle Projekte</h2>
            <ul className="mt-8 divide-y divide-linie border-y border-linie">
              {aktuelleProjekte.map((p) => (
                <li key={p} className="flex gap-3 py-3.5 font-semibold">
                  <span className="mt-2.5 h-1.5 w-3 shrink-0 bg-marke" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <Galerie bilder={aktuelleBilder} />
        </Container>
      </section>

      <section className="bg-stein py-20 sm:py-28">
        <Container>
          <Eyebrow>Vorher / Nachher</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Der Unterschied einer Sanierung</h2>
          <p className="mt-4 text-anthrazit/75">Ziehen Sie den Regler, um den Zustand vor und nach der Sanierung zu vergleichen.</p>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {vorherNachher.map((v) => (
              <VorherNachher key={v.titel} {...v} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Eyebrow>Referenzen</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Abgeschlossene Projekte</h2>
          <div className="mt-10">
            <Galerie bilder={abgeschlosseneBilder} />
          </div>
        </Container>
      </section>

      <section className="bg-anthrazit py-20 sm:py-24">
        <Container>
          <Eyebrow hell>Zufriedene Kunden</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Für wen wir arbeiten</h2>
          <p className="mt-4 text-white/75">Zu unseren Geschäftskunden zählen unter anderem namhafte Münchner Unternehmen:</p>
          <ul className="mt-10 grid gap-x-10 gap-y-3 text-white/90 sm:grid-cols-2 lg:grid-cols-3">
            {kunden.map((k) => (
              <li key={k} className="border-b border-white/10 pb-3">
                {k}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-white/75">sowie diverse Architekten und private Bauherren.</p>
        </Container>
      </section>

      <KontaktBand />
    </>
  )
}
