import Partfive from "./Fullpage/PartFive/Partfive";
import PartFour from "./Fullpage/PartFour/PartFour";
import PartThree from "./Fullpage/PartThree/PartThree";
import PartTwo from "./Fullpage/PartTwo/PartTwo";
import PartOne from "./Fullpage/Partone/PartOne";
import EmailCollaboration from "./Fullpage/partSix/EmailCollaboration";
import Finance from "./Fullpage/partSix/Finance";
import Legal from "./Fullpage/partSix/Legal";
import Marketing from "./Fullpage/partSix/Marketing";
import Sales from "./Fullpage/partSix/Sales";
import Service from "./Fullpage/partSix/Service";
import Bianalytics from "./Fullpage/partSix/bianalytics";
import Developerplatform from "./Fullpage/partSix/developerplatform";
import Hr from "./Fullpage/partSix/hr";
import ProjectManagement from "./Fullpage/partSix/projectManagement";
import SecurityITManagement from "./Fullpage/partSix/securityITManagement";

const page = () => {
  
  return (
    <div>
      <PartOne></PartOne>
      <PartTwo></PartTwo>
      <div className="flex">
        <div className="md:block hidden sm:block">
          <div className="top-5 sticky"><PartThree></PartThree></div>
        </div>
        <div className="">
          <Sales />
          <Marketing />
          <Service />
          <Finance />
          <EmailCollaboration />
          <Hr />
          <Legal />
          <SecurityITManagement />
          <Bianalytics />
          <ProjectManagement />
          <Developerplatform />
          <PartFour></PartFour>
          <Partfive></Partfive>
        </div>
      </div>
    </div>
  );
};

export default page;
