import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const redirects: Record<string, string> = {
  "/mail": "mailto:hello@shahidkhanghouri.com",
  "/email": "mailto:hello@shahidkhanghouri.com",
  "/whatsapp": "https://wa.me/923055666789",
};

export function proxy(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const destination = redirects[pathname];

  if (!destination) {
    return NextResponse.next();
  }

  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ["/mail", "/email", "/whatsapp"],
};
