

const getFinances = async() => {
    const url = "https://infonexus.netlify.app/api/finances"
    const res = await fetch (url);
    return res.json();
};

export default getFinances;