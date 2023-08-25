import { uri } from "@/services/DbConnect";
import {  legal } from "@/services/model/Legal";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    mongoose.connect(uri);
    const data = await legal.find();
    return NextResponse.json(data);
}