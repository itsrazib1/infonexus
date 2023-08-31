

const getServices = async() => {
    const url = "http://localhost:3000/api/services"
    const res = await fetch (url);
    return res.json();
};

export default getServices;