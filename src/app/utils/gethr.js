

// const gethr = async() => {
//     const url = "http://localhost:3000/api/hr"
//     const res = await fetch (url);
//     return res.json();
// };

// export default gethr;


const gethr = async () => {
    const url = "http://localhost:3000/api/hr"
    const res = await fetch(url);
    return res.json();
};

export default gethr;


// export const gethr = async () => {
//     const url = "http://localhost:3000/api/hr";
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         // console.log("Fetched user data:", data); // Add this line
//         return data;
//     } catch (error) {
//         console.error("Fetch error:", error);
//         throw error;
//     }
// };