import { uri } from "@/services/DbConnect";
import { services } from "@/services/model/services";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    mongoose.connect(uri);
    const data = await services.find();
    console.log(data)
    return NextResponse.json(data)
}

// export async function post(req) {
//     const serviceData = await req.Json()

// }