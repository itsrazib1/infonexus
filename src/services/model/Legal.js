import mongoose from 'mongoose';

const legalModel = new mongoose.Schema() 

export const legal = mongoose.models.legals || mongoose.model("legal",legalModel)