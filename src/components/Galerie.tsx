import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { Bild } from '../data/projekte'

// Bildraster mit Vollbild-Ansicht (Pfeiltasten, Escape)
export function Galerie({ bilder }: { bilder: Bild[] }) {
  const [aktiv, setAktiv] = useState<number | null>(null)

  const blaettern = useCallback(
    (richtung: number) => setAktiv((i) => (i === null ? null : (i + richtung + bilder.length) % bilder.length)),
    [bilder.length],
  )

  useEffect(() => {
    if (aktiv === null) return
    const taste = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAktiv(null)
      if (e.key === 'ArrowRight') blaettern(1)
      if (e.key === 'ArrowLeft') blaettern(-1)
    }
    window.addEventListener('keydown', taste)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', taste)
      document.body.style.overflow = ''
    }
  }, [aktiv, blaettern])

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {bilder.map((bild, i) => (
          <button
            key={bild.src}
            type="button"
            onClick={() => setAktiv(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-stein text-left"
          >
            <img
              src={bild.src}
              alt={bild.titel}
              loading="lazy"
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8 text-xs font-semibold text-white sm:text-sm">
              {bild.titel}
            </span>
          </button>
        ))}
      </div>

      {aktiv !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={bilder[aktiv].titel}
          onClick={() => setAktiv(null)}
        >
          <figure className="max-h-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <img src={bilder[aktiv].src} alt={bilder[aktiv].titel} className="max-h-[80vh] w-auto rounded" />
            <figcaption className="mt-3 text-center text-sm text-white/85">
              {bilder[aktiv].titel} · {aktiv + 1} / {bilder.length}
            </figcaption>
          </figure>
          <button type="button" className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Schließen">
            <X className="size-6" />
          </button>
          <button
            type="button"
            className="absolute left-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-6"
            onClick={(e) => {
              e.stopPropagation()
              blaettern(-1)
            }}
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="size-7" />
          </button>
          <button
            type="button"
            className="absolute right-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-6"
            onClick={(e) => {
              e.stopPropagation()
              blaettern(1)
            }}
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="size-7" />
          </button>
        </div>
      )}
    </>
  )
}
