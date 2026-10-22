import { useState } from 'react'

// Vorher/Nachher-Vergleich mit Schieberegler
export function VorherNachher({ titel, vorher, nachher }: { titel: string; vorher: string; nachher: string }) {
  const [anteil, setAnteil] = useState(50)

  return (
    <figure>
      <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-stein select-none">
        <img src={nachher} alt={`${titel} – nachher`} loading="lazy" className="absolute inset-0 size-full object-cover" />
        <img
          src={vorher}
          alt={`${titel} – vorher`}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
          style={{ clipPath: `inset(0 ${100 - anteil}% 0 0)` }}
        />
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${anteil}%` }} aria-hidden>
          <span className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm font-bold text-marke shadow-lg">
            ↔
          </span>
        </div>
        <span className="absolute top-3 left-3 rounded bg-black/60 px-2 py-1 text-xs font-semibold text-white">Vorher</span>
        <span className="absolute top-3 right-3 rounded bg-marke px-2 py-1 text-xs font-semibold text-white">Nachher</span>
        <input
          type="range"
          min={0}
          max={100}
          value={anteil}
          onChange={(e) => setAnteil(Number(e.target.value))}
          className="absolute inset-0 size-full cursor-ew-resize opacity-0"
          aria-label={`${titel}: Vorher/Nachher vergleichen`}
        />
      </div>
      <figcaption className="mt-3 font-display font-semibold">{titel}</figcaption>
    </figure>
  )
}
