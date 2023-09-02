
import { apiTest, uri } from '@/services/DbConnect';
import { EmailCollaboration } from '@/services/model/EmailCollaboration';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function  GET () {
    mongoose.connect(uri)
    try {
        const data = await EmailCollaboration.find()
       return NextResponse.json(data)
    } catch (error) {
        console.error('Error fetching user data:', error);
        return NextResponse.json({ error: 'Error fetching user data' }, { status: 500 });
    }
};
