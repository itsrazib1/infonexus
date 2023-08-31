import { uri } from '@/services/DbConnect';
import { tryNow } from '@/services/model/trynow';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
    mongoose.connect(uri);
    const data = await tryNow.find();
    return NextResponse.json(data);
}

export async function POST(req) {
    const userLode = await req.json();

    try {
        await mongoose.connect(uri);

        const userDataLode = new tryNow(userLode);
        const result = await userDataLode.save();
        console.log('User saved:', result);
        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        console.error('Error saving user data:', error);
        return NextResponse.json({ error: 'Error saving user data' }, { status: 500 });
    }
}
