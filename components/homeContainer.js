import Environment from "./pages/Home/environment"
import HeroFirst from "./pages/Home/hero-1"
import HeroSecond from "./pages/Home/hero-2"
import HeroThirdAndForth from "./pages/Home/hero-3-4"
import OurServices from "./pages/Home/our-services"
import RorganicsStats from "./pages/Home/rorganics-stats"
import CustomerTestimonials from "./pages/Home/testimonials"
import WhatWeDo from "./pages/Home/what-we-do"
import WhoWeAre from "./pages/Home/who-we-are"

const HomeContainer = () => {
  return(
    <div>
    <HeroFirst/>
    <HeroSecond/>
    <HeroThirdAndForth/>
    <WhoWeAre/>
    <WhatWeDo/>
    <RorganicsStats/>
    <OurServices/>
    <Environment/>
    <CustomerTestimonials/>
    </div>
  )
} 
export default HomeContainer