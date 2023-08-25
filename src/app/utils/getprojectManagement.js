

const getprojectManagement = async() => {
    const url = "https://infonexus.netlify.app/api/projectManagement"
    const res = await fetch (url);
    return res.json();
};

export default getprojectManagement;