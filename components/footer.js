import Image from "next/image"
import { customLoader } from "./customFunctions"
import { LogoText, QualityIcons, SocialMediaIcons } from "./icons"
const Footer = () => {
  return (
    <footer className="h-full">
     
      <Image id="footer-bg" alt="rorganics-footer" loader={customLoader} src={'/assets/images/footer-truck.png'} loading="eager" width={500} height={400}
        
        
      />
      <div id="" className="xl:pt-80 lg:pt-80 pt-12 pb-5 xl:px-24 px-4 footer-gr font-semibold ">
        <div className="sm:flex gap-20">
          <div className="font-semibold">
            <p>Head Office</p>
            <p>Rorganics Trading Co. L.L.C.</p>
            <p>P.O. Box: 112690</p>
            <p>Dubai</p>
            <p>Investment Park 2, UAE</p>
          </div>
          <div>
            <Image alt="emirates-rorganics" src="/assets/icons/the-emirates-logo-2.png" width={200} height={300} loader={customLoader}
              className="border border-white object-contain  w-32" />

          </div>
          <div className="font-semibold focus:font-bold">
            <p>Quick Links</p>
            <br />
            <p>Home</p>
            <p>About Us</p>
            <p>Services</p>
            <p>Brands</p>
            <p>Contact Us</p>
          </div>
          <div className="font-semibold">
            <p>More Information</p>
            <br />
            <p>News</p>
            <p>FAQ</p>
            <p>Careers</p>
          </div>
        </div>

        <div className="sm:flex my-4">
          <div className="md:w-1/2 md:flex gap-20">
            <div className="">
              <p>Tel: +971 4 870 2000</p>
              <p>Fax: +971 4 884 9013/ 14</p>
            </div>
            <div>
              <p>Email: info@rorganics.com</p>
              <p>Website: www.rorganics.com</p>
            </div>

          </div>
          <div className="sm:flex sm:justify-end items-center sm:w-1/2 gap-2">
            <h1 className=" text-xl">Follow Us</h1>

            <SocialMediaIcons />

          </div>
          <div>
          </div>
        </div>

        <div className="h-px bg-white"></div>
        <div className="sm:flex gap-10 md:gap-0 py-4">
          <div className="sm:w-1/2 "><LogoText /></div>

          <div className="sm:w-1/2  items-center flex sm:justify-end">
            <QualityIcons />
          </div>
        </div>
        <div className="h-px bg-white"></div>

        <div className="sm:flex gap-20 mt-2">
          <p className="w-1/2">Rorganics. All Rights Reserved.</p>
          <div className="sm:w-1/2 flex sm:justify-end">
            <p>Terms & Conditions</p>
            <p className="mx-2">|</p>
            <p>Privacy Policy</p>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer