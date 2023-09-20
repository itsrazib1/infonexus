import React from "react";
import logo from "../../../public/logo.png";
import rightArrow from "../../../public/icons8-right-arrow-90.png";
import instagram from "../../../public/instagram.png";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <footer className="bg-base-100  text-base-100">
        <div className="text-center mb-14 pt-12 px-2">
          <h1 className="md:text-[44px] mb-1 md:mb-2 text-[25px] text-base-content">
            Ready to do your best work?
          </h1>
          <p className="md:text-[32px] text-[20px] max-w-[720px] m-auto mb-[20px] text-base-content">
            Let us get you started.
          </p>
          <Link href="/singin">
            <button className="uppercase mt-7 rounded-sm bg-[#f60014] md:px-7 px-6 py-3 md:py-4 text-white flex text-xs md:text-sm mx-auto font-semibold">
              sign up now
              <Image
                src={rightArrow}
                alt="Image"
                className="md:w-6 w-4 h-auto hover:translate-x-[10px] transition-transform duration-1000"
              />
            </button>
          </Link>
        </div>
        <div className="join join-vertical w-full md:hidden">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium text-base-content">
              Apps and Extention
            </div>
            <div className="collapse-content">
              <p className="mb-5 ml-1">
                <a href="/customers" className="text-base-content  text-lg">Branding</a>
              </p>
              <p className="mb-5 ml-1">
                <a href="/all-product#Mobile" className="text-base-content text-lg">Mobile Apps</a>
              </p>
              <p className="mb-5 ml-1">
                <a href="/all-product#Mobile" className="text-base-content text-lg">
                  Google Workspace Integration
                </a>
              </p>
              <p className="mb-5 ml-1">
                <a href="/all-product#Mobile" className="text-base-content text-lg">
                  Microsoft 365 Integration
                </a>
              </p>
              <p className="mb-5 ml-1">
                <a href="/all-product" className="text-base-content text-lg">Product Integration</a>
              </p>
              <p className="mb-5 ml-1">
                <a href="/all-product#Marketplace" className="text-base-content text-lg">Marketplace</a>
              </p>
              <p className="mb-5 ml-1">
                <a href="/all-product#Browser" className="text-base-content text-lg">Browser Extentions</a>
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium text-base-content">
              Learn
            </div>
            <div className="collapse-content">
              <p className="mb-5 ml-1">
                <a href="/all-product#Mobile" className="text-base-content text-lg">Branding</a>
              </p>
              <p className="mb-5 ml-1">
                <a href="/all-product#Mobile" className="text-base-content text-lg">Mobile Apps</a>
              </p>
              <p className="mb-5 ml-1">
                <a href="/all-product#Mobile" className="text-base-content text-lg">
                  Google Workspace Integration
                </a>
              </p>
              <p className="mb-5 ml-1">
                <a href="/all-product#Mobile" className="text-base-content text-lg">
                  Microsoft 365 Integration
                </a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">Product Integration</a>
              </p>
              <p className="mb-5 ml-1">
                <a href="/all-product#Marketplace" className="text-base-content text-lg">Marketplace</a>
              </p>
              <p className="mb-5 ml-1">
                <a href="/all-product#Browser" className="text-base-content text-lg">Browser Extentions</a>
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium text-base-content ">
              Community
            </div>
            <div className="collapse-content">
              <p className="mb-5 ml-1">
                <a href="/allBrowsers" className="text-base-content text-lg">Branding</a>
              </p>
              <p className="mb-5 ml-1">
                <a href="/all-product#Mobile" className="text-base-content text-lg">Mobile Apps</a>
              </p>
              <p className="mb-5 ml-1">
                <a href="/all-product#Browser" className="text-base-content text-lg">
                  Google Workspace Integration
                </a>
              </p>
              <p className="mb-5 ml-1">
                <a href="/all-product#Browser" className="text-base-content text-lg">
                  Microsoft 365 Integration
                </a>
              </p>
              <p className="mb-5 ml-1">
                <a href="/all-product" className="text-base-content text-lg">Product Integration</a>
              </p>
              <p className="mb-5 ml-1">
                <a href="/all-product#Marketplace" className="text-base-content text-lg">Marketplace</a>
              </p>
              <p className="mb-5 ml-1">
                <a href="/all-product#Browser" className="text-base-content text-lg">Browser Extentions</a>
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium text-base-content">
              products
            </div>
            <div className="collapse-content">
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">Branding</a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">Mobile Apps</a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">
                  Google Workspace Integration
                </a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">
                  Microsoft 365 Integration
                </a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">Product Integration</a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">Marketplace</a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">Browser Extentions</a>
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium text-base-content">
              Company
            </div>
            <div className="collapse-content">
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">Branding</a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">Mobile Apps</a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">
                  Google Workspace Integration
                </a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">
                  Microsoft 365 Integration
                </a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">Product Integration</a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">Marketplace</a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">Browser Extentions</a>
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium text-base-content">
              Security and Privacy
            </div>
            <div className="collapse-content">
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">Branding</a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">Mobile Apps</a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">
                  Google Workspace Integration
                </a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">
                  Microsoft 365 Integration
                </a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">Product Integration</a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">Marketplace</a>
              </p>
              <p className="mb-5 ml-1">
                <a className="text-base-content text-lg">Browser Extentions</a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer p-10 justify-between hidden md:flex ">
          <div className="">
            <h2 className="text-2xl mb-3 hover:text-blue-500 text-base-content">Apps and Extensions</h2>
            <a href="/customers" className="text-base-content text-lg hover:text-blue-500">Branding</a>
            <a href="/all-product" className="text-base-content text-lg hover:text-blue-500">Mobile Apps</a>
            <a href="/link" className="text-base-content text-lg hover:text-blue-500">
              Google Workspace Integration
            </a>
            <a href="/link" className="text-base-content text-lg hover:text-blue-500">
              Microsoft 365 Integration
            </a>
            <a href="/link" className="text-base-content text-lg hover:text-blue-500">Product Integration</a>
            <a href="/customers" className="text-base-content text-lg hover:text-blue-500">Marketplace</a>
            <a href="/customers" className="text-base-content text-lg hover:text-blue-500">Browser Extentions</a>
          </div>
          <div>
            <h2 href="/customers" className="text-2xl mb-3 text-base-content hover:text-blue-500">Learn</h2>
            <a href="/customers" className="text-base-content text-lg hover:text-blue-500">
              Training & Certification
            </a>
            <a href="/customers" className="text-base-content text-lg hover:text-blue-500">Academy</a>
            <a href="/link" className="text-base-content text-lg hover:text-blue-500">Blog</a>
            <a href="/link" className="text-base-content text-lg hover:text-blue-500">Zia</a>
            <a href="/link" className="text-base-content text-lg hover:text-blue-500">Humans of infonexus</a>
            <a href="/link" className="text-base-content text-lg hover:text-blue-500">The Long Game</a>
          </div>
          <div>
            <h2 className="text-2xl mb-3 text-base-content hover:text-blue-500">Commujnity</h2>
            <a href="/link" className="text-base-content text-lg hover:text-blue-500">User Community</a>
            <a href="/link" className="text-base-content text-lg hover:text-blue-500">Influence</a>
            <a href="/link" className="text-base-content text-lg hover:text-blue-500">Partner with Us</a>
            <a href="/link" className="text-base-content text-lg hover:text-blue-500">Affiliate Program</a>
          </div>
          <div>
            <h2 href="/link" className="text-2xl mb-3 text-base-content hover:text-blue-500">Company</h2>
            <a href="/link" className=" text-base-content text-lg hover:text-blue-500">About Us</a>
            <a href="/link" className=" text-base-content text-lg hover:text-blue-500">Press</a>
            <a href="/link" className=" text-base-content text-lg hover:text-blue-500">Events</a>
            <a href="/link" className=" text-base-content text-lg hover:text-blue-500">Newsroom</a>
            <a href="/link" className=" text-base-content text-lg hover:text-blue-500">Branding Assets</a>
            <a href="/link" className=" text-base-content text-lg hover:text-blue-500">InfoNexus Schools</a>
            <a href="/link" className=" text-base-content text-lg hover:text-blue-500">Service Status</a>
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
          <div className="text-center text-sm md:block hidden text-base-content">
            <span className="border-e pl-2 border-gray-400">
              <a href="/">InfoNexus Home</a>{" "}
            </span>
            <span className="border-e pl-2 border-gray-400">
              {" "}
              <Link href="/link#Contact">Contact Us</Link>{" "}
            </span>
            <span className="border-e pl-2 border-gray-400">
              <Link href="/link#Security">Security</Link>{" "}
            </span>
            <span className="border-e pl-2 border-gray-400">
              <Link href="/link#Complaints">IPR Complaints</Link>{" "}
            </span>
            <span className="border-e pl-2 border-gray-400">
              Anti-spam Policy{" "}
            </span>
            <span className="border-e pl-2 border-gray-400">
              Terms of Service{" "}
            </span>
            <span className="pl-2">Privacy Policy</span>
          </div>
          <div className="text-center text-base-content text-sm md:hidden pb-12">
            <span className="border-e pl-2 border-gray-400">
              InfoNexus Home{" "}
            </span>
            <span className="pl-2"> Contact Us </span>
          </div>
          <div className="text-center text-base-content pb-12 mt-3 text-sm md:block hidden">
            <span className="border-e pl-2 border-gray-400">
              Cookie Policy{" "}
            </span>
            <span className="border-e pl-2 border-gray-400">
              GDPR Compliance{" "}
            </span>
            <span className="pl-2">Abuse Policy</span>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-10 bg-[#0B0D1F] text-primary-content">
        <div>
          <Image className="w-1/5" src={logo} alt="" />
          <p className="text-white">
            © 2023, infonexus Corporation Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
