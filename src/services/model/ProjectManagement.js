import mongoose from 'mongoose';

const projectManagementSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  image: String,
  name: String,
  description: String,
  services: String,
  btnRoute: String,
  btn: String,
});

export const projectManagement = mongoose.models.projectManagement || mongoose.model('projectManagement', projectManagementSchema);
