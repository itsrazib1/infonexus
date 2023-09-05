import mongoose from 'mongoose';

const securityITManagementSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  image: String,
  name: String,
  description: String,
  btnRoute: String,
  btn: String,
});

export const securityITManagement = mongoose.models.securityITManagement || mongoose.model('securityITManagement', securityITManagementSchema);
