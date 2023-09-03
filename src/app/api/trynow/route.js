import { uri } from '@/services/DbConnect';
import { tryNow } from '@/services/model/trynow';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
    mongoose.connect(uri);
    try {
        const data = await tryNow.find();
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

        const userDataLode = new tryNow(userLode);
        const result = await userDataLode.save();
        console.log('User saved:', result);
        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        console.error('Error saving user data:', error);
        return NextResponse.json({ error: 'Error saving user data' }, { status: 500 });
    }
}
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");

    try {
        await mongoose.connect(uri);

        const deletedUser = await tryNow.findByIdAndDelete(id);

        if (!deletedUser) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "User deleted" }, { status: 200 });
    } catch (error) {
        console.error('Error deleting user:', error);
        return NextResponse.json({ error: 'Error deleting user' }, { status: 500 });
    }
}


