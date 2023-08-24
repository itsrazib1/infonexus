import { uri } from "@/services/DbConnect";
import { finance } from "@/services/model/finance";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET (res, connect){
    mongoose.connect(uri);
    const data = await finance.find();
    const financeId = connect.params.id;
    const singleData = data.filter((finance)=>finance.id == financeId)
    return NextResponse.json(singleData)
}