import { NextResponse } from 'next/server'
// This function can be marked `async` if using `await` inside
export const  middleware = async(request) => {
//   return NextResponse.redirect(new URL('/home', request.url))
try {
    let cookie = request.cookis.get('jwt-token')?.value;
    if(!cookie||!cookie.startsWith("bearer")) throw new Error("Invalid Token")

} catch (error) {
    
}
return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/about/:path*', '/dashboard/:path*'],
}