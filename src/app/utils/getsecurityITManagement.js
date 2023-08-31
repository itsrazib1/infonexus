

const getsecurityITManagement = async() => {
    const url = "http://localhost:3000/api/securityITManagement"
    const res = await fetch (url);
    return res.json();
};

export default getsecurityITManagement;