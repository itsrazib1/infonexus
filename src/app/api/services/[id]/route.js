import { uri } from "@/services/DbConnect";
import { services } from "@/services/model/services";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(res, content) {
    mongoose.connect(uri);
    const data = await services.find();
    const servicesId = content.params.id;
    const singleData = data.filter(services => services.id == servicesId)
    // console.log(singleData)
    return NextResponse.json(singleData)
}