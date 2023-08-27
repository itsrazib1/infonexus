const { default: mongoose } = require("mongoose");

const serviceMode = new mongoose.Schema();
export const services = mongoose.models.services || mongoose.model("services", serviceMode)