import { FaRegCheckCircle } from "react-icons/fa";

const Security = () => {
  return (
    <div id="Security">
      <div className="md:p-16 p-5 bg-[#F1F3F4] border-2 border-[#dbdbdb]">
        <div className="md:w-2/3 mx-auto">
          <p className="text-right md:font-normal font-bold md:mb-2 mb-5"> Last updated on: 8th March 2023.</p>
          <h1 className="text-3xl font-bold mb-3">Security</h1>
          Security Zoho provides Software as a Service(SaaS) products to
          millions of users worldwide to solve their business problems. Security
          is a key component in our offerings, and is reflected in our people,
          process, and products. This page covers topics like data security,
          operational security, and physical security to explain how we offer
          security to our customers.
        </div>
      </div>
      <div className="md:p-16 p-5 bg-[#F1F3F4] border-2 border-t-0 border-[#dbdbdb]">
        <div className="md:w-2/3 mx-auto">
          <h1 className="text-3xl font-bold mb-3">Overview</h1>
          <p className="md:mb-0 mb-12">Our security strategy involves the following components</p>
          <div className="md:flex-row flex-col mt-5">
            <ul className="mr-12">
              <li className="font-bold mb-5">
                <FaRegCheckCircle className="inline text-green-500 mr-2 text-xl" />{" "}
                Organizational security
              </li>
              <li className="font-bold mb-5">
                <FaRegCheckCircle className="inline text-green-500 mr-2 text-xl" />{" "}
                Physical Security
              </li>
              <li className="font-bold mb-5">
                <FaRegCheckCircle className="inline text-green-500 mr-2 text-xl" />{" "}
                Infrastructure security{" "}
              </li>
              <li className="font-bold mb-5">
                <FaRegCheckCircle className="inline text-green-500 mr-2 text-xl" />{" "}
                Data Security
              </li>
              <li className="font-bold mb-5">
                <FaRegCheckCircle className="inline text-green-500 mr-2 text-xl" />{" "}
                Identity and Access control
              </li>
            </ul>
            <ul>
              <li className="font-bold mb-5">
                <FaRegCheckCircle className="inline text-green-500 mr-2 text-xl" />{" "}
                Operational Security
              </li>
              <li className="font-bold mb-5">
                <FaRegCheckCircle className="inline text-green-500 mr-2 text-xl" />{" "}
                Incident Management
              </li>
              <li className="font-bold mb-5">
                <FaRegCheckCircle className="inline text-green-500 mr-2 text-xl" />{" "}
                Responsible Disclosures
              </li>
              <li className="font-bold mb-5">
                <FaRegCheckCircle className="inline text-green-500 mr-2 text-xl" />{" "}
                Vendor Management
              </li>
              <li className="font-bold mb-5">
                <FaRegCheckCircle className="inline text-green-500 mr-2 text-xl" />{" "}
                Customer Controls for Security
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-2/3 mx-auto py-16 hidden md:block">
        <h2 className="text-3xl font-bold mb-3 mt-16 ">Organizational Security</h2>
        <p className="mb-8">
          We have an Information Security Management System (ISMS) in place
          which takes into account our security objectives and the risks and
          mitigations concerning all the interested parties. We employ strict
          policies and procedures encompassing the security, availability,
          processing, integrity, and confidentiality of customer data.
        </p>
        <h2 className="text-xl font-bold mb-3  mt-16">Employee background checks</h2>
        <p className="mb-8">
          Each employee undergoes a process of background verification. We hire
          reputed external agencies to perform this check on our behalf. We do
          this to verify their criminal records, previous employment records if
          any, and educational background. Until this check is performed, the
          employee is not assigned tasks that may pose risks to users.
        </p>
        <h2 className="text-xl font-bold mb-3  mt-16">Security Awareness</h2>
        <p className="mb-8">
          Each employee, when inducted, signs a confidentiality agreement and
          acceptable use policy, after which they undergo training in
          information security, privacy, and compliance. Furthermore, we
          evaluate their understanding through tests and quizzes to determine
          which topics they need further training in. We provide training on
          specific aspects of security, that they may require based on their
          roles.
        </p>
        <h2 className="text-xl font-bold mb-3 mt-16">Endpoint security</h2>
        <p className="mb-8">
          We have dedicated security and privacy teams that implement and manage
          our security and privacy programs. They engineer and maintain our
          defense systems, develop review processes for security, and constantly
          monitor our networks to detect suspicious activity. They provide
          domain-specific consulting services and guidance to our engineering
          teams.
        </p>
      </div>
    </div>
  );
};

export default Security;
