import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';
import { gsap } from "gsap/dist/gsap";
import { useRef, useState ,useLayoutEffect} from 'react';
import { InertiaPlugin } from 'gsap/dist/InertiaPlugin';
import { setupMenuTextAnimation, setupSplits } from './gsapFuncs';
import { useRouter } from 'next/router';

const OtherPagesWrapper = (props) => {
  const [pixelRatio, setPixelRatio] = useState(1)
  const [titles, setTitles] = useState([])
  const [anchors, setAnchors] = useState([])
  const router = useRouter()
  const scrollSmooth = useRef()
  const contentRef = useRef()
  const wrapperRef = useRef()

  useLayoutEffect(() => {
    if (wrapperRef.current && contentRef.current) {
      scrollSmooth.current = ScrollSmoother.get()
      let isDesktop = window.devicePixelRatio < 2
      // console.log('SCROLL SMOOTHER',ScrollSmoother.get())
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, InertiaPlugin)
      // gsap.set('.navigation-main', { yPercent: -100 })
      // gsap.set('.loadingScreen', { yPercent: 0 })

      if (scrollSmooth.current && isDesktop) {
        scrollSmooth.current.scrollTop(0)
      }
      gsap.to('.page-content-wrapper', { height: 'auto', duration: 0 })

      // if (!titles.length) {
      //   setTitles(prevState => {
      //     let titles = document.querySelectorAll('.pageTitle')
      //     return [...prevState, ...titles]
      //   })
      // }
      setPixelRatio(window.devicePixelRatio)
      // if (titles.length && (scrollSmooth.current || !isDesktop)) {
      if (scrollSmooth.current || !isDesktop) {

        
        
        setTimeout(() => {
          let navigationHeight = document.querySelector('#navigation-main').getClientRects().height


          if (router.asPath.length > router.pathname.length) {
            let { asPath, pathname } = router
            let anchor = asPath.replace(pathname, '')
            if (isDesktop) scrollSmooth.current.scrollTo(anchor, false, `top ${navigationHeight}px`)
            window.history.replaceState('', '', pathname)

          } else {
            if (!isDesktop) window.scrollTo(0, 0)

          }
          gsap.timeline({
            defaults: { ease: 'Power1.In', duration: 1 }, onComplete:
              () => {
                if (scrollSmooth.current ) {
                  
                  scrollSmooth.current.paused(false)
                  console.log('loading screen tween complete')
                } else {
                  window.scrollTo(0, 0)
                  gsap.to(document.querySelector('body'), { overflowY: 'scroll' })
                }
              }
          })
            .to('#loadingScreen', { yPercent: -100, duration: 0.5, })
            .to('#loadingScreen', { display: 'none', duration: 0.1 })
            let pages = document.querySelector('.main-page') 
            console.log('otherpages',pages)
            // let pages = document.querySelector('.main-page') 
            setupMenuTextAnimation(pages, gsap)
            setupSplits(SplitText, gsap)
          // let loadTransition = gsap.timeline({ defaults: { duration: 1, ease: 'Power1.easeIn' }, })
          //   .fromTo('#anchors', { display: 'none' }, { display: 'block' })
          //   .to('.loadingScreen', { yPercent: -100, duration: 1 })
          //   .to('.navigation-main', { yPercent: 0, duration: 0.3 },)
          //   .fromTo('.loadingScreen', { display: 'grid' }, { display: 'none', duration: 1 })
          //   .fromTo('body', { overflowY: 'hidden' }, { overflowY: 'scroll', duration: 1 }, '<+=10%')
          // if (isDesktop) gsap.fromTo('#anchors', { opacity: 0, xPercent: -100 }, { xPercent: 0, opacity: 1, duration: 1 })
        }, 2 * 1000)
        
      }
      //   if(!anchors.length){
      //     setAnchors(prevState=> {
      //     let anchors = document.querySelectorAll('.a-tags')
      //     return [...prevState, ...anchors]
      //   })
      // }
      // if(anchors.length){
      //   let pageContainers = contentRef.current.querySelectorAll('.pageContainer')
      //   console.log('pageContainers',pageContainers)
      //   anchors.forEach((anchor,idx) => {
      //     gsap.timeline({ scrollTrigger: { trigger:pageContainers[idx],end:'bottom center', start: 'top center',  markers: false, toggleActions: 'play reset complete reset', } })
      //     .fromTo(anchor, { color: '#1e4d8c' }, { color: '#ed7036' })
      //   })
      // }

      // console.log('useeffect runs',useeffect,anchors,titles)
    }

  }, [titles.length, anchors.length])

  return (
    <div>
      <div id='portal' ></div>

      <div ref={wrapperRef} className='page-wrapper'>
        {/* {
        pixelRatio < 2 &&
        <div id="anchors">
          <div id="anchors-con" className="flex wrap  bold blue">
        {
         titles.length  ?
          titles.map((title,idx) => {
           const AnchorTag = <span className="a-tags" onClick={() => {
            if(scrollSmooth.current){
              scrollSmooth.current.scrollTo(titles[idx],0.2,'top 100px')
            }
            }}  >{title.innerText}</span>
          
            return AnchorTag
          }) : <></>
        }
          </div>
        </div>
      } */}
        <div ref={contentRef} className='page-content'>


          {props.children}
        </div>

      </div>
    </div>
  )
}

export default OtherPagesWrapper