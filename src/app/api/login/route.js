// api/login/route.js
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
import { user } from "@/model/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(request) {
    try {
        // Get request data with proper error handling
        let reqBody;
        try {
            reqBody = await request.json();
        } catch (parseError) {
            console.error("JSON parsing error:", parseError);
            return NextResponse.json(
                { success: false, message: "Invalid request format" },
                { status: 400 }
            );
        }

        const { email, password } = reqBody;

        // Basic validation
        if (!email || !password) {
            return NextResponse.json(
                { success: false, message: "Email and password are required" },
                { status: 400 }
            );
        }

        // Connect to DB
        await connectDb();

        // Find user
        const foundUser = await user.findOne({ email });

        if (!foundUser) {
            return NextResponse.json(
                { success: false, message: "User not found with this email" },
                { status: 404 }
            );
        }

        // Match password
        const isPasswordValid = await bcrypt.compare(password, foundUser.password);

        if (!isPasswordValid) {
            return NextResponse.json(
                { success: false, message: "Invalid password" },
                { status: 401 }
            );
        }

        // Create token
        const token = jwt.sign({ _id: foundUser._id }, process.env.JWT_TOKEN, {
            expiresIn: "7d",
        });

        // Create success response
        const response = NextResponse.json({
            success: true,
            message: "Login successful",
            user: {
                _id: foundUser._id,
                name: foundUser.name,
                email: foundUser.email,
                credits: foundUser.credits || 0,
            },
        });

        // Set the auth cookie
        response.cookies.set("authToken", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            path: "/",
        });

        return response;
    } catch (error) {
        console.error("Login route error:", error);
        return NextResponse.json(
            { success: false, message: "Something went wrong" },
            { status: 500 }
        );
    }
}