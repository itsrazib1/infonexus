import React from "react";
import logo from "../../../public/logo.png";
import rightArrow from "../../../public/icons8-right-arrow-90.png";
import instagram from "../../../public/instagram.png";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="bg-[#F3F5F9]">
        <div className="text-center mb-14 pt-12 px-2">
          <h1 className="md:text-[44px] mb-1 md:mb-2 text-[25px]">Ready to do your best work?</h1>
          <p className="md:text-[32px] text-[20px] max-w-[720px] m-auto mb-[20px] text-[#333333]">
            Let us get you started.
          </p>
          <button className="uppercase mt-7 rounded-sm bg-[#f60014] md:px-7 px-6 py-3 md:py-4 text-white flex text-xs md:text-sm mx-auto font-semibold">
            sign up now
            <Image
              src={rightArrow}
              alt="Image"
              className="md:w-6 w-4 h-auto hover:translate-x-[10px] transition-transform duration-1000"
            />
          </button>
        </div>
        <div className="join join-vertical w-full md:hidden">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Apps and Extentions
            </div>
            <div className="collapse-content">
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Branding</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Mobile Apps</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Google Workspace Integration</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Microsoft 365 Integration</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Product Integration</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Marketplace</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Browser Extentions</a></p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Learn
            </div>
            <div className="collapse-content">
            <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Branding</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Mobile Apps</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Google Workspace Integration</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Microsoft 365 Integration</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Product Integration</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Marketplace</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Browser Extentions</a></p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Community
            </div>
            <div className="collapse-content">
            <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Branding</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Mobile Apps</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Google Workspace Integration</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Microsoft 365 Integration</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Product Integration</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Marketplace</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Browser Extentions</a></p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              products
            </div>
            <div className="collapse-content">
            <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Branding</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Mobile Apps</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Google Workspace Integration</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Microsoft 365 Integration</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Product Integration</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Marketplace</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Browser Extentions</a></p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Company
            </div>
            <div className="collapse-content">
            <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Branding</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Mobile Apps</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Google Workspace Integration</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Microsoft 365 Integration</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Product Integration</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Marketplace</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Browser Extentions</a></p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Security and Privacy
            </div>
            <div className="collapse-content">
            <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Branding</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Mobile Apps</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Google Workspace Integration</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Microsoft 365 Integration</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Product Integration</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Marketplace</a></p>
              <p className="mb-5 ml-1"><a className="text-[#333] text-lg">Browser Extentions</a></p>
            </div>
          </div>
        </div>
        <div className="footer p-10 justify-between hidden md:flex ">
          <div>
            <h2 className="text-2xl mb-3">Apps and Extensions</h2>
            <a className="text-[#333] text-lg">Branding</a>
            <a className="text-[#333] text-lg">Mobile Apps</a>
            <a className="text-[#333] text-lg">Google Workspace Integration</a>
            <a className="text-[#333] text-lg">Microsoft 365 Integration</a>
            <a className="text-[#333] text-lg">Product Integration</a>
            <a className="text-[#333] text-lg">Marketplace</a>
            <a className="text-[#333] text-lg">Browser Extentions</a>
          </div>
          <div>
            <h2 className="text-2xl mb-3">Learn</h2>
            <a className="text-[#333] text-lg">Training & Certification</a>
            <a className="text-[#333] text-lg">Academy</a>
            <a className="text-[#333] text-lg">Blog</a>
            <a className="text-[#333] text-lg">Zia</a>
            <a className="text-[#333] text-lg">Humans of infonexus</a>
            <a className="text-[#333] text-lg">The Long Game</a>
          </div>
          <div>
            <h2 className="text-2xl mb-3">Commujnity</h2>
            <a className="text-[#333] text-lg">User Community</a>
            <a className="text-[#333] text-lg">Influence</a>
            <a className="text-[#333] text-lg">Partner with Us</a>
            <a className="text-[#333] text-lg">Affiliate Program</a>
          </div>
          <div>
            <h2 className="text-2xl mb-3" >Company</h2>
            <a className=" text-[#333] text-lg">About Us</a>
            <a className=" text-[#333] text-lg">Press</a>
            <a className=" text-[#333] text-lg">Events</a>
            <a className=" text-[#333] text-lg">Newsroom</a>
            <a className=" text-[#333] text-lg">Branding Assets</a> 
            <a className=" text-[#333] text-lg">InfoNexus Schools</a> 
            <a className=" text-[#333] text-lg">Service Status</a> 
          </div> 
        </div> 
        <div> 
          <div className="flex gap-5 justify-center items-center mt-12 mb-6">
            <span className="text-4xl text-[#ED2201]">
              <FaYoutube />
            </span>
            <span className="text-3xl text-[#3D77F2]">
              <FaFacebook />
            </span>
            <span className="text-3xl text-[#3266C2]">
              <FaLinkedin />
            </span>
            <span className="text-3xl text-[ED2201] w-7">
              <Image src={instagram} alt="" />
            </span>
          </div>
          <div className="text-center text-sm md:block hidden">
            <span className="border-e pl-2 border-gray-400">Zoho Home  </span>
            <span className="border-e pl-2 border-gray-400"> Contact Us  </span>
            <span className="border-e pl-2 border-gray-400">Security  </span>
            <span className="border-e pl-2 border-gray-400">IPR Complaints  </span>
            <span className="border-e pl-2 border-gray-400">Anti-spam Policy  </span>
            <span className="border-e pl-2 border-gray-400">Terms of Service  </span>
            <span className="pl-2">Privacy Policy</span>
          </div>
          <div className="text-center text-sm md:hidden pb-12">
            <span className="border-e pl-2 border-gray-400">Zoho Home  </span>
            <span className="pl-2"> Contact Us  </span>
          </div>
          <div className="text-center pb-12 mt-3 text-sm md:block hidden">
            <span className="border-e pl-2 border-gray-400">Cookie Policy </span>
            <span className="border-e pl-2 border-gray-400">GDPR Compliance  </span>
            <span className="pl-2">Abuse Policy</span>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-10 bg-[#0B0D1F] text-primary-content">
        <div>
          <Image className="w-1/5" src={logo} alt="" />
          <p className="text-white">© 2023, infonexus Corporation Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
