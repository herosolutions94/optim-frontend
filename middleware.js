// middleware.js
import { NextResponse } from "next/server";
import { SIGNIN_PAGE } from "./constants/link";

export default function middleware(request) {
    const authToken = request.cookies.get("authToken")?.value;
    if (!authToken) {
        return NextResponse.redirect(
            new URL(`${SIGNIN_PAGE}?from=${request.nextUrl.pathname}`, request.url)
        );
    }
}

export const config = {
    matcher: [
        "/dashboard",
        "/email-verification",
        "/dashboard/subscriptions",
        "/dashboard/profile-settings",
        "/dashboard/myevents",
        "/checkout/:path*",
    ]
};
