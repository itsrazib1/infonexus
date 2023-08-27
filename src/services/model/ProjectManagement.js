import mongoose from 'mongoose';

const projectManagementModel = new mongoose.Schema() 

export const projectManagement = mongoose.models.projectManagements || mongoose.model("projectmanagement",projectManagementModel)