import { uri } from "@/services/DbConnect";
import { hr } from "@/services/model/hr";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    mongoose.connect(uri);
    const data = await hr.find();
    return NextResponse.json(data);
}