import { LineIcon, Logo, MenuIcon,LogoLoading } from "./icons"
import Link from "next/link"
import { useRouter } from "next/router"
import { ScrollSmoother } from "gsap/dist/ScrollSmoother"
import { gsap } from "gsap"
import { useState, useRef, useEffect } from "react"
import { useThrottledCallback } from "use-debounce"

const Navigation = () => {
  const router = useRouter()
  const { pathname } = router
  const [path, setPath] = useState('/')
  const isDesktop = useRef()
  let open = false
  const menuRef = useRef()
  const splitWords = useRef()
  const navRef = useRef()
  let splitArr = []
  useEffect(() => {
    if (navRef.current) {
      // gsap.registerPlugin(ScrollTrigger)
      setPath(window.location.pathname)
      splitArr  =pathname.split('/')
      splitWords.current =splitArr
      let dots = gsap.utils.toArray(".dot");
      gsap.set(dots,{opacity:0})
      gsap.timeline({defaults:{ease:'Power1.In',duration:0.5}})
      .to(dots,{opacity:1,stagger:0.3})
      .repeat(-1)
      // console.log('split words', pathname, splitWords)
    }
  }, [path,pathname])
  function capitalizeFirstLetter(str) {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  }
  function replaceHyphens(str) {
    const removed = str.replace(/-/g, ' ');
    return removed
  }
  const openMenu = () => {
    let smoother = ScrollSmoother.get()

    let menuTl
    isDesktop.current = window.devicePixelRatio < 2

    // console.log('menu location', pathRef.current)
    if (!menuTl) {

      menuTl = gsap.timeline({ defaults: { duration: 0.4, ease: 'Power4.easeIn' } })
      console.log('navigation runs')
      if (isDesktop.current) {
        // console.log('desktop menu', pageName.location)

        menuTl
          .pause()

          .to('#menu-wrapper', { display: 'block', duration: 0 })
          .fromTo('#menu-container', { yPercent: 100 }, { yPercent: 0, duration: 1 })

        // .fromTo('#scroll-skip', { display: path === '/' && pageName.location === 'hero' 
        // && isDesktop ? 'flex' : 'none',opacity:1 }, { display: 'none',opacity:0 }, '<')
        // .to(imgRef.current, { display: 'none', opacity: 0 }, '<')
        // .to('#logo-white', { display: 'block', opacity: 1 })
        // .fromTo('#menu-logo', { yPercent: -100 }, { yPercent: 0 }, '<-=75%')
        // .fromTo('#menu-links', { yPercent: 100 }, { yPercent: 0 }, '<')
        // .fromTo('#menu-contact-wrapper', { yPercent: 100 }, { yPercent: 0 }, '<')
        // .fromTo('#menu-contact', { opacity: 0 }, { opacity: 1 }, '<+=25%')

        // .to('#st1', { duration: 1, rotation: 45, translateY: '9px', transformOrigin: "50% 0px" }, '<')
        // .to('#st2', { duration: 1, rotation: -45, transformOrigin: "50%  0px" }, '<')
        // .to('.menu-text1', { color: 'white' }, '<')
        // .to('.menu-text2', { color: 'white' }, '<')
        // .to('#st1', { stroke: 'white' }, '<')
        // .to('#st2', { stroke: 'white' }, '<')



      } else {
        console.log('mobile menu')
        menuTl
          .pause()
          .to('#menu-wrapper', { display: 'block', duration: 0 })
          .fromTo('#menu-container', { yPercent: 100 }, { yPercent: 0, duration: 1 })
        // .fromTo('#scroll-skip-mobile', {
        //   display: path === '/' && pageName.location === 'hero'
        //     && !isDesktop ? 'flex' : 'none'
        // }, { display: 'none' }, '<')
        // // .to(imgRef.current, { display: 'none', opacity: 0 }, '<')
        // .to('#logo-white', { display: 'block', opacity: 1 },)
        // .to('#st1', { duration: 1, rotation: 45, translateY: '-1px', transformOrigin: "40% 0px" }, '<')
        // .to('#st2', { duration: 1, rotation: -45, yPercent: -50, transformOrigin: "40%  0px" }, '<')
        // .to('#st1', { stroke: 'white' }, '<')
        // .to('#st2', { stroke: 'white' }, '<')
        // .to('.menu-text1', { color: 'white' }, '<')
        // .to('.menu-text2', { color: 'white' }, '<')

        // .fromTo('#menu-links', { opacity: 0 }, { opacity: 1 })
        // .fromTo('#menu-contact', { opacity: 0 }, { opacity: 1 })

      }

    }

    if (open === false) {
      menuTl.play(0)
      open = true
      if (isDesktop.current) smoother.paused(open)
      console.log('menu open', open)
    }
    else {
      menuTl.reverse(0)
      open = false
      if (isDesktop.current) smoother.paused(open)
      console.log('menu open', open)
    }
  }
  const throttledClick = useThrottledCallback(openMenu, 1000, { trailing: false })
  return (
    <div ref={navRef}>
      <div id="loadingScreen" className=" maroon-bg fixed top-0 bottom-0 right-0 left-0 z-50
      flex flex-wrap justify-center text-center items-center
      ">
        <LogoLoading/>
      </div>

      <div className={'fixed z-40 content-center w-full'}>
        <div className=" grid h-16 grid-cols-2 content-center items-center 
        lg:my-10 lg:mx-4 my-4 mx-2">
          <div className="w-1/2">

          <Logo/>
          </div>
          <div className="flex flex-nowrap items-center justify-self-end"> 
            {
              splitWords.current && splitWords.current[1] ?
                <Link target="_self" href={`/${splitWords.current[1]}`}>
                  <h3 className="menu-text1 yellow bold" >
                    {replaceHyphens(capitalizeFirstLetter(splitWords.current[1]))}
                  </h3>
                </Link>
                :
                <h3 className="menu-text1 yellow bold"> Menu</h3>
            }
            <h3 className="menu-text2 yellow bold" >
              {
                splitWords.current && splitWords.current[2] ?
                  <span>
                    <span className="ml-4 mr-4">&#62;</span>
                    <span>{replaceHyphens(capitalizeFirstLetter(splitWords.current[2]))}</span>
                  </span>
                  : <></>
              }
            </h3>
          <MenuIcon ref={menuRef} onClick={throttledClick} />
          </div>




        </div>
      </div>
      <div id="menu-wrapper" className="fixed z-40 hidden">
        <div id="menu-container" className=" maroon-bg fixed top-0 left-0 right-0 bottom-0
      flex items-center justify-center ">
          <div id="menu-links" className=" xl:w-80  heading-3 white font-semibold">
            <Link className={path === '/' ? 'disabled' : ''} onClick={throttledClick} target="_blank" href="/">
              <LineIcon name="HOME" />
            </Link>

            <Link className={path === '/about-us' ? 'disabled' : ''} onClick={throttledClick} target="_blank" href="/about-us">
              <LineIcon name="ABOUT US" />
            </Link>
            <Link className={path === '/services' ? 'disabled' : ''} onClick={throttledClick} target="_blank" href="/services">
              <LineIcon name="SERVICES" />
            </Link>
            <Link className={path === '/brands' ? 'disabled' : ''} onClick={throttledClick} target="_blank" href="/brands">
              <LineIcon name="BRANDS" />
            </Link>
            <Link className={path === '/news' ? 'disabled' : ''} onClick={throttledClick} target="_blank" href="/news">
              <LineIcon name="NEWS" />
            </Link>
            <Link className={path === '/faq' ? 'disabled' : ''} onClick={throttledClick} target="_blank" href="/faq">
              <LineIcon name="FAQ" />
            </Link>
            <Link className={path === '/careers' ? 'disabled' : ''} onClick={throttledClick} target="_blank" href="/careers">
              <LineIcon name="CAREERS" />
            </Link>
            <Link className={path === '/contact-us' ? 'disabled' : ''} onClick={throttledClick} target="_blank" href="/contact-us">
              <LineIcon name="CONTACT US" />
            </Link>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Navigation













{/* <div className="w-1/2 flex text-sm gap-5 whitespace-nowrap text-amber-300 font-semibold">
          <p>HOME</p>
          <p>ABOUT US</p>
          <p>SERVICES</p>
          <p>BRANDS</p>
          <p>NEWS</p>
          <p>FAQ</p>
          <p>CAREERS</p>
          <p>CONTACT US</p>
        </div> */}