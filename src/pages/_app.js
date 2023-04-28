import '@/styles/globals.css'
import { Figtree } from 'next/font/google'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import { ScrollTrigger } from 'gsap/dist/all'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'


const figtree = Figtree({ subsets: ['latin'] })
export default function App({ Component, pageProps }) {
  const mainRef = useRef()
  const isDesktop = useRef()
  useEffect(() => {
    if (mainRef.current) {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
      isDesktop.current = window.devicePixelRatio < 2 
      if(isDesktop.current){

        ScrollSmoother.create({
  
          wrapper: '.smooth-wrapper',
          content: '.smooth-content',
          smooth: 1.5,
          effects: true,
        })
      }
    }
  }, [])
  return (
    <main ref={mainRef} className={`${figtree.className}`}>
      <div className='smooth-wrapper' id='App'>
        
      <Navigation />

      <div className='smooth-content '>

        <Component {...pageProps} />
      <Footer />
      </div>

      </div>
    </main>
  )
}
