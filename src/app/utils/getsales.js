

const getSales = async () => {
    const url = "http://localhost:3000/api/sales"
    const res = await fetch (url);
    return res.json();
};

export default getSales;