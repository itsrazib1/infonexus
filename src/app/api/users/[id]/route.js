
import { uri } from '@/services/DbConnect';
import { users } from '@/services/model/users';
// import { Sales } from '@/services/model/sales';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function  GET (req,content) {
    mongoose.connect(uri)
    const data = await users.find()
    // console.log(data)
    const usersId = content.params.id 
    const singleData = data.filter((users)=> users.id == usersId)
   return NextResponse.json(singleData)
};