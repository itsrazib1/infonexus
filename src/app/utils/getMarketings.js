

const getMarketings = async() => {
    const url = "http://localhost:3000/api/marketings"
    const res = await fetch (url);
    return res.json();
};

export default getMarketings;