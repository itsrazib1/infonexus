
import { uri } from "@/services/DbConnect";
import { legal } from "@/services/model/Legal";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET (res, connect){
    mongoose.connect(uri);
    const data = await legal.find();
    const LegalId = connect.params.id;
    const singleData = data.filter((Legal)=>Legal.id == LegalId)
    return NextResponse.json(singleData)
}