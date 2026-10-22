import { Container, Eyebrow, KontaktBand, SeitenKopf } from '../components/Bausteine'
import { useSeitenTitel } from '../lib/useSeitenTitel'

export function Generalsanierung() {
  useSeitenTitel('Generalsanierung')

  return (
    <>
      <SeitenKopf titel="Ein guter Moment, um Ihr Haus oder Ihre Wohnung zu sanieren!" eyebrow="Generalsanierung" bild="/bilder/wohnraum-hell.webp">
        <p>Komplettsanierung von A bis Z – inklusive Planung und Baubetreuung.</p>
      </SeitenKopf>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed text-anthrazit/85">
            <Eyebrow>Wertsteigerung ohne Ärger</Eyebrow>
            <h2 className="pt-2 text-3xl font-extrabold sm:text-4xl">Sanierung von A bis Z</h2>
            <p>
              Haben Sie schon einmal darüber nachgedacht, den Wert Ihrer Immobilie zu steigern und dabei Arbeit, Zeit und Ärger zu sparen,
              weil Sie auf kompetente und verlässliche Profis bauen? Dann sind Sie bei uns genau richtig. Wir bieten Ihnen eine{' '}
              <strong className="font-semibold text-anthrazit">Komplettsanierung</strong> Ihrer Wohnung oder Ihres Hauses{' '}
              <strong className="font-semibold text-anthrazit">von A bis Z</strong> inklusive Planung und Baubetreuung.
            </p>
            <p>
              Geht es um Ihr <strong className="font-semibold text-anthrazit">Eigenheim</strong>, können Sie auf unsere Kreativität zählen
              und haben alle Möglichkeiten, mit uns Ihren Wohntraum zu erfüllen.
            </p>
            <p>
              Für einen nachhaltigen Werterhalt Ihrer <strong className="font-semibold text-anthrazit">Kapitalanlage</strong> bieten wir
              Ihnen interessante Ausstattungspakete zu einem besonders guten Preis-Leistungs-Verhältnis an.
            </p>
          </div>
          <div>
            <Eyebrow>Unser Film</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Wie wir arbeiten und was Ihre Sanierung kostet</h2>
            <video
              className="mt-6 aspect-video w-full rounded-lg bg-anthrazit shadow-xl"
              src="/videos/sanierungsfilm.mp4"
              poster="/bilder/sanierungsfilm-poster.webp"
              controls
              preload="none"
              playsInline
            />
          </div>
        </Container>
      </section>

      <section className="bg-stein py-20 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img src="/bilder/bad-dachgeschoss.webp" alt="Saniertes Bad im Dachgeschoss" loading="lazy" className="col-span-2 aspect-[16/10] w-full rounded-lg object-cover" />
            <img src="/bilder/bad-neubau.webp" alt="Modernes Bad" loading="lazy" className="aspect-square w-full rounded-lg object-cover" />
            <img src="/bilder/badumbau.webp" alt="Badumbau" loading="lazy" className="aspect-square w-full rounded-lg object-cover" />
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-anthrazit/85">
            <Eyebrow>Badsanierung</Eyebrow>
            <h2 className="pt-2 text-3xl font-extrabold sm:text-4xl">Wenn es um Ihre kleine Wellnessoase geht</h2>
            <p>Ein Bad ist heutzutage wesentlich mehr als einfach nur eine Nasszelle.</p>
            <p>
              Zu unseren Spezialitäten gehört deshalb auch die Badsanierung. Sie ist Bestandteil einer jeden Generalsanierung, und wir haben
              dabei die Möglichkeit, jeden Ihrer Wünsche zu erfüllen – gerade wenn es um Ihr Eigenheim geht.
            </p>
            <p>
              Handelt es sich hingegen um eine <strong className="font-semibold text-anthrazit">Kapitalanlage</strong> oder ein{' '}
              <strong className="font-semibold text-anthrazit">Verwaltungsobjekt</strong>, ist es sinnvoll, auf bewährte, zeitlose und
              robuste Qualitätsprodukte mit einem entsprechend guten Preis-Leistungs-Verhältnis zurückzugreifen. Auf ein modernes Design muss
              auch hier nicht verzichtet werden.
            </p>
            <p>
              Gerne schicken wir Ihnen eine <strong className="font-semibold text-anthrazit">Beispiel-Kalkulation</strong> für ein Bad zu,
              damit Sie ein Gefühl für die Kosten entwickeln.
            </p>
          </div>
        </Container>
      </section>

      <KontaktBand titel="Sprechen Sie mit uns über Ihre Wohnung oder Ihr Haus!" untertitel="Ob die eigenen vier Wände oder Ihre Kapitalanlage." />
    </>
  )
}
