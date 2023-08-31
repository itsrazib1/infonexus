
import getprojectManagement from "@/app/utils/getprojectManagement";
import Image from "next/image";



const UserCard = ({ name, description, btn, image }) => (
    <div className="md:w-1/3 sm:w-full p-4 ">
        <div className="bg-white rounded-lg shadow-lg h-48 p-4">
            <Image width={100} height={100} src={image} alt="Image" className='h-10 border  w-10  ' />
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-600">{`${description}`}</p>
            <p className="text-blue-500 font-semibold ">{btn}</p>
        </div>
    </div>
);
const ProjectManagement = async () => {

    const ProjectManagement = await getprojectManagement();
    // console.log(ProjectManagement);

    return (
        <div id="Project" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Project Management</div>
                <div>Choose a project management style that suits your business the best.</div>
            </div>
            <div className="flex flex-wrap ">
                {ProjectManagement.map(({ id, name, description, btn, image }) => (
                    <UserCard
                        key={id}
                        id={id}
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

export default ProjectManagement;