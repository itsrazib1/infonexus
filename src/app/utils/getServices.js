
export const getServices = async () => {
    const url = "/api/services";
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
