const Navigation = () => {
  return (
    <div className={'fixed z-50 content-center w-full'}>
      <div className=" grid h-12  grid-cols-2 content-center">
        <h1 className=" w-1/2">NAV BAR</h1>
        <div className="w-1/2 flex text-sm gap-5 whitespace-nowrap text-amber-300 font-semibold">
          <p>HOME</p>
          <p>ABOUT US</p>
          <p>SERVICES</p>
          <p>BRANDS</p>
          <p>NEWS</p>
          <p>FAQ</p>
          <p>CAREERS</p>
          <p>CONTACT US</p>
        </div>
      </div>
    </div>
  )
}

export default Navigation