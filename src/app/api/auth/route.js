import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  const secret = new TextEncoder().encode(process.env.jwt_secret);
  const alg = 'HS256';

  const jwt = await new SignJWT(body)
  .setProtectedHeader({ alg })
  .setIssuedAt()
  .setExpirationTime('60d')
  .sign(secret);

// Set the cookie in the response object without 'Bearer' prefix
const response = NextResponse.json({ message: "Token created" });
response.cookies.set("jwt-token",`Bearer ${jwt}`, { secure: true, httpOnly: true });

return response;
};