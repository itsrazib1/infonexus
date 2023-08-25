

const gethr = async() => {
    const url = "https://infonexus.netlify.app/api/hr"
    const res = await fetch (url);
    return res.json();
};

export default gethr;