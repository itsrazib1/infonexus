

const getdeveloperplatform = async() => {
    const url = "http://localhost:3000/api/developerplatform"
    const res = await fetch (url);
    return res.json();
};

export default getdeveloperplatform;