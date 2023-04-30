const HeroThirdAndForth = () => {
  return (
    <div className=" " >
      <div className="relative ">
        <video className="absolute top-0 left-0 right-0  -z-10 pointer-events-none"
          autoPlay loop muted playsInline ><source src='assets/videos/world_low.mp4' /></video>
      </div>
      <div>

        <div className="h-screen  xl:py-20 xl:px-24 p-4  " >
          <div className=" xl:w-1/2 ">

            <h1 className="heading-second text-8xl font-normal uppercase leading-none">Innovative Technology</h1>
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

        <div className="h-screen xl:py-20 xl:px-24 p-4  " >
        <h1 className="heading-second self font-normal uppercase leading-none xl:text-right">
              Diversified Products
            </h1>

          <div className="mt-10 xl:text-right flex xl:justify-end">
            <div className="xl:w-1/3 xl:flex justify-end flex-wrap">

              <h2 className="mt-2  yellow heading-4 font-semibold uppercase leading-none">
                HACCP Certified supplier to over 1000+ businesses and customers all over UAE</h2>
              <p  className=" mt-4 leading-tight" >
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
    </div>

  )
}

export default HeroThirdAndForth