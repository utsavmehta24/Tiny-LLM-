// api/current/route.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { user } from "@/model/user";
import { connectDb } from "@/helper/db";

export async function GET(request) {
    try {
        const authToken = request.cookies.get("authToken")?.value;
        
        // If no token exists, return empty user
        if (!authToken) {
            return NextResponse.json({ 
                name: "", 
                email: "",
                credits: 0
            });
        }

        // Verify the token
        const data = jwt.verify(authToken, process.env.JWT_TOKEN);
        
        // Connect to DB
        await connectDb();
        
        // Find the user
        const foundUser = await user.findById(data._id).select("-password");
        
        if (!foundUser) {
            return NextResponse.json({ 
                name: "", 
                email: "",
                credits: 0
            });
        }
        
        return NextResponse.json(foundUser);
    } catch (error) {
        console.error("Current user route error:", error);
        return NextResponse.json({ 
            name: "", 
            email: "",
            credits: 0
        });
    }
}