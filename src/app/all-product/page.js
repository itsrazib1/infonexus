
import PartThree from "./Fullpage/PartThree/PartThree";
import PartFour from "./Fullpage/PartFour/PartFour";
import Partfive from "./Fullpage/PartFive/Partfive";
import PartOne from "./Fullpage/PartTwo/PartOne";
import Partwo from "./Fullpage/Partone/Partwo";



const page = () => {
    return (
        <div>
            All product
            <PartOne></PartOne>
            <Partwo></Partwo>
            <PartThree></PartThree>
            <PartFour></PartFour>
            <Partfive></Partfive>
        </div>
    );
};

export default page;