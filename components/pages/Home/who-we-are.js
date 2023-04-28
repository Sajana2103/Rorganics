import Image from "next/image"

const WhoWeAre = () => {
  return (
    <div className="xl:h-screen xl:py-20 xl:px-24 px-4 ">
      <h2 className="heading-3 font-bold xl:font-normal">Who We Are</h2>
      <div className="xl:flex mt-2">
        <h1 className="xl:w-3/4 heading-2 leading-snug font-semibold xl:font-normal">Rorganics aims to be the favored
          brand building partner in the region.
        </h1>
        <div>
          <div />
          <div>
            <h2 className="heading-3 font-semibold mt-2">We<span className=" "> belive in</span></h2>
            <div className="heading-4 font-bold yellow">
              <h3>01. Commitment</h3>
              <h3>02. Integrity</h3>
              <h3>03. Respect</h3>
              <h3>04. Partnership</h3>
              <h3>05. Results</h3>
            </div>
          </div>
        </div>

      </div>
      <div className="xl:w-3/4">
        <div className="xl:mt-10 my-4 h-px yellow-bg"></div>
        <div className="xl:flex ">
          <h2 className="heading-4 leading-none font-bold xl:font-normal ">Rorganics Industry Leading Standards</h2>
          <p className="xl:w-3/4 mt-2 yellow ">We work alongside brand owners to develop and strengthen their
            brands. Our key objective is to drive faster brand growth compared
            to their relevent categories, achieved by utilizing category insights and
            ensuring impeccable execution at the point of purchase.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <Image src="/assets/images/cargo-demo.jpeg" height={400} width={300}/>
      </div>
    </div>
  )
}

export default WhoWeAre