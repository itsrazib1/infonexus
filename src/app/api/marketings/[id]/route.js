import { uri } from "@/services/DbConnect";
import { marketing } from "@/services/model/marketings";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET (res, content){
    mongoose.connect(uri);
    const data = await marketing.find();
    const marketingId = content.params.id;
    const singleData = data.filter(marketing=> marketing.id == marketingId)
    return NextResponse.json(singleData)
}