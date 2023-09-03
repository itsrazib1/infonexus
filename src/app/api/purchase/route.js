import { uri } from '@/services/DbConnect';
import { purchase } from '@/services/model/purchase';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
    mongoose.connect(uri);
    try {
        const data = await purchase.find();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching user data:', error);
        return NextResponse.json({ error: 'Error fetching user data' }, { status: 500 });
    }
}


export async function POST(req) {
    const filteredCarts = await req.json();

    try {
        await mongoose.connect(uri);

        // Assuming "filteredCarts" is an array, you can save each item individually
        for (const cart of filteredCarts) {
            const CartsDataLode = new purchase(cart);
            await CartsDataLode.save();
        }

        console.log('Users saved');
        return NextResponse.json({ message: 'Users saved' }, { status: 201 });
    } catch (error) {
        console.error('Error saving user data:', error);
        return NextResponse.json({ error: 'Error saving user data' }, { status: 500 });
    }
}

