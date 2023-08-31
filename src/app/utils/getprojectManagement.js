

const getprojectManagement = async() => {
    const url = "http://localhost:3000/api/projectManagement"
    const res = await fetch (url);
    return res.json();
};

export default getprojectManagement;