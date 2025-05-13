// Service/userService.js
import { httpAxios } from "@/helper/httpHelper";

export async function signUp(user) {
    const result = await httpAxios.post("/api/users", user).then((res) => {
        res.data
    })
    return result;
}

export const logIn = async (loginData) => {
    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        });

        // Check if the response is valid before parsing
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({
                message: `HTTP error! status: ${response.status}`
            }));
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        // Parse the response with error handling
        try {
            const data = await response.json();
            return data;
        } catch (parseError) {
            console.error("JSON parsing error:", parseError);
            throw new Error("Failed to parse server response");
        }
    } catch (error) {
        console.error("Login service error:", error);
        throw error;
    }
};

export const curentUser = async () => {
    try {
        const response = await fetch("/api/current");
        
        // Check response validity
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Add timeout to prevent hanging requests
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error("Request timeout")), 10000);
        });
        
        // Race the fetch against a timeout
        const data = await Promise.race([
            response.json(),
            timeoutPromise
        ]);
        
        return data;
    } catch (error) {
        console.error("Current user fetch error:", error);
        // Return default user object on error
        return { name: "", email: "", credits: 0 };
    }
};

export const logOut = async () => {
    try {
        const response = await fetch("/api/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Logout service error:", error);
        throw error;
    }
};