import mongoose from 'mongoose';

const financeModel = new mongoose.Schema() 

export const finance = mongoose.models.finances || mongoose.model("finances",financeModel)