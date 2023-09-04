import { uri } from '@/services/DbConnect';
import { tryNow } from '@/services/model/trynow';
// import { users } from '@/services/model/users';
// import { Sales } from '@/services/model/sales';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET(req, content) {
    mongoose.connect(uri)
    const data = await tryNow.find()
    console.log(data)
    const usersId = content.params.id
    const singleData = data.filter((trynow) => trynow.id == usersId)
    return NextResponse.json(singleData)
};


export async function DELETE(req, content) {
    mongoose.connect(uri)
    try {
        const usersId = content.params.id;

        const deletedItem = await tryNow.findOneAndDelete({ _id: usersId });

        if (!deletedItem) {
            return NextResponse.json({ result: "Item not found" }, { status: 404 });
        }

        return NextResponse.json({ result: "Item deleted" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ result: "Internal error, please try again later", success: false }, { status: 500 });
    }
}