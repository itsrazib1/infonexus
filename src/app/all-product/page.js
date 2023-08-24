import Partfive from "./Fullpage/PartFive/Partfive";
import PartFour from "./Fullpage/PartFour/PartFour";
import PartThree from "./Fullpage/PartThree/PartThree";
import PartTwo from "./Fullpage/PartTwo/PartTwo";
import PartOne from "./Fullpage/Partone/PartOne";
import EmailCollaboration from "./Fullpage/partSix/EmailCollaboration";
import Finance from "./Fullpage/partSix/Finance";
import Marketing from "./Fullpage/partSix/Marketing";
import Sales from "./Fullpage/partSix/Sales";
import Service from "./Fullpage/partSix/Service";

const page = () => {
  return (
    <div>
      <PartOne></PartOne>
      <PartTwo></PartTwo>
      <div className="flex">
        <div className="md:block hidden sm:block">
          <PartThree></PartThree>
        </div>
        <div>
          <Sales />
          <Marketing/>
          <Service/>
          <Finance/>
          <EmailCollaboration/>
        </div>
      </div>
      <PartFour></PartFour>
      <Partfive></Partfive>
    </div>
  );
};

export default page;
