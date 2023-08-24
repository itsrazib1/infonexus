import { uri } from '@/services/DbConnect';
import { Sales } from '@/services/model/sales';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function  GET () {
    mongoose.connect(uri)
    const data = await Sales.find()
    // console.log(data);
   return NextResponse.json(data)
};
