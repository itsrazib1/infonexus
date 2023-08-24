import { uri } from "@/services/DbConnect";
import { finance } from "@/services/model/finance";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    mongoose.connect(uri);
    const data = await finance.find();
    return NextResponse.json(data);
}