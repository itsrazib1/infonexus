

import { getEmailCollaboration } from "@/app/utils/getEmailCollaboration";
import UserCard from "./UserCard/UserCard";





const EmailCollaboration = async () => {

    const EmailCollaboration = await getEmailCollaboration();

    return (
        <div id="Email" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Email & Collaboration</div>
                <div>Create, collaborate, and communicate with your teams and customers.</div>
            </div>
            <div className="flex flex-wrap ">
                {EmailCollaboration.map(({ _id, name, description, btn, image }) => (
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

export default EmailCollaboration;