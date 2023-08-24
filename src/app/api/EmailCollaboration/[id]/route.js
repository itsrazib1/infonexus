import { uri } from '@/services/DbConnect';
import { EmailCollaboration } from '@/services/model/EmailCollaboration';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function  GET (req,content) {
    mongoose.connect(uri)
    const data = await EmailCollaboration.find()
    console.log(data)
    const collaborationId = content.params.id 
    const singleData = data.filter((collaboration)=> collaboration.id == collaborationId)
   return NextResponse.json(singleData)
};