import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").toLowerCase();
  const url = request.nextUrl;
  const { pathname } = url;
  console.log(url);

  const isAdminHost = host.includes("admin.jobiffy.site"); // change this to the domain
  if (isAdminHost) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  const isMainDomain = host.includes("jobiffy.site"); // change this to the domain
  if (isMainDomain && pathname.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}
