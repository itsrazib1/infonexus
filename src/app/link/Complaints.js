import { FaRegCheckCircle } from "react-icons/fa";

const Complaints = () => {
  return (
    <div id="Complaints">
      <div className="md:p-16 p-5 bg-[#F1F3F4] border-2 border-t-0 border-[#dbdbdb]">
        <h1 className="text-3xl font-bold text-center">IPR Complaints</h1>
      </div>
      <div className="md:w-2/3 mx-auto py-20 px-5">
        <div className="">
          <h2 className="text-3xl font-bold text-center mb-8">
            IPR Complaints
          </h2>
          <p>
            If you believe that content on any of the Zoho services has violated
            your copyright or other intellectual property right, please write to
            our Designated Agent providing the following information:
          </p>
          <ul className="my-5">
            <li className="mb-3">
              <FaRegCheckCircle className="inline-block text-green-500 text-xl" />{" "}
              <span className="ml-2">An electronic or physical signature of the person authorized to
              act on behalf of the owner of the copyright or other intellectual
              property right alleged to be infringed;</span>
            </li>
            <li className="mb-3">
              <FaRegCheckCircle className="inline-block text-green-500 text-xl" />{" "}
              <span className="ml-2">A description of the copyrighted work or other intellectual
              property that you claim to have been infringed;</span>
            </li>
            <li className="mb-3">
              <FaRegCheckCircle className="inline text-green-500 text-xl" />{" "}
             <span className="ml-2"> Identification of the material that you claim to be infringing
              including information regarding its location that would enable it
              to be located and if possible the URL of such infringing material;</span>
            </li>
            <li className="mb-3">
              <FaRegCheckCircle className="inline text-green-500 text-xl" />{" "}
              <span className="ml-2">
                {" "}
                Information that would enable us to contact you, such as your
                address, telephone number, and email address (if available);
              </span>
            </li>
            <li className="mb-3">
              <FaRegCheckCircle className="inline text-green-500 text-xl" />{" "}
              <span className="ml-2">
                A statement by you to the effect that you believe in good faith
                that the use of the infringing material in the manner complained
                of is not authorized by the copyright or intellectual property
                owner, its agent, or the law;
              </span>
            </li>
            <li className="mb-3">
              <FaRegCheckCircle className="inline text-green-500 text-xl"/>{" "}
              <span className="ml-2">
                A statement by you, under penalty of perjury, that the above
                information contained in your communication is accurate and that
                you are authorized to act on behalf of the owner of copyright or
                other intellectual property right.
              </span>
            </li>
          </ul>
        </div>
        <div>
          <p>
            Your notice with the above information to be effective should be
            sent to our Designated Agent for notice of claims of infringement of
            copyright and intellectual property rights at the following address
          </p>
          <div className="my-8">
            <p className="font-semibold">Designated Agent (IPR complaints)</p>
            <p>C/o ZOHO Corporation</p>
            <p>4141 Hacienda Drive</p>
            <p>Pleasanton, CA 94588, USA</p>
            <p className="text-blue-500 font-semibold">
              Phone: +1-925-924-9500
            </p>
            <p>Fax: +1-925-924-9600</p>
            <p className="text-blue-500 font-semibold">
              Email: legal@zohocorp.com
            </p>
          </div>
          <p>
            Please take note that if you knowingly misrepresent that any
            material or activity is infringing, you may be subject to liability
            under Section 512(f) of the Copyright Act.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mt-24 mb-8">
            Counter-notice Procedure
          </h2>
          <p>
            If you are a subscriber and you feel that material posted by you on
            any of the Zoho services has been wrongly removed, please write to
            our Designated Agent providing the following information:
          </p>
        </div>
        <div>
          <p>
            Your counter-notice with the above information to be effective
            should be sent to our Designated Agent for notice of claims of
            infringement of copyright and intellectual property rights at the
            following address
          </p>
          <div className="my-8">
            <p className="font-semibold">Designated Agent (IPR complaints)</p>
            <p>C/o ZOHO Corporation</p>
            <p>4141 Hacienda Drive</p>
            <p>Pleasanton, CA 94588, USA</p>
            <p className="text-blue-500 font-semibold">
              Phone: +1-925-924-9500
            </p>
            <p>Fax: +1-925-924-9600</p>
            <p className="text-blue-500 font-semibold">
              Email: legal@zohocorp.com
            </p>
          </div>
          <p>
            Please take note that if you knowingly misrepresent that material
            was removed or activity was disabled as a result of mistake or wrong
            identification, you may be subject to liability under Section 512(f)
            of the Copyright Acts. Also, kindly note that we have a policy of
            terminating the accounts of subscribers who repeatedly infringe
            copyright or other third party rights..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
