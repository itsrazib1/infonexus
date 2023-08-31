

const getbianalytics = async() => {
    const url = "http://localhost:3000/api/bianalytics"
    const res = await fetch (url);
    return res.json();
};

export default getbianalytics;