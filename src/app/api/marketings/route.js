import { uri } from "@/services/DbConnect";
import { marketing } from "@/services/model/marketings";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET (){
    mongoose.connect(uri);
    const data = await marketing.find();
    return NextResponse.json(data)
}