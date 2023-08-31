

const getusers = async() => {
    const url = "http://localhost:3000/api/users"
    const res = await fetch (url);
    return res.json();
};

export default getusers;