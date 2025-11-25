import { NextResponse } from "next/server";
export function middleware(request) {
  const fullUrl = `${request.nextUrl.protocol}//${request.nextUrl.hostname}${
    request.nextUrl.port ? `:${request.nextUrl.port}` : ""
  }`;
  const headers = new Headers(request.headers);
  headers.set("x-full-url", fullUrl);
  return NextResponse.next({ headers });
}

export const config = {
  matcher: [
    // match all routes except static files and APIs
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
