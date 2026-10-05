import { NextResponse, type NextRequest } from "next/server";

// Forwards the requested hostname so server components can resolve the tenant.
// (In Next 16 this file is renamed proxy.ts; the contents stay the same.)
export function middleware(req: NextRequest) {
  const host = (req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? "").toLowerCase();
  const headers = new Headers(req.headers);
  headers.set("x-tenant-host", host);
  return NextResponse.next({ request: { headers } });
}

export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)"] };
