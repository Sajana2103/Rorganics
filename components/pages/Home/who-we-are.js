import Image from "next/image"
import { customLoader } from "../../customFunctions"
import RorganicsStats from "./rorganics-stats"

const WhoWeAre = () => {
  return (
    <div id='home-who-what' className="">

      <Image id="sand-dune-bg"
        className="absolute -z-30 w-screen object-cover lg:h-screen 
       lg:left-0 lg:right-0 h-screen"
        loading="eager" src={'/assets/images/home/bg-sand-dunes.jpg'} width={1000} height={1000} loader={customLoader} />
      <div id="home-who-we-are" >
        <div className="xl:h-screen xl:py-20 xl:px-24 px-4 pt-32">
          <h2 className="heading-3 font-bold xl:font-normal">Who We Are</h2>
          <div className="xl:flex xl:gap-20 mt-2">
            <h1 className="xl:w-3/4 heading-2 leading-none font-semibold xl:font-normal split-text-medium">Rorganics aims to be the favored
              brand building partner in the region.
            </h1>


            <div>
              <h2 className="heading-3 font-semibold mt-2">We<span className=" "> believe in</span></h2>
              <div className="heading-4 font-bold yellow">
                <h3>01. Commitment</h3>
                <h3>02. Integrity</h3>
                <h3>03. Respect</h3>
                <h3>04. Partnership</h3>
                <h3>05. Results</h3>
              </div>
            </div>


          </div>
          <div className="xl:w-3/4">
            <div className="xl:mt-10 my-4 h-px yellow-bg"></div>
            <div className="xl:flex ">
              <h2 className="heading-4 leading-none font-bold xl:font-normal ">Rorganics Industry Leading Standards</h2>
              <p className="w-3/4 mt-2 yellow ">We work alongside brand owners to develop and strengthen their
                brands. Our key objective is to drive faster brand growth compared
                to their relevent categories, achieved by utilizing category insights and
                ensuring impeccable execution at the point of purchase.
              </p>
            </div>
          </div>
          <div id="who-images-container" className="mt-4 flex flex-nowrap xl:gap-20 gap-12 overflow-x-auto md:overflow-x-hidden overflow-y-hidden">
            <div className="w-72 lg:h-72 h-48  shrink-0 who-image">

              <Image loading="eager" loader={customLoader} className="h-80 object-cover" alt="rorganics-brands-we-help" src="/assets/images/slider/1.jpg" height={400} width={300} />
            </div>
            <div className="w-72 lg:h-72 h-48  shrink-0 who-image">

              <Image loading="eager" loader={customLoader} className="h-80 object-cover" alt="rorganics-brands-we-help" src="/assets/images/slider/2.jpg" height={400} width={300} />
            </div>
            <div className="w-72 lg:h-72 h-48  shrink-0 who-image">

              <Image loading="eager" loader={customLoader} className="h-80 object-cover" alt="rorganics-brands-we-help" src="/assets/images/slider/3.jpg" height={400} width={300} />
            </div>
            <div className="w-72 lg:h-72 h-48  shrink-0 who-image">

              <Image loading="eager" loader={customLoader} className="h-80 object-cover" alt="rorganics-brands-we-help" src="/assets/images/slider/4.jpg" height={400} width={300} />
            </div>
            <div className="w-72 lg:h-72 h-48  shrink-0 who-image">

              <Image loading="eager" loader={customLoader} className="h-80 object-cover" alt="rorganics-brands-we-help" src="/assets/images/slider/5.jpg" height={400} width={300} />
            </div>


          </div>
        </div>
      </div>
      <div className="xl:h-screen xl:py-20 xl:px-24 px-4 pt-10">
        <h2 className="heading-3">
          What we do
        </h2>
        <div className="xl:flex gap-40">
          <div className=" xl:w-2/5">
            <h1 className="heading-2 leading-none split-text-medium">A solution for every customer.</h1>
            <div className="mt-6">
              <div>
                <p className="text-xl xl:text-4xl font-normal">FMCG Import & Export</p>
                <div className="xl:my-4 my-1 bg-white h-px"></div>
              </div>
              <div>
                <p className="text-xl xl:text-4xl font-normal">Sales & Distribution</p>
                <div className="xl:my-4 my-1 bg-white h-px"></div>
              </div>
              <div>
                <p className="text-xl xl:text-4xl font-normal">Storage</p>
                <div className="xl:my-4 my-1 bg-white h-px"></div>
              </div>
              <div>
                <p className="text-xl xl:text-4xl font-normal">Market Evaluation and Statistics</p>
                <div className="xl:my-4 my-1 bg-white h-px"></div>
              </div>
            </div>
          </div>

          <div className="xl:w-2/5">
            <h3 className="mt-4 xl:mt-0 heading-3 yellow xl:font-thin leading-tight">The foundation of Rorganics achievements comes
              through a customer-centric approach, which is enriched by thorough market research and sets
              Rorganics apart from it&apos;s competitors.</h3>
            <br />
            <p className=" xl:text-xl text-lg leading-tight font-thin">The company relies on highly skilled and experienced teams for Sales, Marketing, Logistics
              and General Management, who bring a wealth of international expertise to the table.</p>
            <br />
            <p className="xl:text-xl text-lg leading-tight font-thin">Rorganics dedication to continuous learning and staff development ensures that this proficiency is
              constantly renewed.
            </p>
            <br />
            <div className="p-4 max-w-fit border-2 border-white border-solid bdr-mid">
              <div className=" flex xl:items-end items-center ">

                <p className="font-semibold ">Rorganics in <span className="xl:hidden">Numbers</span></p>
                <h2 className="hidden xl:block h-auto text-lg xl:text-6xl font-bold " style={{ lineHeight: 0.9 }}>Numbers</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RorganicsStats />
    </div>
  )
}

export default WhoWeAre