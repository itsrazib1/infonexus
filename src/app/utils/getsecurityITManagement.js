

const getsecurityITManagement = async() => {
    const url = "https://infonexus.netlify.app/api/securityITManagement"
    const res = await fetch (url);
    return res.json();
};

export default getsecurityITManagement;