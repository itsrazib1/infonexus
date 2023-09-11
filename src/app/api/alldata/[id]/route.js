import { uri } from '@/services/DbConnect';
import { alldata } from '@/services/model/Alldata';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function  GET (req,content) {
    mongoose.connect(uri)
    const data = await alldata.find()
    // console.log(data)
    const alldataId = content.params.id 
    const singleData = data.filter((alldata)=> alldata.id == alldataId)
   return NextResponse.json(singleData)
};