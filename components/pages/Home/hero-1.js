// import videoOne from '../../../public/assets/videos/world.mp4'
const HeroFirst = () => {
  return (
    <div className="h-screen page-content-wrapper" >
      <div className="relative  ">
        <video  className=" absolute top-0 left-0 right-0 -z-10 pointer-events-none "
          autoPlay loop muted playsInline ><source src='assets/videos/cargoship_low.mp4' /></video>
      </div>
      <div>
        <div className="h-screen grid content-center">
          <div className="xl:py-32 xl:px-40 px-4  
          lg:py-22 lg:px-20" >
            <h3 className="yellow heading-3 2xl:text-center font-bold uppercase">We Specialize in</h3>
            <h1 className="mt-2 xl:mt-0 heading-main text-8xl text-left 2xl:text-right 
            font-bold xl:font-normal uppercase leading-none split-text-large">Imports & </h1>
            <h1 className="heading-main text-8xl text-left font-bold 
            xl:font-normal uppercase leading-none split-text-large">Distribution</h1>
            {/* <h1 className="heading-main leading-none uppercase">Imports & Distribution</h1> */}
            <div className=" ">
              <h2 className="xl:w-1/3 mt-2 text-left yellow heading-4 font-semibold 
              uppercase leading-none">We are here to help you reach your goals</h2>
              <p className="md:w-1/2 w-full mt-2 leading-tight"  >
                Rorganics is a versatile company, constantly evolving and developing, which
                has been operating throughout Middle East since 2022. We cover all of our
                customer&apos; specific requirements for imports, wholesales & distribution.
                Meeting the most demanding quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroFirst