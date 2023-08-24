import mongoose from "mongoose";
const EmailCollaborationModel = new mongoose.Schema();

export const EmailCollaboration = mongoose.models.emailcollaborations || mongoose.model("emailcollaborations", EmailCollaborationModel)
