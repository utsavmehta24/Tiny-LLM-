// login/LoginPage.jsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { logIn } from '../Services/userService';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const router = useRouter();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    // Regex for validation
    const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;

    const handleLoginData = async (event) => {
        event.preventDefault();
        const { email, password } = loginData;

        if (!email.trim()) {
            toast.warning("Email is required", { position: 'top-center', autoClose: 5000 });
            return;
        }
        if (!emailRegex.test(email)) {
            toast.warning("Email is not valid", { position: 'top-center', autoClose: 5000 });
            return;
        }

        if (!password) {
            toast.warning("Password is required", { position: 'top-center', autoClose: 5000 });
            return;
        }

        try {
            const response = await logIn({ email: email.trim(), password });

            if (response.data.status) {
                toast.success("Login successful", { position: 'top-center', autoClose: 5000 });
                setLoginData({ email: "", password: "" });
                router.push('/Dashboard');
            } else {
                toast.error(`Login failed: ${response.data.message}`, { position: 'top-center', autoClose: 5000 });
            }
        } catch (error) {
            console.error(error);
            toast.error(`Error logging in: ${error.response?.data?.message || 'Unknown error'}`, { position: 'top-center', autoClose: 5000 });
        }
    };

    return (
        <>
            <ToastContainer position="top-center" autoClose={3000} />
            <div className="bg-gray-800 min-h-screen flex items-center">
                <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 md:px-8 lg:px-16 lg:gap-x-12">
                    <div className="hidden lg:flex lg:w-6/12 justify-center">
                        <div className="relative w-full max-w-6xl aspect-[3/2]">
                            <Image
                                src="https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?s=612x612&w=0&k=20&c=50maOJU6CpVC55mYnUqtff2aiaJZ7KlmMn4jNhWD_eo="
                                alt="Login illustration"
                                height={1500}
                                width={1300}
                                className="rounded-xl shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-6/12 mt-12 lg:mt-0">
                        <form onSubmit={handleLoginData} className="bg-gray-700 p-6 sm:p-8 lg:p-10 rounded-xl shadow-2xl">
                            <h2 className="text-3xl sm:text-4xl font-medium text-white text-center mb-6">Login to your account</h2>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="user_email" className="block text-gray-300 mb-1 font-medium">Email</label>
                                    <input
                                        id="user_email"
                                        name="email"
                                        type="email"
                                        placeholder="123@ex.com"
                                        className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        value={loginData.email}
                                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                    />
                                </div>
                                <div className="relative">
                                    <label htmlFor="user_password" className="block text-gray-300 mb-1 font-medium">Password</label>
                                    <div className="relative">
                                        <input
                                            id="user_password"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-12"
                                            value={loginData.password}
                                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
                                        >
                                            {showPassword ? (
                                                <EyeIcon className="h-6 w-6 text-gray-400" />
                                            ) : (
                                                <EyeSlashIcon className="h-6 w-6 text-gray-400" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 text-lg font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition duration-200"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;