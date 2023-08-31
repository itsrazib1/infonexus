// import { uri } from '@/services/DbConnect';
// import { tryNow } from '@/services/model/trynow';
// // import { users } from '@/services/model/users';
// // import { Sales } from '@/services/model/sales';
// import mongoose from 'mongoose';
// import { NextResponse } from 'next/server';

// export async function GET(req, content) {
//     mongoose.connect(uri)
//     const data = await tryNow.find()
//     console.log(data)
//     const usersId = content.params.id
//     const singleData = data.filter((trynow) => trynow.id == usersId)
//     return NextResponse.json(singleData)
// };