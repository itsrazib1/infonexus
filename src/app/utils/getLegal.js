// const getLegal = async() => {
//     const url = "http://localhost:3000/api/Legal"
//     const res = await fetch (url);
//     return res.json();
// };

// export default getLegal;
const getLegal = async() => {
    const url = "http://localhost:3000/api/Legal"
    const res = await fetch (url);
    return res.json();
};

export default getLegal;