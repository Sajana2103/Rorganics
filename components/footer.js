import Image from "next/image"
import { customLoader } from "./customFunctions"
const Footer = () => {
  return (
    <footer className="   ">
      <Image loader={customLoader} src={'/assets/images/cargo-demo.jpeg'} width={500} height={400}
        className="absolute w-screen h-auto object-cover -z-20" alt="rorganics-footer"
      />
      <div className="xl:pt-48 pt-32 pb-5 xl:px-24 px-4 ">
        <div className="xl:flex gap-20">
          <div>
            <p>Head Office</p>
            <p>Rorganics Trading Co. L.L.C.</p>
            <p>P.O. Box: 112690</p>
            <p>Dubai</p>
            <p>Investment Park 2, UAE</p>
          </div>
          <div>
            <h1>Emirates Logo</h1>
          </div>
          <div>
            <p>Quick Links</p>
            <br />
            <p>Home</p>
            <p>About Us</p>
            <p>Services</p>
            <p>Brands</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p>More Information</p>
            <br />
            <p>News</p>
            <p>FAQ</p>
            <p>Careers</p>
          </div>
        </div>

        <div className="xl:flex my-4">
          <div className="xl:w-1/2 xl:flex gap-20">
          <div className="">
            <p>Tel: +971 4 870 2000</p>
            <p>Fax: +971 4 884 9013/ 14</p>
          </div>
          <div>
            <p>Email: info@rorganics.com</p>
            <p>Website: www.rorganics.com</p>
          </div>

          </div>
          <div className="xl:grid xl:w-1/2">
            <h1 className="justify-self-end">Social Media Logos</h1>
          </div>
          <div>
          </div>
        </div>

        <div className="h-px bg-white"></div>
        <div className="xl:flex gap-20 py-4">
          <h1 className="xl:w-1/2 heading-2 font-bold leading-none">RORGANICS</h1>

          <div className="w-1/2 grid items-center">
            <h2 className="justify-self-end">Certification Logos</h2>
            </div>
        </div>
        <div className="h-px bg-white"></div>

        <div className="xl:flex gap-20 mt-2">
          <p className="w-1/2">Rorganics. All Rights Reserved.</p>
          <div className="xl:w-1/2 flex xl:justify-end"> 
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer