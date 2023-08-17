import Partfive from "./Fullpage/PartFive/Partfive";
import PartFour from "./Fullpage/PartFour/PartFour";
import PartThree from "./Fullpage/PartThree/PartThree";
import PartTwo from "./Fullpage/PartTwo/PartTwo";
import PartOne from "./Fullpage/Partone/PartOne";





const page = () => {
    return (
        <div>
            <PartOne></PartOne>
            <PartTwo></PartTwo>
            <PartThree></PartThree>
            <PartFour></PartFour>
            <Partfive></Partfive>

        </div>
    );
};

export default page;