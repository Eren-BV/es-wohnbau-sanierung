import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Container, Eyebrow, Fliesstext, GewerkeRaster, KontaktBand, SeitenKopf } from '../components/Bausteine'
import { gewerke } from '../data/gewerke'
import { useSeitenTitel } from '../lib/useSeitenTitel'
import { NichtGefunden } from './NichtGefunden'

export function GewerkDetail() {
  const { slug } = useParams()
  const gewerk = gewerke.find((g) => g.slug === slug)
  useSeitenTitel(gewerk?.titel)

  if (!gewerk) return <NichtGefunden />

  return (
    <>
      <SeitenKopf titel={gewerk.titel} eyebrow="Gewerke" bild={gewerk.headerBild} />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Link to="/gewerke" className="inline-flex items-center gap-2 text-sm font-semibold text-anthrazit/60 hover:text-marke">
              <ArrowLeft className="size-4" aria-hidden /> Alle Gewerke
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">{gewerk.ueberschrift}</h2>
            <Fliesstext html={gewerk.text} className="mt-6 text-lg" />
          </div>
          <img src={gewerk.bild} alt={gewerk.titel} className="aspect-[4/5] w-full rounded-lg object-cover shadow-xl lg:sticky lg:top-28" />
        </Container>
      </section>

      <section className="bg-stein py-20 sm:py-24">
        <Container>
          <Eyebrow>Weitere Gewerke</Eyebrow>
          <div className="mt-8">
            <GewerkeRaster ohne={gewerk.slug} />
          </div>
        </Container>
      </section>

      <KontaktBand />
    </>
  )
}
