import { uri } from "@/services/DbConnect";
import { chats } from "@/services/model/chats";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    mongoose.connect(uri);
    
    try {
        const data = await chats.find();
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

        const chatDataLode = new chats(userLode);
        const result = await chatDataLode.save();
        console.log('User saved:', result);
        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        console.error('Error saving user data:', error);
        return NextResponse.json({ error: 'Error saving user data' }, { status: 500 });
    }
}

export async function DELETE(req, res) {
      try {
        await mongoose.connect(uri);
        await chats.deleteMany({});
        res.status(200).json({ message: 'All data deleted successfully' });
      } catch (error) {
        console.error(error);
        req.status(500).json({ error: 'An error occurred while deleting data' });
      }
   
  };