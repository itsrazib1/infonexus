import { uri } from '@/services/DbConnect';
import { Sales } from '@/services/model/sales';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function  GET (req,content) {
    mongoose.connect(uri)
    const data = await Sales.find()
    console.log(data)
    const salesId = content.params.id 
    const singleData = data.filter((sales)=> sales.id == salesId)
   return NextResponse.json(singleData)
};
