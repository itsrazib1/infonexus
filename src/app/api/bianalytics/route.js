import { uri } from "@/services/DbConnect";
import { bianalytics } from "@/services/model/BIAnalytics";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    mongoose.connect(uri);
    const data = await bianalytics.find();
    return NextResponse.json(data);
}