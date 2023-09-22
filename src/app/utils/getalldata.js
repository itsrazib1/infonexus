

export const getbianalytics = async () => {
    const url = "/api/alldata";
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
};



