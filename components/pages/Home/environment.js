import Image from "next/image"
const Environment = () => {
  return (
    <div className=" lightAmber-bg xl:py-20 xl:px-24 px-4 py-10">

      <div className="flex flex-wrap gap-20 mt-6">
        <Image className="w-1/2 hidden xl:block"  src={"/assets/images/cargo-demo.jpeg"} width={400} height={300} />

        <div className=" ">
          <h2 className="heading-4 font-bold xl:font-semibold maroon uppercase">WE CARE ABOUT THE ENVIROMENT</h2>

          <h1 className="heading-2 leading-none maroon my-4">
            We are committed to sustainable transportation
          </h1>
          <Image className="xl:hidden block mt-4"  src={"/assets/images/cargo-demo.jpeg"} width={400} height={300} />

          <div className="h-px maroon-bg my-12"></div>
          <div className="flex flex-wrap gap-10">
            <div className=" xl:w-1/4">
              <h3 className=" text-lg maroon font-bold leading-none uppercase">
                RORGANICS ENVIRONMENTAL & SUSTAINABILITY INITIATIVE
              </h3>

            </div>
            <div className=" xl:w-2/3">
              <p className="text-lg maroon leading-tight">RORGANICS will do everything to
                meet the highest standards on sustainable transportation. Our services
                promote and incorporate the latest technological developments in environmental issues.
              </p>
              <br />
              <p className="text-lg maroon leading-tight">Our goal is to make our activity as environmentally
                friendly as possible.
              </p>
            </div>
            <div className="mt-4 border border-rose-900 border-solid rounded-full
               flex items-center justify-center text-lg gap-2  w-auto p-2 h-fit">
              <span className=" text-rose-900">&#62;</span><h3 className=" maroon">READ MORE</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Environment