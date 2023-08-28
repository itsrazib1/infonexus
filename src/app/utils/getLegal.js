

const getLegal = async() => {
    const url = "https://infonexus.netlify.app/api/Legal"
    const res = await fetch (url);
    return res.json();
};

export default getLegal;