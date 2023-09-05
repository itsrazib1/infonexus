import { uri } from "@/services/DbConnect";
import { services } from "@/services/model/services";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    mongoose.connect(uri);
    try {
        const data = await services.find();
        console.log(data)
        return NextResponse.json(data)
    } catch (error) {
        console.error('Error fetching user data:', error);
        return NextResponse.json({ error: 'Error fetching user data' }, { status: 500 });
    }
}


