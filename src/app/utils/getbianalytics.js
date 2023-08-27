

const getbianalytics = async() => {
    const url = "https://infonexus.netlify.app/api/bianalytics"
    const res = await fetch (url);
    return res.json();
};

export default getbianalytics;