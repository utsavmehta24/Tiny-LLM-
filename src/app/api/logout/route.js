// pages/api/logout/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
    const response = NextResponse.json({
        message: "User logged out successfully",
        status: true,
    });

    response.cookies.set("authToken", "", {
        expires: new Date(0),
    });
    return response;

    
}