

const getSales = async () => {
    const url = "https://infonexus.netlify.app/api/sales"
    const res = await fetch (url);
    return res.json();
};

export default getSales;