
import { uri } from "@/services/DbConnect";
import { developerplatform } from "@/services/model/Developerplatform";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET (res, connect){
    mongoose.connect(uri);
    const data = await developerplatform.find();
    const developerplatformId = connect.params.id;
    const singleData = data.filter((developerplatform)=>developerplatform.id == developerplatformId)
    return NextResponse.json(singleData)
}