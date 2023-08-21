import Partfive from "./Fullpage/PartFive/Partfive";
import PartFour from "./Fullpage/PartFour/PartFour";
import PartThree from "./Fullpage/PartThree/PartThree";
import PartTwo from "./Fullpage/PartTwo/PartTwo";
import PartOne from "./Fullpage/Partone/PartOne";
import PartSix from "./Fullpage/partSix/PartSix";

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
          <PartSix />
        </div>
      </div>
      <PartFour></PartFour>
      <Partfive></Partfive>
    </div>
  );
};

export default page;
