

const getEmailCollaboration = async() => {
    const url = "http://localhost:3000/api/EmailCollaboration"
    const res = await fetch (url);
    return res.json();
};

export default getEmailCollaboration;