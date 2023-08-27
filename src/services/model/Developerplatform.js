
import mongoose from 'mongoose';

const developerplatformModel = new mongoose.Schema() 

export const developerplatform = mongoose.models.developerplatforms || mongoose.model("developerplatform",developerplatformModel)