import mongoose from 'mongoose';

const bianalyticsSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  image: String,
  name: String,
  description: String,
  services: String,
  btnRoute: String,
  btn: String,
});

export const bianalytics = mongoose.models.bianalytics || mongoose.model('bianalytics', bianalyticsSchema);
