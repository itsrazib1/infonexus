

const getEmailCollaboration = async() => {
    const url = "https://infonexus.netlify.app/api/EmailCollaboration"
    const res = await fetch (url);
    return res.json();
};

export default getEmailCollaboration;