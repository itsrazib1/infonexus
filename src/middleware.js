import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
    const { pathname } = request.nextUrl;
    try {
        let cookie = request.cookies.get("jwt-token")?.value;
        if (!cookie || !cookie.startsWith("Bearer ")) { // Check for 'Bearer ' prefix
            throw new Error("Invalid Token");
        }
        const secret = new TextEncoder().encode(process.env.jwt_secret);
        await jwtVerify(cookie.split("Bearer ")[1], secret); // Remove 'Bearer ' prefix
        return NextResponse.next();
    } catch (error) {
        // return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
    }
};

export const config = {
    matcher: ["/all-product/:path*", "/dashboard/:path*"],
};