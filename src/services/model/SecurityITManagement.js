import mongoose from 'mongoose';

const securityITManagementModel = new mongoose.Schema() 

export const securityITManagement = mongoose.models.securityITManagements || mongoose.model("securityITManagement",securityITManagementModel)