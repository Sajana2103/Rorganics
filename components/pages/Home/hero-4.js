const HeroForth = () => {
  return(
    <div id="home-diversed"  className="h-screen py-20 xl:py-28 xl:px-24 p-4  threejs-content-2" >
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

  </div>
  )
}
export default HeroForth