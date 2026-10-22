// Projekte und Referenzen aus der bisherigen Webseite ("Referenzen"-Seite)
export type Bild = { src: string; titel: string }

export const aktuelleProjekte = [
  'Neubau Doppelhaus, Starnberg',
  'Neubau Einfamilienhaus, Starnberg',
  'Energetische Sanierung Mehrfamilienhaus, Fürstenfeldbruck',
  'Generalsanierung 3-Zimmer-Wohnung, Mammendorf',
  'Projektentwicklung Grundstück, Grafrath',
  'Projektentwicklung Grundstück, Hechendorf',
  'Projektentwicklung Grundstück, Bachhausen',
]

export const aktuelleBilder: Bild[] = [
  { src: '/bilder/projekt-starnberg-luftbild.webp', titel: 'Einfamilienhaus & Doppelhaus (Neubau)' },
  { src: '/bilder/projekt-doppelhaus-visualisierung.webp', titel: 'Doppelhaus (Visualisierung)' },
  { src: '/bilder/projekt-einfamilienhaus-visualisierung.webp', titel: 'Einfamilienhaus (Visualisierung)' },
  { src: '/bilder/projekt-neubau-luftbild.webp', titel: 'Neubau Doppelhaus' },
  { src: '/bilder/planung-beratung.webp', titel: 'Projektentwicklung Grundstück' },
  { src: '/bilder/projekt-mfh-vorher.webp', titel: 'Mehrfamilienhaus (energetische Sanierung) – vorher' },
]

export const abgeschlosseneBilder: Bild[] = [
  { src: '/bilder/sanierung-muenchen-1.webp', titel: 'Generalsanierung München' },
  { src: '/bilder/sanierung-muenchen-2.webp', titel: 'Generalsanierung München' },
  { src: '/bilder/sanierung-muenchen-3.webp', titel: 'Generalsanierung München' },
  { src: '/bilder/treppenhaussanierung.webp', titel: 'Treppenhaussanierung' },
  { src: '/bilder/kemptener-wohnzimmer.webp', titel: 'Wohnungssanierung – Wohnzimmer' },
  { src: '/bilder/kemptener-bad.webp', titel: 'Wohnungssanierung – Bad' },
  { src: '/bilder/kemptener-balkon.webp', titel: 'Wohnungssanierung – Balkon' },
  { src: '/bilder/mehrfamilienhaus-isar.webp', titel: 'Mehrfamilienhaus' },
  { src: '/bilder/mehrfamilienhaus-a.webp', titel: 'Mehrfamilienhaus' },
  { src: '/bilder/mehrfamilienhaus-b.webp', titel: 'Mehrfamilienhaus' },
  { src: '/bilder/reihenhaus-vogelperspektive.webp', titel: 'Reihenhaus' },
  { src: '/bilder/reihenhaus-abend.webp', titel: 'Reihenhaus' },
  { src: '/bilder/badgestaltung.webp', titel: 'Badgestaltung' },
  { src: '/bilder/badumbau.webp', titel: 'Badumbau' },
  { src: '/bilder/bad-neubau.webp', titel: 'Bad (Neubau)' },
  { src: '/bilder/neubau-gaskamin.webp', titel: 'Neubau mit Gaskamin' },
]

export const vorherNachher = [
  { titel: 'Haussanierung – Wohnraum', vorher: '/bilder/wohnraum-vorher.webp', nachher: '/bilder/wohnraum-nachher.webp' },
  { titel: 'Haussanierung – Treppe', vorher: '/bilder/treppe-vorher.webp', nachher: '/bilder/treppe-nachher.webp' },
]

export const kunden = [
  'HF Sedlmayr Grundstücksverwaltungs-GmbH & Co. KG',
  'Berghammer Grundbesitz-Verwaltung GmbH & Co. KG',
  'Gemeinnütziger Wohnungsverein München 1899 e.V.',
  'Haus am Karlstor Grundstücksverwaltung GmbH',
  'Hotel Park Inn München Ost GmbH',
  'K/S Milbertshofen c/o Kaufhold Immobilien GmbH',
  'Richter & Röhrig GmbH',
  'S&R Palaisbau – Projekt-GbR',
  'Sedlmayr Grund und Immobilien KGaA',
  'SGI Grundbesitz GmbH & Co.',
  'Immobilien-Verwaltungs OHG',
  'Spaten-Löwenbräu GmbH',
]

export const partner = [
  { name: 'Baustoff Union', logo: '/bilder/partner-2.png', url: 'https://www.baustoff-union.de' },
  { name: 'KONE', logo: '/bilder/partner-5.png', url: 'https://www.kone.de/' },
  { name: 'Wagner Fenster & Türen', logo: '/bilder/partner-10.png', url: 'http://www.wagner-fenster-tueren.de/' },
  { name: 'Kraft Baustoffe', logo: '/bilder/partner-6.png', url: 'https://www.kraft-baustoffe.de/' },
  { name: 'Richter & Röhrig', logo: '/bilder/partner-8.png', url: 'https://www.richter-roehrig.de/' },
  { name: 'Ing. Strasser', logo: '/bilder/partner-9.png', url: 'https://www.ing-strasser.de/' },
  { name: 'MBI Mühlberg', logo: '/bilder/partner-7.png', url: 'https://mbi-muehlberg.de/' },
  { name: 'Georg Hartmann', logo: '/bilder/partner-3.png', url: 'http://www.georghartmann.com/' },
  { name: 'Hintermeier Dach', logo: '/bilder/partner-4.png', url: 'https://www.hintermeier-dach.de/' },
]
