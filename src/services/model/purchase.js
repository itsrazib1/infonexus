import mongoose from "mongoose";
const purchaseModel = new mongoose.Schema(
    {
        name: String,
        email: String,
        image: String,
        description: String,
        services: String,

    }
);
export const purchase = mongoose.models.purchases || mongoose.model("purchases", purchaseModel)
