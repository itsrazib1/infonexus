

const getServices = async() => {
    const url = "https://infonexus.netlify.app/api/services"
    const res = await fetch (url);
    return res.json();
};

export default getServices;