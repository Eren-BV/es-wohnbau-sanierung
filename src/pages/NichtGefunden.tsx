import { Link } from 'react-router-dom'
import { Container } from '../components/Bausteine'
import { useSeitenTitel } from '../lib/useSeitenTitel'

export function NichtGefunden() {
  useSeitenTitel('Seite nicht gefunden')

  return (
    <Container className="py-28 text-center">
      <p className="font-display text-7xl font-extrabold text-marke">404</p>
      <h1 className="mt-4 text-3xl font-extrabold">Diese Seite gibt es nicht (mehr).</h1>
      <p className="mt-3 text-anthrazit/70">Vielleicht finden Sie, was Sie suchen, auf unserer Startseite.</p>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-marke px-6 py-3 font-semibold text-white hover:bg-marke-dunkel">
        Zur Startseite
      </Link>
    </Container>
  )
}
