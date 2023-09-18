const tokenJWT = async (payload) => {
    try {
        const res = await fetch("/api/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Fix typo here
            },
            body: JSON.stringify(payload), // Fix JSON.stringify
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
};

export default tokenJWT;