

const getMarketings = async() => {
    const url = "https://infonexus.netlify.app/api/marketings"
    const res = await fetch (url);
    return res.json();
};

export default getMarketings;