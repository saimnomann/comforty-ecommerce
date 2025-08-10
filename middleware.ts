import { cookies } from "next/headers";
import { NextResponse,NextRequest } from "next/server";
import {v4 as uuid} from "uuid"
export default function middleware(request:NextRequest){
const response=NextResponse.next()
const id=request.cookies.get("user_id")?.value
if(!id){
const uid=uuid()
response.cookies.set("user_id",uid)
}
return response
}

export const config={
    matcher: ['/((?!_next|favicon.ico).*)'],
}