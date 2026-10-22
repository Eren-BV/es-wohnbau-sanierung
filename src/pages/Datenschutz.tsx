import { Container } from '../components/Bausteine'
import { firma } from '../data/firma'
import { useSeitenTitel } from '../lib/useSeitenTitel'

// Basiert auf der bisherigen Datenschutzerklärung. Google Fonts und Google Maps entfallen,
// weil die neue Seite Schriften selbst ausliefert und keine eingebettete Karte nutzt.
export function Datenschutz() {
  useSeitenTitel('Datenschutzerklärung')

  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <h1 className="text-4xl font-extrabold">Datenschutzerklärung</h1>

      <div className="mt-10 space-y-8 leading-relaxed text-anthrazit/85 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-bold [&_p+p]:mt-3">
        <section>
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere
            Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
          <h3>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten finden Sie unten sowie im Impressum.</p>
          <h3>Wie erfassen wir Ihre Daten?</h3>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, etwa wenn Sie uns per E-Mail oder Telefon kontaktieren.
            Andere Daten werden automatisch beim Besuch der Website durch die IT-Systeme unseres Hosting-Anbieters erfasst. Das sind vor allem
            technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>
          <h3>Wofür nutzen wir Ihre Daten?</h3>
          <p>Die Daten werden erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten und Ihre Anfragen zu beantworten.</p>
          <h3>Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen
            Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Einschränkung der Verarbeitung oder Löschung dieser Daten zu
            verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
        </section>

        <section>
          <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          <p>
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen Daten vertraulich und entsprechend
            der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
            kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>
          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            {firma.name}
            <br />
            {firma.strasse}
            <br />
            {firma.ort}
          </p>
          <p>
            Telefon: {firma.telefon}
            <br />
            E-Mail: {firma.email}
          </p>
          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte
            Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum
            Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>
          <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
          <p>
            Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständig ist
            das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.
          </p>
          <h3>Recht auf Datenübertragbarkeit</h3>
          <p>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten,
            an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
          </p>
          <h3>SSL- bzw. TLS-Verschlüsselung</h3>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
            dass die Adresszeile des Browsers mit „https://“ beginnt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
          <h3>Widerspruch gegen Werbe-E-Mails</h3>
          <p>
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
            Werbung und Informationsmaterialien wird hiermit widersprochen.
          </p>
        </section>

        <section>
          <h2>3. Datenerfassung auf unserer Website</h2>
          <h3>Hosting und Server-Log-Dateien</h3>
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet. Der Hosting-Anbieter erhebt und speichert automatisch Informationen
            in so genannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer-URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="mt-3">
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die Datenverarbeitung ist Art. 6
            Abs. 1 lit. f DSGVO; wir haben ein berechtigtes Interesse an der technisch fehlerfreien und sicheren Bereitstellung unserer Website.
          </p>
          <h3>Cookies</h3>
          <p>Diese Website setzt keine Cookies zu Analyse- oder Werbezwecken ein.</p>
          <h3>Anfrage per E-Mail oder Telefon</h3>
          <p>
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
            zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet (Art. 6 Abs. 1 lit. b DSGVO). Diese Daten geben wir
            nicht ohne Ihre Einwilligung weiter.
          </p>
        </section>

        <section>
          <h2>4. Schriftarten</h2>
          <p>
            Die auf dieser Website verwendeten Schriftarten werden lokal von unserem Server ausgeliefert. Eine Verbindung zu Servern von Google
            oder anderen Drittanbietern findet dabei nicht statt.
          </p>
        </section>
      </div>
    </Container>
  )
}
