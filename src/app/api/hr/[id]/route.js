
import { uri } from "@/services/DbConnect";
import { hr } from "@/services/model/hr";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET (res, connect){
    mongoose.connect(uri);
    const data = await hr.find();
    const HRId = connect.params.id;
    const singleData = data.filter((HR)=>HR.id == HRId)
    return NextResponse.json(singleData)
}