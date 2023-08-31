import { uri } from '@/services/DbConnect';
import { users } from '@/services/model/users';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
    mongoose.connect(uri);
    
    try {
        const data = await users.find();
        // console.log(data);
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching user data:', error);
        return NextResponse.json({ error: 'Error fetching user data' }, { status: 500 });
    }
}
export async function POST(req) {
    const userLode = await req.json();
    
    try {
        await mongoose.connect(uri);
        
        const existingUser = await users.findOne({ email: userLode.email });
        
        if (existingUser) {
            console.log('User already exists:', existingUser);
            return NextResponse.json({ message: 'User already exists' }, { status: 400 });
        }
        const userDataLode = new users(userLode);
        const result = await userDataLode.save();
        console.log('User saved:', result);
        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        console.error('Error saving user data:', error);
        return NextResponse.json({ error: 'Error saving user data' }, { status: 500 });
    }
}
