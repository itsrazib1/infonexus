import { uri } from "@/services/DbConnect";
import { projectManagement } from "@/services/model/ProjectManagement";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    mongoose.connect(uri);
    const data = await projectManagement.find();
    return NextResponse.json(data);
}