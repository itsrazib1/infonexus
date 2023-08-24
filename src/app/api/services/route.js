import { uri } from "@/services/DbConnect";
import { services } from "@/services/model/services";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET (){
    mongoose.connect(uri);
    const data = await services.find();
    return NextResponse.json(data)
}