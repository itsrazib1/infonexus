import axios from "axios";

export const updateUserRole = async (userId, newRole) => {
  try {
    const response = await axios.put(`/api/users/${userId}`, {
      role: newRole, // Include the role field in the request
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
