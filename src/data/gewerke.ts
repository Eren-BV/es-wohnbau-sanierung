// Gewerke-Texte aus der bisherigen Webseite übernommen (Tippfehler korrigiert).
// Der Text "Planung" war im alten CMS versehentlich eine Kopie von "Trockenbau" –
// er ist hier aus den Aussagen der übrigen Seiten neu zusammengestellt.
export type Gewerk = {
  slug: string
  titel: string
  kurz: string
  bild: string
  headerBild: string
  ueberschrift: string
  text: string
}

export const gewerke: Gewerk[] = [
  {
    slug: 'abbruch',
    titel: 'Abbruch',
    kurz: 'Abbruch innen und außen, Schadstoffsanierung und fachgerechte Entsorgung.',
    bild: '/bilder/gewerk-abbruch.webp',
    headerBild: '/bilder/gewerk-abbruch-header.webp',
    ueberschrift: 'Abbruch – wir können auch das Grobe',
    text: `<p>Wir sind auch Ihr Partner fürs Grobe: Abbruch im Innen- wie im Außenbereich. Natürlich haben wir auch Erfahrung mit Schadstoffbeseitigung. Zudem sorgen wir für die fachgerechte und umweltverträgliche Entsorgung des Bauschutts.</p>
<p>Unsere Leistungen umfassen:</p>
<ul>
<li>Abbrucharbeiten</li>
<li>Komplettabbruch</li>
<li>Industrieabbruch und Demontage</li>
<li>Stemmarbeiten von Beton, Mauerwerk, Fliesen</li>
<li>Asbest-, Schadstoff- und Mineralwollesanierung</li>
<li>Brandschaden- und Wasserschadensanierung</li>
<li>Kernbohrungen</li>
</ul>
<p>Sprechen Sie mit uns, wenn es um Abbrucharbeiten geht – sei es im Rahmen einer Gesamtsanierung oder „nur“ im Rahmen der Bauschuttentsorgung.</p>`,
  },
  {
    slug: 'maurerarbeiten',
    titel: 'Maurerarbeiten',
    kurz: 'Vom Mauerdurchbruch bis zu anspruchsvollen Arbeiten mit unseren Architekten.',
    bild: '/bilder/gewerk-maurer.webp',
    headerBild: '/bilder/gewerk-maurer-header.webp',
    ueberschrift: 'Maurerarbeiten – fürs Grobe wie fürs Feine',
    text: `<p>Wir sind Ihr Partner, wenn es um Maurerarbeiten unterschiedlichster Art geht. Dabei können Sie uns als Privatperson beauftragen, wenn es „nur“ um einen Mauerdurchbruch oder das fachmännische Verschließen eines Lochs in der Wand geht. Weiterführende, anspruchsvolle Maurerarbeiten bieten wir Ihnen unter Einbeziehung unserer Architekten.</p>
<p>Unsere Fachkräfte verfügen über eine sehr gute Ausbildung und über Fach-Know-how bei Themen im Trockenbau, in der Betonsanierung, beim Vollwärmeschutz, bei der Asbestsanierung und bei der Abdichtung.</p>
<p>Arbeiten am Wochenende oder Überstunden sind bei Bedarf für uns kein Problem. Wir sind gegebenenfalls rund um die Uhr für Sie da.</p>`,
  },
  {
    slug: 'trockenbau',
    titel: 'Trockenbau',
    kurz: 'Neue Wände, Dachschrägen, Schall- und Brandschutz.',
    bild: '/bilder/gewerk-trockenbau.webp',
    headerBild: '/bilder/gewerk-trockenbau-header.webp',
    ueberschrift: 'Wir ziehen neue Wände auf.',
    text: `<p>Sie möchten Ihre Wohnung oder Ihr Büro neu aufteilen und neue Wände und Türen oder Schiebetüren einziehen? Dann sind Sie bei uns genau richtig. Wir sind versiert im Trockenbau und in der Dachverkleidung. Dabei bieten wir Ihnen auch Lösungen für ganz spezielle Anforderungen – zum Beispiel beim Schallschutz, beim Brandschutz oder bei Feuchtigkeit.</p>
<p>Unsere Leistungen umfassen:</p>
<ul>
<li>Trockenbauwände in jeder Ausführung (Schallschutzwände, Brandschutzwände)</li>
<li>Dachschrägenbekleidung mit Gipskarton und wenn gewünscht die notwendige Dämmung</li>
</ul>
<p>Sprechen Sie mit uns, wenn es um Ihre neuen vier Wände geht.</p>`,
  },
  {
    slug: 'malerarbeiten',
    titel: 'Malerarbeiten',
    kurz: 'Malern, Tapezieren, Lackieren – mit nachhaltigen Produkten.',
    bild: '/bilder/gewerk-maler.webp',
    headerBild: '/bilder/gewerk-maler-header.webp',
    ueberschrift: 'Malern, Tapezieren, Lackieren und vieles mehr',
    text: `<p>Wir sind Ihr Partner, wenn es um Malerarbeiten unterschiedlichster Art geht. Dabei beraten wir Sie in Bezug auf Technik und Farben. Der Umwelt und Ihnen zuliebe setzen wir auf nachhaltige Produkte. So nutzen wir zum Beispiel für alle Lackierarbeiten ausschließlich langlebige, geruchsneutrale Natur-Harz-Lackfarben. Auf Wunsch verwenden wir auch allergiefreie Farben.</p>
<p>Unsere Leistung umfasst:</p>
<ul>
<li>Tapezierarbeiten</li>
<li>Zierprofile, Stuckleisten und Colorits für stilvolle Wände und Decken</li>
<li>Farbkonzepte für Wohnräume, Büro oder Gastronomie</li>
<li>Akustik und Dämmung</li>
<li>Fassadenanstriche</li>
<li>Treppenhausanstriche</li>
<li>Kleinstarbeiten, z. B. Türen und Fenster streichen</li>
</ul>
<p>Darüber hinaus haben wir große Erfahrung mit <strong>Wasserschäden und Schimmelpilz</strong>. Bei Wasserschäden schreiben wir außerdem auf Ihren Wunsch ein Gutachten, damit die Versicherung den Schaden zahlt.</p>
<p><strong>Oder darf es auch ein wenig exklusiv sein?</strong> Wenn Sie etwas Besonderes suchen, können wir Ihnen mit modernen Tapeten, ausgefallenen Handwerkstechniken oder Farben behilflich sein.</p>`,
  },
  {
    slug: 'boeden-und-fliesen',
    titel: 'Böden und Fliesen',
    kurz: 'Fachmännisches Fliesenlegen und Badsanierung aus einer Hand.',
    bild: '/bilder/gewerk-fliesen.webp',
    headerBild: '/bilder/gewerk-fliesen-header.webp',
    ueberschrift: 'Fliesenlegen – sauber verfugt',
    text: `<p>Wir sind Ihr Partner, wenn es um fachmännisches Fliesenlegen geht. Dabei verarbeiten wir unterschiedlichste Fliesenarten mit entsprechenden Anforderungen – sei es im Badbereich, im Keller oder auch im Außenbereich.</p>
<p><strong>Badsanierung aus einer Hand</strong><br />Sie möchten Ihr Bad sanieren und geschmackvoll neu gestalten? Dann sind wir Ihr Partner, denn neben dem bloßen Fliesenlegen bieten wir die komplette Badplanung aus Architektenhand sowie die komplette Umsetzung inklusive aller anfallenden Gewerke wie Sanitär und Technik.</p>
<p>Sprechen Sie mit uns, wenn es um Ihr Bad geht.</p>`,
  },
  {
    slug: 'installation',
    titel: 'Installation',
    kurz: 'Heizung, Lüftung und Sanitär – Installation, Reparatur, Wartung.',
    bild: '/bilder/gewerk-installation.webp',
    headerBild: '/bilder/gewerk-installation-header.webp',
    ueberschrift: 'Installation – Wasser, Wärme, Luft',
    text: `<p>Egal ob Sie eine Neuinstallation im Zuge einer Badsanierung, die ressourcengerechte Modernisierung Ihrer veralteten Heizungsanlage, den Einbau einer Anlage zur Gewinnung regenerativer Energien oder die Montage einer Klima- oder Lüftungsanlage in Ihren Dachgeschossräumen beabsichtigen: Wir führen alle Arbeiten rund um Heizung, Lüftung und Sanitär – egal ob Installation, Reparatur, Erneuerung oder Wartung – zuverlässig und unkompliziert für Sie aus.</p>`,
  },
  {
    slug: 'planung',
    titel: 'Planung',
    kurz: 'Planung, Architektenleistung und Baubetreuung aus unserem Haus.',
    bild: '/bilder/gewerk-planung.webp',
    headerBild: '/bilder/planung-plaene.webp',
    ueberschrift: 'Planung und Baubetreuung aus einer Hand',
    text: `<p>Mit unserem <strong>Architekten</strong> unterstützen wir Sie planerisch und koordinieren sämtliche Gewerke aus einer Hand. Sie erhalten die gesamte Planung sowie architektonische Leistungen aus unserem Haus – damit Ihre Sanierung reibungslos und zügig umgesetzt wird.</p>
<p>Unsere Leistungen umfassen:</p>
<ul>
<li>Planung und Baubetreuung Ihrer Sanierung von A bis Z</li>
<li>Architektenleistungen für Neubau und Bestand</li>
<li>Badplanung aus Architektenhand</li>
<li>Unterstützung bei der Planung und Projektierung von Grundstücken</li>
<li>Zentrale Koordination aller Gewerke und Partnerbetriebe</li>
</ul>
<p>Sprechen Sie mit uns, wenn Sie Ihr Vorhaben von Anfang an in erfahrene Hände geben möchten.</p>`,
  },
]
