import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import clsx from 'clsx'
import { firma } from '../data/firma'
import { gewerke } from '../data/gewerke'

// Kleine wiederkehrende Bausteine der Seiten

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx('mx-auto max-w-7xl px-4 sm:px-6', className)}>{children}</div>
}

export function Eyebrow({ children, hell }: { children: ReactNode; hell?: boolean }) {
  return (
    <p
      className={clsx(
        'flex items-center gap-3 font-display text-xs font-bold tracking-[0.25em] uppercase',
        hell ? 'text-white/85' : 'text-marke',
      )}
    >
      <span className={clsx('h-0.5 w-8', hell ? 'bg-white/85' : 'bg-marke')} aria-hidden />
      {children}
    </p>
  )
}

export function SeitenKopf({ titel, eyebrow, bild, children }: { titel: string; eyebrow?: string; bild: string; children?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden bg-anthrazit">
      <img src={bild} alt="" className="absolute inset-0 -z-10 size-full object-cover opacity-55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-anthrazit/90 via-anthrazit/60 to-anthrazit/10" aria-hidden />
      <Container className="py-20 sm:py-28">
        {eyebrow && <Eyebrow hell>{eyebrow}</Eyebrow>}
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">{titel}</h1>
        {children && <div className="mt-5 max-w-2xl text-lg text-white/85">{children}</div>}
      </Container>
    </section>
  )
}

export function Fliesstext({ html, className }: { html: string; className?: string }) {
  // Inhalte stammen aus unseren eigenen Datendateien, nicht aus Nutzereingaben
  return <div className={clsx('fliesstext leading-relaxed text-anthrazit/85', className)} dangerouslySetInnerHTML={{ __html: html }} />
}

export function KontaktBand({ titel = 'Sprechen Sie mit uns über Ihre Immobilie!', untertitel }: { titel?: string; untertitel?: string }) {
  return (
    <section className="bg-marke">
      <Container className="flex flex-col items-start justify-between gap-8 py-14 lg:flex-row lg:items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{titel}</h2>
          {untertitel && <p className="mt-3 text-lg text-white/85">{untertitel}</p>}
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={firma.telefonLink}
            className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-marke transition-transform hover:-translate-y-0.5"
          >
            <Phone className="size-5" aria-hidden />
            {firma.telefon}
          </a>
          <a
            href={`mailto:${firma.email}`}
            className="flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Mail className="size-5" aria-hidden />
            E-Mail schreiben
          </a>
        </div>
      </Container>
    </section>
  )
}

export function GewerkeRaster({ ohne }: { ohne?: string }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {gewerke
        .filter((g) => g.slug !== ohne)
        .map((g) => (
          <Link
            key={g.slug}
            to={`/gewerke/${g.slug}`}
            className="group relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-lg bg-anthrazit p-6"
          >
            <img
              src={g.bild}
              alt=""
              loading="lazy"
              className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-anthrazit/90 via-anthrazit/30 to-transparent" aria-hidden />
            <h3 className="text-xl font-extrabold tracking-wide text-white uppercase">{g.titel}</h3>
            <p className="mt-1 text-sm text-white/80">{g.kurz}</p>
            <span className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-white">
              Mehr erfahren <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </Link>
        ))}
    </div>
  )
}
