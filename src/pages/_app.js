import '@/styles/globals.css'
import { Figtree } from 'next/font/google'

const figtree = Figtree({ subsets: ['latin'] })
export default function App({ Component, pageProps }) {

  return (
  <main className={figtree.className}>

    <Component {...pageProps} />
  </main>
  )
}
