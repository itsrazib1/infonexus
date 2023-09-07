import Image from "next/image";
import cancel from "../../../public/icons/contact-page-icon/cancel.png";
import help from "../../../public/icons/contact-page-icon/help.png";
import renew from "../../../public/icons/contact-page-icon/renew.png";
import product from "../../../public/icons/contact-page-icon/product.png";
import usFlag from "../../../public/icons/contact-page-icon/us-flag.png";
import argentina from "../../../public/icons/contact-page-icon/Argentina_Flag.png";
import australia from "../../../public/icons/contact-page-icon/Flag_of_Australia.png";
import bahrain from "../../../public/icons/contact-page-icon/Flag_of_Bahrain.png";
import chile from "../../../public/icons/contact-page-icon/Flag_of_Chile.png";
import china from "../../../public/icons/contact-page-icon/Flag_of_China.png";
import colombia from "../../../public/icons/contact-page-icon/Flag_of_Colombia.png";
import egypt from "../../../public/icons/contact-page-icon/Flag_of_Egypt.svg.png";
import france from "../../../public/icons/contact-page-icon/Flag_of_France.png";
import germany from "../../../public/icons/contact-page-icon/Flag_of_Germany.svg.png";
import india from "../../../public/icons/contact-page-icon/Flag_of_India.png";
import kenya from "../../../public/icons/contact-page-icon/Flag_of_Kenya.svg.png";
import mexico from "../../../public/icons/contact-page-icon/Flag_of_Mexico.png";
import nigeria from "../../../public/icons/contact-page-icon/Flag_of_Nigeria.png";
import qatar from "../../../public/icons/contact-page-icon/Flag_of_Mexico.png";
import southAfrica from "../../../public/icons/contact-page-icon/Flag_of_South_Africa.svg.png";
import uk from "../../../public/icons/contact-page-icon/Flag_of_the_United_Arab_Emirates.svg.png";
import italy from "../../../public/icons/contact-page-icon/italy-flag.png";
import ksa from "../../../public/icons/contact-page-icon/saudi-flag.png";
import japan from "../../../public/icons/contact-page-icon/2560px-Japan_flag_-_variant.png";
import canada from "../../../public/icons/contact-page-icon/Flag_of_Canada.png";
import uae from "../../../public/icons/contact-page-icon/Flag_of_the_United_Arab_Emirates.svg.png";


const Contact = () => {
  return (
    <>
      <div id="Contact" className="md:relative md:mb-40 mb-20">
        <div className="bg-[#0060B4] text-white text-center md:h-[450px] md:relative py-5">
          <h1 className="md:text-5xl text-3xl md:p-6 p-3">
            Looking for something in particular?
          </h1>
          <p className="text-xl">We are here to help.</p>
          <div className="accessed-app-header-line p-4 mt-8"></div>
        </div>
        <div className="bg-white md:p-8 p-3 md:absolute  grid grid-cols-1 md:grid-cols-2 md:gap-5  lg:grid-cols-4 h-auto lg:gap-0 gap-5  mx-auto w-10/12 border-solid shadow-xl mt-12 left-0 right-0 lg:top-32 md:top-48 ">
          <div className="card-side md:mr-5 border-2 bg-[#F6F9FD] border-[#e0eaf7]">
            <div className="card-body">
              <div className="w-10 ">
                <figure>
                  <Image className="" src={product} alt="Movie" />
                </figure>
              </div>
              <p className="h-[120px] text-black">
                Looking for a demo, or have questions about our products and
                pricing?
              </p>
              <a className="text-blue-400">sales@zohocorp.com</a>
            </div>
          </div>
          <div className="card-side   bg-[#F6F9FD]  border-2 border-r-0 border-[#e0eaf7]">
            <div className="card-body">
              <div className="w-10 ">
                <figure>
                  <Image className="" src={help} alt="Movie" />
                </figure>
              </div>
              <p className="h-[120px] text-black">
                Need help with adding licenses, changing plans, or additional
                services?
              </p>
              <a className=" text-blue-400">upgrade@zohocorp.com</a>
            </div>
          </div>
          <div className="card-side  bg-[#F6F9FD] border-2 border-[#e0eaf7]">
            <div className="card-body">
              <div className="w-10 ">
                <figure>
                  <Image className="" src={renew} alt="Movie" />
                </figure>
              </div>
              <p className="h-[120px] text-black">
                Want to renew your subscription or need details about your
                current plan?
              </p>
              <a className=" text-blue-400">renewal@zohocorp.com</a>
            </div>
          </div>
          <div className="card-side   bg-[#F6F9FD] border-2 border-l-0 border-[#e0eaf7]">
            <div className="card-body">
              <div className="w-10 ">
                <figure>
                  <Image className="" src={cancel} alt="Movie" />
                </figure>
              </div>
              <p className="h-[120px] text-black">
                Need to cancel or downgrade your subscription? We are sad to see
                you go, but ready to help.
              </p>
              <a className=" text-blue-400">cancellation@zohocorp.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F6F9FD] md:py-16 py-8 md:mt-96 lg:mt-0">
        <div className="md:flex md:gap-8 md:w-2/3 mx-auto justify-between">
          <div className="md:w-2/5 p-8">
            <p className="text-green-600">
              <small className="uppercase">I am new here</small>
            </p>
            <h2 className="text-3xl my-3 text-black">
              Interested in a product? Talk to our sales team
            </h2>
            <p className="text-black">
              From questions about pricing to one-on-one personalized demos, we
              would love to connect and help get you started.
            </p>
          </div>
          <div className="md:w-3/5 items-center md:p-8 p-4">
            <div className="flex gap-3 bg-white p-4">
              <div>
                <Image className="w-8" src={usFlag} alt="" />
              </div>
              <div>
                <div className="text-blue-500">
                  <p className="font-semibold text-lg text-black">US</p>
                  <p>+1 877 834 4428</p>
                  <p>+1 844 584 2497</p>
                  <p>+1 833 968 1705</p>
                  <p>+1(888) 900 9646 (Support)</p>
                  <p>sales@zohocorp.com</p>
                </div>
              </div>
            </div>
            <div className="join join-vertical w-full mt-3  bg-white p-">
              <div className="collapse collapse-arrow join-item border-b-[1px] border-base-300">
                <input type="radio" name="my-accordion-4" checked="checked" />
                <div className="collapse-title text-xl font-medium text-black">
                  Canada
                </div>
                <div className="collapse-content">
                  <div className="flex gap-3">
                    <div>
                      <Image className="w-8" src={canada} alt="" />
                    </div>
                    <div className="text-blue-500">
                      <p className="font-semibold text-lg text-black">Canada</p>
                      <p>+1 877 834 4428</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-b-[1px] border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium text-black">
                  Latin America
                </div>
                <div className="collapse-content">
                  <div className="md:flex justify-between">
                    <div>
                      <div className="flex gap-3 mb-3">
                        <div>
                          <Image className="w-8" src={argentina} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">Argentina</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div>
                          <Image className="w-8" src={chile} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">Chile</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-3 mb-3">
                        <div>
                          <Image className="w-8" src={colombia} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">Colombia</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div>
                          <Image className="w-8" src={mexico} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">Mexico</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-b-[1px] border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium text-black ">
                  Asia pacific
                </div>
                <div className="collapse-content">
                  <div className="md:flex justify-between">
                    <div>
                      <div className="flex gap-3">
                        <div>
                          <Image className="w-8" src={india} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">India</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-3">
                        <div>
                          <Image className="w-8" src={japan} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">Japan</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-3">
                        <div>
                          <Image className="w-8" src={australia} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">Australia</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-3">
                        <div>
                          <Image className="w-8" src={china} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">China</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-b-[1px] border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium text-black">
                  Middle East
                </div>
                <div className="collapse-content">
                  <div className="md:flex justify-between">
                    <div>
                      <div className="flex gap-3">
                        <div>
                          <Image className="w-8" src={ksa} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">KSA</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-3">
                        <div>
                          <Image className="w-8" src={qatar} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">Qatar</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-3">
                        <div>
                          <Image className="w-8" src={uae} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">UAE</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div>
                          <Image className="w-8" src={bahrain} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">Bahrain</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-b-[1px] border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium text-black">
                  Africa
                </div>
                <div className="collapse-content">
                  <div className="md:flex justify-between">
                    <div>
                      <div className="flex gap-3">
                        <div>
                          <Image className="w-8" src={southAfrica} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">South Africa</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-3">
                        <div>
                          <Image className="w-8" src={nigeria} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">Nigeria</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-3 mb-3">
                        <div>
                          <Image className="w-8" src={egypt} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">Egypt</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-3">
                        <div>
                          <Image className="w-8" src={kenya} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">Kenya</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-b-[1px] border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium text-black">
                  Europe
                </div>
                <div className="collapse-content">
                  <div className="md:flex justify-between">
                    <div>
                      <div className="flex gap-3">
                        <div>
                          <Image className="w-8" src={france} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">France</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-3">
                        <div>
                          <Image className="w-8" src={uk} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">UK</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-3">
                        <div>
                          <Image className="w-8" src={germany} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">Germany</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-3">
                        <div>
                          <Image className="w-8" src={italy} alt="" />
                        </div>
                        <div className="text-blue-500">
                          <p className="font-semibold text-lg text-black">Italy</p>
                          <p>+1 877 834 4428</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
