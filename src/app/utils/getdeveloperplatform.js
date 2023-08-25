

const getdeveloperplatform = async() => {
    const url = "https://infonexus.netlify.app/api/developerplatform"
    const res = await fetch (url);
    return res.json();
};

export default getdeveloperplatform;