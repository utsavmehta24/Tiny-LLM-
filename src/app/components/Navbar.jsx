// src/app/components/Navbar.jsx
"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import UserContext from "@/context/userContext";
import { logOut } from "../Services/userService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      setUser({ name: "", email: "", credits: 0 });
      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error("Logout failed");
    }
  };

  const commonLinkStyles = "px-4 py-2 rounded font-medium transition hover:scale-105";

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
          NextGen AI
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {user?.email ? (
            <>
              {/* Credits */}
              <span className="text-sm text-gray-300">
                Credits left: <strong className="text-teal-400">
                  {user.credits}
                  </strong>
              </span>

              {/* Dashboard */}
              <Link href="/Dashboard" className={`${commonLinkStyles} bg-teal-500 hover:bg-teal-600 text-white`}>
                Dashboard
              </Link>

              {/* Username */}
              <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded">
                {user.name}
              </span>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className={`${commonLinkStyles} bg-red-500 hover:bg-red-600 text-white`}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Not signed in */}
              <Link href="/login" className={`${commonLinkStyles} border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900`}>
                Login
              </Link>
              <Link href="/signup" className={`${commonLinkStyles} border border-white text-white hover:bg-white hover:text-gray-900`}>
                Signup
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          {isMobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          {user?.email ? (
            <>
              <div className="text-sm text-gray-300">
                Credits left: <strong className="text-teal-400">{user.credits}</strong>
              </div>
              <Link href="/Dashboard" className="block w-full text-center py-2 bg-teal-500 rounded hover:bg-teal-600 transition">
                Dashboard
              </Link>
              <div className="px-4 py-2 bg-gray-700 text-gray-200 rounded">
                {user.name}
              </div>
              <button
                onClick={handleLogout}
                className="w-full py-2 bg-red-500 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="block w-full text-center py-2 border border-teal-400 text-teal-400 rounded hover:bg-teal-400 hover:text-gray-900 transition">
                Login
              </Link>
              <Link href="/signup" className="block w-full text-center py-2 border border-white text-white rounded hover:bg-white hover:text-gray-900 transition">
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}