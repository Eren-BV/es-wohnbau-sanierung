import { Container, Eyebrow, GewerkeRaster, KontaktBand, SeitenKopf } from '../components/Bausteine'
import { partner } from '../data/projekte'
import { useSeitenTitel } from '../lib/useSeitenTitel'

export function Gewerke() {
  useSeitenTitel('Gewerke')

  return (
    <>
      <SeitenKopf titel="Alle Gewerke aus einer Hand" eyebrow="Gewerke" bild="/bilder/planung-grundriss.webp">
        <p>
          Ihr Vorteil bei uns: Wir decken alle wesentlichen Gewerke am Bau selbst ab. Bei allen übrigen Gewerken haben wir jahrelange,
          verlässliche und regionale Partnerschaften – sei es beim Zimmerer oder bei der Elektrik. Die Abstimmung übernehmen immer wir.
        </p>
      </SeitenKopf>

      <section className="py-20 sm:py-28">
        <Container>
          <GewerkeRaster />
        </Container>
      </section>

      <section className="bg-stein py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Unsere Partner</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Ein zuverlässiges Netzwerk</h2>
            <p className="mt-5 text-lg leading-relaxed text-anthrazit/80">
              Neben unseren Eigengewerken haben wir in den letzten 20 Jahren ein zuverlässiges Partnernetzwerk aufgebaut, auf das wir uns –
              ebenso wie unsere Kunden – jederzeit verlassen können: bei Termineinhaltung, Arbeitsqualität und Kommunikation auf der
              Baustelle. Bei all unseren Partnern handelt es sich um bodenständige Handwerksbetriebe aus dem Großraum München.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {partner.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex aspect-[8/5] items-center justify-center rounded-lg bg-white p-5 transition-shadow hover:shadow-md"
                title={`${p.name} – zur Partner-Webseite`}
              >
                <img src={p.logo} alt={p.name} loading="lazy" className="max-h-full w-auto object-contain" />
              </a>
            ))}
          </div>
        </Container>
      </section>

      <KontaktBand />
    </>
  )
}
