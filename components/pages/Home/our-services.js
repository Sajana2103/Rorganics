import Image from "next/image"
import { customLoader } from "../../customFunctions"
const OurServices = () => {
  return(
    <div id="home-our-services" className=" lightAmber-bg xl:h-screen xl:py-20 xl:pl-24 px-4 py-10">
       
      <h2 className="heading-4 font-semibold maroon uppercase">Our Services</h2>
      <div className="xl:flex mt-6">
        <div className="xl:w-1/2 ">
          <h1 className="heading-2 leading-none maroon split-text-medium">Tailor made business solutions
          to maximize growth
          </h1>
          <div className="h-px maroon-bg my-12 mr-10"></div>
          <div className="flex flex-wrap gap-6">
            <div className=" xl:w-2/5">
              <h3 className="heading-4 maroon font-semibold uppercase">Brands & Market</h3>
              <p className="mt-4 maroon leading-tight">Our range of brands provide substantial value to our
                customers. We strive to establish a mutually beneficial 
                relationship with our clients by understanding their needs
                and aligning our objective.
              </p>
            </div>
            <div className=" xl:w-2/5">
              <h3 className="heading-4 maroon font-semibold uppercase">Logistics Delivery</h3>
              <p className="mt-4 maroon leading-tight">Rorganics logistics operates around the
              clock to meet our customers&apos; demands. Modern facilities are located
              throughout the UAE to build the foundation of our commitment to customer service.
              </p>
            </div>
            <div className=" xl:w-2/5">
              <h3 className="heading-4 maroon font-semibold uppercase">Brands & Market</h3>
              <p className="mt-4 maroon leading-tight">Our range of brands provide substantial value to our
                customers. We strive to establish a mutually beneficial 
                relationship with our clients by understanding their needs
                and aligning our objective.
              </p>
            </div>
            <div className=" xl:w-2/5">
              <h3 className="heading-4 maroon font-semibold uppercase">Logistics Delivery</h3>
              <p className="mt-4 maroon leading-tight">Rorganics logistics operates around the
              clock to meet our customers&apos; demands. Modern facilities are located
              throughout the UAE to build the foundation of our commitment to customer service.
              </p>
            </div>
          </div>
        </div>
        <Image className="mt-4 object-contain w-full xl:w-1/2"
       loader={customLoader} alt="rorganics-services" src={"/assets/images/home/Rorganics-brands-collection.png"} width={400} height={300}/>
      </div>
    </div>
  )
}

export default OurServices