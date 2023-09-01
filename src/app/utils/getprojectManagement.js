




export const getprojectManagement = async () => {
    const url = "/api/projectManagement";
    try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log("Fetched user data:", data); // Add this line
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
};
