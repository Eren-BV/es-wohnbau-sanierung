import { Container } from '../components/Bausteine'
import { firma } from '../data/firma'
import { useSeitenTitel } from '../lib/useSeitenTitel'

// Übernommen aus dem bisherigen Impressum; Rechtsgrundlage von TMG auf DDG aktualisiert (TMG seit 14.05.2024 aufgehoben)
export function Impressum() {
  useSeitenTitel('Impressum')

  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <h1 className="text-4xl font-extrabold">Impressum</h1>

      <div className="mt-10 space-y-8 leading-relaxed text-anthrazit/85 [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-bold">
        <section>
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            {firma.name}
            <br />
            {firma.strasse}
            <br />
            {firma.ort}
          </p>
          <p className="mt-2">Vertreten durch: {firma.ansprechpartner}</p>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            Telefon: {firma.telefon}
            <br />
            Telefax: {firma.fax}
            <br />
            E-Mail: <a href={`mailto:${firma.email}`} className="text-marke underline">{firma.email}</a>
          </p>
        </section>

        <section>
          <h2>Steuernummer</h2>
          <p>{firma.steuernummer}</p>
        </section>

        <section>
          <h2>Streitschlichtung</h2>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </section>

        <section>
          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch
            nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="mt-3">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
            Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </section>

        <section>
          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
            diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
            überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p className="mt-3">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        <section>
          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
            nicht kommerziellen Gebrauch gestattet.
          </p>
          <p className="mt-3">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
          <p className="mt-3">Bildquellen: Shutterstock, Fotolia</p>
        </section>
      </div>
    </Container>
  )
}
