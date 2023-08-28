import { uri } from "@/services/DbConnect";
import { developerplatform } from "@/services/model/Developerplatform";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    mongoose.connect(uri);
    const data = await developerplatform.find();
    return NextResponse.json(data);
}