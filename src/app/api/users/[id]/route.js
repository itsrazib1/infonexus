
import { uri } from '@/services/DbConnect';
import { users } from '@/services/model/users';
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

export async function DELETE(req, content) {
    mongoose.connect(uri)
    try {
        const usersId = content.params.id;

        const deletedItem = await users.findOneAndDelete({ _id: usersId });

        if (!deletedItem) {
            return NextResponse.json({ result: "Item not found" }, { status: 404 });
        }

        return NextResponse.json({ result: "Item deleted" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ result: "Internal error, please try again later", success: false }, { status: 500 });
    }
}
export async function PUT(req) {
    const { id, newRole } = await req.json();
  
    try {
      const updatedUser = await users.findByIdAndUpdate(
        id,
        { role: newRole },
        { new: true }
      );
  
      console.log("User role updated:", updatedUser);
      return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
      console.error("Error updating user role:", error);
      return NextResponse.json(
        { error: "Error updating user role" },
        { status: 500 }
      );
    }
  }
