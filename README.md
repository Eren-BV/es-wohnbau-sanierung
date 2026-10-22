# ES Wohnbau & Sanierung – Webseite

Neubau der Firmenseite (früher Joomla unter es-wohnbau-sanierung.de) als React-Projekt.
Texte, Bilder und Videos stammen aus dem sauberen Akeeba-Backup vom 05.01.2024 – **keine** Datei
aus der im Juni 2026 kompromittierten Joomla-Installation wurde übernommen.

## Technik

Vite + React 19 + TypeScript + Tailwind CSS v4 + React Router. Schriften (Raleway, Open Sans) werden
lokal ausgeliefert (kein Google-Fonts-Abruf, DSGVO-freundlich).

```bash
npm install
npm run dev     # http://localhost:5181
npm run build   # Ausgabe in dist/
```

## Aufbau

| Pfad | Inhalt |
|---|---|
| `src/data/firma.ts` | Adresse, Telefon, E-Mail, Navigation – hier zentral ändern |
| `src/data/gewerke.ts` | Texte und Bilder der 7 Gewerke-Seiten |
| `src/data/projekte.ts` | Projektlisten, Galerien, Vorher/Nachher, Kunden, Partner |
| `src/pages/` | Eine Datei pro Seite (Start, Über uns, Generalsanierung, Gewerke, Projekte, Kontakt, Impressum, Datenschutz) |
| `src/components/` | Kopfzeile, Fußzeile, Galerie mit Vollbild, Vorher/Nachher-Regler, wiederkehrende Bausteine |
| `public/bilder/` | Optimierte Bilder (WebP, max. 2000 px) |
| `public/videos/` | Startseiten-Video (stumm, Schleife) und Sanierungsfilm |

## Veröffentlichen über Lovable

1. In Lovable ein neues Projekt anlegen und unter *GitHub → Connect* mit GitHub verbinden
   (Lovable legt dabei ein Repository an).
2. Dieses Projekt in genau dieses Repository pushen (Branch `main`). Lovable übernimmt den Stand automatisch.
3. In Lovable auf *Publish* klicken und unter *Settings → Domains* die Domain verbinden.

## Vor dem Livegang prüfen

- **Impressum:** Für eine GmbH & Co. KG fehlen Registergericht und Registernummer der KG sowie Name,
  Sitz und Register der Komplementär-GmbH. Die alte Seite führte „146/190/71078“ als USt-IdNr. –
  das ist dem Format nach eine Steuernummer; eine USt-IdNr. beginnt mit „DE“.
- **Datenschutz:** Den Hosting-Anbieter (z. B. Lovable) namentlich nennen und die Erklärung rechtlich prüfen lassen.
- **Planung:** Der Text der Gewerk-Seite „Planung“ ist neu zusammengestellt (im alten CMS war er eine Kopie von „Trockenbau“).
