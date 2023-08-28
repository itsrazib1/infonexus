import Complaints from "./Complaints";
import Contact from "./Contact";
import Security from "./Security";


const page = () => {
    return (
        <div>
            <Contact/>
            <Security/>
            <Complaints/>
        </div>
    );
};

export default page;