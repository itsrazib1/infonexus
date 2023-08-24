import { uri } from "@/services/DbConnect";
import { securityITManagement } from "@/services/model/SecurityITManagement";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    mongoose.connect(uri);
    const data = await securityITManagement.find();
    return NextResponse.json(data);
}