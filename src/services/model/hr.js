import mongoose from 'mongoose';

const hrModel = new mongoose.Schema() 

export const hr = mongoose.models.hrs || mongoose.model("hr",hrModel)