const HeroSecond = () => {
  return (
    <div className=" h-screen page-content-wrapper" >
      <div className="relative  ">
        <video className="absolute top-0 left-0 object-cover -z-10 pointer-events-none" 
        autoPlay loop muted playsInline ><source src='assets/videos/city_2.mp4' /></video>
      </div>
      <div>

        <div className=" h-screen xl:items-end flex items-center xl:px-24 xl:py-20 px-4  " >
          <div className="xl:flex gap-10">
          <div className=" xl:w-2/3 ">

            <h1 className="heading-second text-8xl font-normal uppercase leading-none split-text-large">FMCG SALES & WHOLESALES</h1>
            <h1 className="heading-1 text-8xl font-normal uppercase leading-none"></h1>
          </div>

          <div className=" xl:w-1/3 self-center">
            <h2 className="xl:w-2/3 mt-2 text-left yellow heading-4 font-semibold uppercase leading-none">Licensed food and beverage importers in the GGC.</h2>
            <p className=" mt-2 leading-tight" >
              we source and supply quality food, ingredients and FMCG products to all key
              market sectors and strive to establish a strong & long-term strategic partnership
              with our clients.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>

  )
}

export default HeroSecond