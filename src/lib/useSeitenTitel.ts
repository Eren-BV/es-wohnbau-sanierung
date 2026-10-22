import { useEffect } from 'react'

const MARKE = 'ES Wohnbau & Sanierung'

export function useSeitenTitel(titel?: string) {
  useEffect(() => {
    document.title = titel ? `${titel} | ${MARKE}` : `${MARKE} – Generalsanierung aus einer Hand | Planegg bei München`
  }, [titel])
}
