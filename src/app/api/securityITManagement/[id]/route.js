
import { uri } from "@/services/DbConnect";
import { securityITManagement } from "@/services/model/SecurityITManagement";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET (res, connect){
    mongoose.connect(uri);
    const data = await securityITManagement.find();
    const securityITManagementId = connect.params.id;
    const singleData = data.filter((securityITManagement)=>securityITManagement.id == securityITManagementId)
    return NextResponse.json(singleData)
}