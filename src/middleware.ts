import { NextResponse, NextRequest } from "next/server";
import { v4 as uuid } from "uuid";

export default function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const id = request.cookies.get("user_id")?.value;

  if (!id) {
    const uid = uuid();
    response.cookies.set({
      name: "user_id",
      path:"/",
      value: uid,
      secure:true,
      httpOnly:true,
      sameSite:"lax",
      maxAge:60*60*24*24
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};