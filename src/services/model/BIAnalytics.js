import mongoose from 'mongoose';

const bianalyticsModel = new mongoose.Schema() 

export const bianalytics = mongoose.models.bianalyticss || mongoose.model("bianalytics",bianalyticsModel)