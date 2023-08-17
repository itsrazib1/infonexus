import { SignJWT } from "jose";
import { cookies } from "Next/headers";
import { NextResponse } from "next/server";

export const POST = async (request) => {
const body = await request.json();
const secret = new TextEncoder().encode(
    'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
  )
  const alg = 'HS256'
  
  const jwt = await new SignJWT(body)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime('90d')
    .sign(secret)
  
cookies().set({
    name:"jwt-token",
    value:`bearer ${jwt}`,
    secure:true,
    httpOnly:true,
})
return NextResponse.json({ message:"Token Create"})
  
}