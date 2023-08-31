

import getLegal from "@/app/utils/getLegal";
import UserCard from "./UserCard/UserCard";
import gethr from "@/app/utils/gethr";



const Legal = async () => {

    const Legal = await getLegal();

    return (
        <div id="Legal" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Legal</div>
                <div>Streamline contract processes, mitigate risks, and improve your legal operations efficiency.</div>
            </div>
            <div className="flex flex-wrap ">
                {Legal.map(({ _id, name, description, btn, image }) => (
                    <UserCard
                        key={_id}
                        id={_id}
                        name={name}
                        description={description}
                        btn={btn}
                        image={image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Legal;