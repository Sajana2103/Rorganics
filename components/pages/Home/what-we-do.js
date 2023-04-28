const WhatWeDo = () => {
  return (
    <div className="xl:h-screen xl:py-20 xl:px-24 px-4 pt-10">
      <h2 className="heading-4">
        What we do
      </h2>
      <div className="xl:flex gap-40">
        <div className=" xl:w-2/5">
          <h1 className="heading-2 leading-none">A solution for every customer.</h1>
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
        <h2 className="hidden xl:block h-auto text-lg xl:text-6xl font-bold " style={{lineHeight:0.9}}>Numbers</h2>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
export default WhatWeDo