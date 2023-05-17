import { useRef, } from "react"
import Threejs from "./threejs/threejs"
import Loading from "./threejs/loader"

const HeroThirdAndForth = () => {
  const containerRef = useRef()
  const contentRef = useRef()

  return (
    <div className="h-screen  page-content-wrapper"  ref={containerRef} id="home-innovative" >
      <div className="relative  threejs-animation">
        <Loading container={contentRef.current} />

      </div>
      <div>
        <div ref={contentRef} className=" xl:py-20 xl:px-24 p-4" >
          <div className="threejs-content-1 ">
          <div className=" xl:w-3/4 ">

            <h1 className="heading-second text-8xl font-normal uppercase leading-none split-text-large
            mt-20 lg:mt-2">Innovative Technology</h1>
          </div>

          <div className="xl:w-1/2  mt-10 self-center">
            <h2 className="xl:w-2/3 mt-2 text-left yellow heading-4 font-semibold uppercase leading-none">
              Expansive warehousing facility in dubai</h2>
            <p className="xl:w-2/3 mt-2  leading-tight" >
              We utilize the most advanced computerized stock monitoring systems
              for our products and have large warehousing facilities. Frozen, chilled and
              ambient storage areas of bonded and duty paid warehousing at various locations
              within the UAE.
            </p>
            <div className="mt-4 bg-slate-50 rounded-2xl w-32 flex items-center h-8 text-gray-800
               justify-center gap-2">
              <span className=" text-red-500">&#62;</span><h3 className="uppercase black">More Info</h3>
            </div>
          </div>
          </div>
        
        <div id="home-diversed" className="mt-24 xl:mt-4 threejs-content-2" >
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 xl:block ">
            <h1 className="heading-second self font-normal uppercase leading-none xl:text-right split-text-large">
              Diversified
            </h1>
            <h1 className="heading-second self font-normal uppercase leading-none xl:text-right split-text-large">
              Products
            </h1>
          </div>


          <div className="mt-4 xl:mt-10 xl:text-right flex xl:justify-end">
            <div className="xl:w-1/3 xl:flex justify-end flex-wrap">

              <h2 className="mt-2  yellow heading-4 font-semibold uppercase leading-none">
                HACCP Certified supplier to over 1000+ businesses and customers all over UAE</h2>
              <p className=" mt-4 leading-tight" >
                We deliver exceptional quality standards, diversity of brands and progressive supply
                chain, offering the utmost service standards to our clients.
              </p>
              <div className="mt-4  bg-slate-50 rounded-2xl w-32 flex items-center h-8 text-gray-800
         justify-center gap-2">
                <span className=" text-red-500">&#62;</span><h3 className="uppercase black">More Info</h3>
              </div>
            </div>
          </div>

        </div>

        </div>
        {/* <div   className="h-screen py-20 xl:py-28 xl:px-24 p-4  threejs-slide" >
          <div className="flex items-center gap-4 xl:block">
          <h1 className="heading-second self font-normal uppercase leading-none xl:text-right split-text-large">
          Diversified
          </h1>
          <h1 className="heading-second self font-normal uppercase leading-none xl:text-right split-text-large">
            Products
          </h1>
          </div>


          <div className="mt-10 xl:text-right flex xl:justify-end">
            <div className="xl:w-1/3 xl:flex justify-end flex-wrap">

              <h2 className="mt-2  yellow heading-4 font-semibold uppercase leading-none">
                HACCP Certified supplier to over 1000+ businesses and customers all over UAE</h2>
              <p className=" mt-4 leading-tight" >
                We deliver exceptional quality standards, diversity of brands and progressive supply
                chain, offering the utmost service standards to our clients.
              </p>
              <div className="mt-4  bg-slate-50 rounded-2xl w-32 flex items-center h-8 text-gray-800
               justify-center gap-2">
                <span className=" text-red-500">&#62;</span><h3 className="uppercase black">More Info</h3>
              </div>
            </div>
          </div>

        </div> */}
      </div>
    </div>

  )
}

export default HeroThirdAndForth