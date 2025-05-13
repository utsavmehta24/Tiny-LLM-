// context/userProvider.js
"use client";
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { toast } from 'react-toastify';
import { curentUser } from '@/app/Services/userService';

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        credits: 0
    });
    
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                setLoading(true);
                const currentUser = await curentUser();
                setUser(currentUser || { name: "", email: "", credits: 0 });
            } catch (error) {
                console.error("Error loading current user:", error);
                toast.error("Error loading user data");
                setUser({ name: "", email: "", credits: 0 });
            } finally {
                setLoading(false);
            }
        };
        
        fetchCurrentUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;