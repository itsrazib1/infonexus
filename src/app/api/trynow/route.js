import { apiTest, uri } from '@/services/DbConnect';
import { tryNow } from '@/services/model/trynow';
// import { Sales } from '@/services/model/sales';
// import { users } from '@/services/model/users';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
    mongoose.connect(uri)
    const data = await tryNow.find()
    // console.log(data);
    return NextResponse.json(data)
};


export async function POST(req) {
    const userLode = await req.json();

    try {
        await mongoose.connect(uri);

        const existingUser = await tryNow.findOne({ email: userLode.email });
        const existingUserName = await tryNow.findOne({ name: userLode.name });

        if (existingUser || existingUserName) {
            console.log('User already exists:', existingUser);
            return NextResponse.json({ message: 'User already exists' }, { status: 400 });
        }
        const userDataLode = new tryNow(userLode);
        const result = await userDataLode.save();
        console.log('User saved:', result);
        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        console.error('Error saving user data:', error);
        return NextResponse.json({ error: 'Error saving user data' }, { status: 500 });
    }
}


