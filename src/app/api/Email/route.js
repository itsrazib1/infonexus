import { uri } from "@/services/DbConnect";
import { tryNow } from "@/services/model/trynow";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req) {
  mongoose.connect(uri);

  try {
      const { email } = req.query; 
      let query = {};

      if (email) {
          query = { email };
      }

      const data = await tryNow.find(query);
      return NextResponse.json(data);
  } catch (error) {
      console.error('Error fetching user data:', error);
      return NextResponse.json({ error: 'Error fetching user data' }, { status: 500 });
  }
}