import { UserData } from '@/app/data/Sales';
import { uri } from '@/services/DbConnect';
import { users } from '@/services/model/users';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import { Result } from 'postcss';

export async function  GET () {
    mongoose.connect(uri)
    const data = await users.find()
    console.log(data);
   return NextResponse.json(data)
};