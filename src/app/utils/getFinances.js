

const getFinances = async() => {
    const url = "http://localhost:3000/api/finances"
    const res = await fetch (url);
    return res.json();
};

export default getFinances;