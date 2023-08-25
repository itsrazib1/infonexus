

const getusers = async() => {
    const url = "https://infonexus.netlify.app/api/users"
    const res = await fetch (url);
    return res.json();
};

export default getusers;