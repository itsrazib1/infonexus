
import { apiTest, uri } from '@/services/DbConnect';
import { EmailCollaboration } from '@/services/model/EmailCollaboration';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function  GET () {
    mongoose.connect(uri)
    const data = await EmailCollaboration.find()
    console.log(data);
   return NextResponse.json(data)
};