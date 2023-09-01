import { uri } from "@/services/DbConnect";
import { tryNow } from "@/services/model/trynow";
import mongoose from "mongoose";


export default async function handler(req, res) {
  mongoose.connect(uri);
  try {
    let query = {};
    if (req.query?.email) {
      query = { email: req.query.email };
    }

    const result = await tryNow.find(query).toArray();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 1, message: 'Internal server error' });
  }
}