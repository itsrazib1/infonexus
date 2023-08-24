
import { uri } from "@/services/DbConnect";
import { projectManagement } from "@/services/model/ProjectManagement";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET (res, connect){
    mongoose.connect(uri);
    const data = await projectManagement.find();
    const projectManagementId = connect.params.id;
    const singleData = data.filter((projectManagement)=>projectManagement.id == projectManagementId)
    return NextResponse.json(singleData)
}