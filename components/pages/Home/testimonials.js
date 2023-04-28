import Image from "next/image"

const CustomerTestimonials = () => {
  const logos = ['knorr.png', 'nestle.png', 'knorr.png', 'nestle.png', 'knorr.png', 'nestle.png',
    'knorr.png', 'nestle.png', 'knorr.png', 'nestle.png',]
  return (
    <div className=" bg-white  maroon  xl:py-32  py-10">
      <h3 className="heading-4 font-bold text-center xl:px-40 px-4">CUSTOMER TESTIMONIALS</h3>
      <h1 className="heading-2 text-center leading-none mt-10 xl:px-40 px-4">Endorsements from satisfied customers that value our services</h1>
      <div className="  py-20 text-center flex shrink-0 overflow-x-auto gap-10 pl-4 xl:-40">
        <div className="w-48 xl:w-1/4 shrink-0 lightAmber-bg p-6 xl:p-10 rounded-xl">
          <p className="xl:text-xl text-md ">"Will do everything to
            meet the highest standards on sustainable transportation. Our services
            promote and incorporate the latest
            technological developments in environmental issues."
          </p>
          <h2 className="heading-4 font-bold  leading-none xl:mt-6 mt-2">Adam Harris</h2>
          <p className="xl:text-xl text-md  leading-none">Company</p>
        </div>
        <div className="w-48 xl:w-1/4 shrink-0 lightAmber-bg p-6 xl:p-10 rounded-xl">
          <p className="xl:text-xl text-md ">"Will do everything to
            meet the highest standards on sustainable transportation. Our services
            promote and incorporate the latest
            technological developments in environmental issues."
          </p>
          <h2 className="heading-4 font-bold  leading-none xl:mt-6 mt-2">Adam Harris</h2>
          <p className="xl:text-xl text-md  leading-none">Company</p>
        </div>
        <div className="w-48 xl:w-1/4 shrink-0 lightAmber-bg p-6 xl:p-10 rounded-xl">
          <p className="xl:text-xl text-md ">"Will do everything to
            meet the highest standards on sustainable transportation. Our services
            promote and incorporate the latest
            technological developments in environmental issues."
          </p>
          <h2 className="heading-4 font-bold  leading-none xl:mt-6 mt-2">Adam Harris</h2>
          <p className="xl:text-xl text-md  leading-none">Company</p>
        </div>

        <div className="w-48 xl:w-1/4 shrink-0 lightAmber-bg p-6 xl:p-10 rounded-xl">
          <p className="xl:text-xl text-md ">"Will do everything to
            meet the highest standards on sustainable transportation. Our services
            promote and incorporate the latest
            technological developments in environmental issues."
          </p>
          <h2 className="heading-4 font-bold  leading-none xl:mt-6 mt-2">Adam Harris</h2>
          <p className="xl:text-xl text-md  leading-none">Company</p>
        </div>
        <div className="w-48 xl:w-1/4 shrink-0 lightAmber-bg p-6 xl:p-10 rounded-xl">
          <p className="xl:text-xl text-md ">"Will do everything to
            meet the highest standards on sustainable transportation. Our services
            promote and incorporate the latest
            technological developments in environmental issues."
          </p>
          <h2 className="heading-4 font-bold  leading-none xl:mt-6 mt-2">Adam Harris</h2>
          <p className="xl:text-xl text-md  leading-none">Company</p>
        </div>
        <div className="w-48 xl:w-1/4 shrink-0 lightAmber-bg p-6 xl:p-10 rounded-xl">
          <p className="xl:text-xl text-md ">"Will do everything to
            meet the highest standards on sustainable transportation. Our services
            promote and incorporate the latest
            technological developments in environmental issues."
          </p>
          <h2 className="heading-4 font-bold  leading-none xl:mt-6 mt-2">Adam Harris</h2>
          <p className="xl:text-xl text-md  leading-none">Company</p>
        </div>

      </div>
      <div className="maroon text-center xl:px-40 px-4 mt-20">
        <h2 className="heading-4 font-bold">BRANDS WE HELP BUILD</h2>
        <p className="text-xl px-4 xl:px-40">Accelerating brand growth beyond the performance of their respective
          categories, achieved through expert category analysis and flawless
          execution at the point of sale.
        </p>
        <div className="grid justify-center xl:mt-32 mt-8">

        <div className="grid xl:grid-cols-4 grid-cols-2 xl:gap-x-8 gap-4
         justify-items-center">

          {
            logos.map((logo,idx)=>{
              return(
                <Image key={idx} className="xl:w-32 w-24 h-auto" src={`/assets/images/logos/${logo}`} width={150} height={100}/>
                )
              })
            }
        </div>
      </div>
            </div>
    </div>
  )
}
export default CustomerTestimonials