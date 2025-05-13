// "use client";

// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { signUp } from '../Services/userService';
// import { useRouter } from 'next/navigation';

// const Signup_Page_Client = () => {
//     const router = useRouter();
//     const [submitData, setSubmitData] = useState({
//         name: "",
//         email: "",
//         password: "",
//     });

//     const handleSubmitData = async (event) => {
//         event.preventDefault();
        
//         const { name, email, password } = submitData;

//         if (!name.trim()) {
//             toast.warning("Name is required", {
//                 position: 'top-center',
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//             });
//             return;
//         }
//         if (!email.trim()) {
//             toast.warning("Email is required", {
//                 position: 'top-center',
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//             });
//             return;
//         }
//         if (!password.trim()) {
//             toast.warning("Password is required", {
//                 position: 'top-center',
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//             });
//             return;
//         }
        
//         try {
//             const result = await signUp(submitData);
//             toast.success("Signup Successfully", {
//                 position: 'top-center',
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//             });
//             setSubmitData({
//                 name: "",
//                 email: "",
//                 password: "",
//             });
//             router.push("/login");
//         } catch (error) {
//             console.error(error);
//             toast.error(`Error Creating the user: ${error.response?.data?.message || 'Unknown error'}`, {
//                 position: 'top-center',
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//             });
//         }
//     };

//     return (
//         <div className="bg-gray-800 relative lg:py-20">
//             <div className="flex flex-col items-center justify-between px-10 max-w-7xl mx-auto lg:flex-row">
//                 <div className="flex flex-col items-center w-full lg:flex-row">
//                     <div className="w-full lg:w-7/12 relative max-w-md lg:max-w-2xl">
//                         <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
//                             <img src="https://cdn.pixabay.com/photo/2024/04/18/15/06/ai-generated-8704489_1280.jpg" className="btn- rounded-full" alt="Health" />
//                         </div>
//                     </div>
//                     <div className="w-full mt-20 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
//                         <form className='z-0' onSubmit={handleSubmitData}>
//                             <div className="flex flex-col items-start justify-start p-10 bg-gray-700 shadow-2xl rounded-xl">
//                                 <p className="w-full text-4xl font-medium text-center text-white">Sign up for an account</p>
//                                 <div className="w-full mt-6 space-y-8">
//                                     <div className="relative">
//                                         <label htmlFor='user_name' className="bg-gray-700 px-2 -mt-3 font-medium text-gray-300 absolute">Username</label>
//                                         <input id='user_name' placeholder="Enter Your name here" type="text" className="border placeholder-gray-400 focus:outline-none focus:border-white w-full p-4 mt-2 text-base block bg-gray-700 text-white border-gray-300 rounded-md" name='name'
//                                             onChange={(event) => setSubmitData({
//                                                 ...submitData,
//                                                 name: event.target.value,
//                                             })}
//                                             value={submitData.name} />
//                                     </div>
//                                     <div className="relative">
//                                         <label htmlFor='user_email' className="bg-gray-700 px-2 -mt-3 font-medium text-gray-300 absolute">Email</label>
//                                         <input id='user_email' placeholder="123@ex.com" type="email" className="border placeholder-gray-400 focus:outline-none focus:border-white w-full p-4 mt-2 text-base block bg-gray-700 text-white border-gray-300 rounded-md"
//                                             name='email'
//                                             onChange={(event) => setSubmitData({
//                                                 ...submitData,
//                                                 email: event.target.value,
//                                             })}
//                                             value={submitData.email} />
//                                     </div>
//                                     <div className="relative">
//                                         <label htmlFor='user_password' className="bg-gray-700 px-2 -mt-3 font-medium text-gray-300 absolute">Password</label>
//                                         <input id='user_password' placeholder="Password" type="password" className="border placeholder-gray-400 focus:outline-none focus:border-white w-full p-4 mt-2 text-base block bg-gray-700 text-white border-gray-300 rounded-md"
//                                             name='password'
//                                             onChange={(event) => setSubmitData({
//                                                 ...submitData,
//                                                 password: event.target.value,
//                                             })}
//                                             value={submitData.password} />
//                                     </div>
//                                     <div className="relative">
//                                         <button type='submit' className="w-full inline-block py-4 px-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600">
//                                             Submit
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//   );
// }

// export default Signup_Page_Client;

"use client";

import React, { useState } from 'react';
import { signUp } from '../Services/userService';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup_Page_Client = () => {
  const router = useRouter();
  const [submitData, setSubmitData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State for password visibility
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false
  });

  // Toggle password visibility
  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  // Regex for validation
  const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/; // min 6 chars, alphas, numbers, special

  const handleSubmitData = async (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = submitData;

    // Username validation
    if (!name.trim()) {
      toast.warning("User name is required", { position: 'top-center', autoClose: 5000 });
      return;
    }

    // Email presence and format validation
    if (!email.trim()) {
      toast.warning("Email is required", { position: 'top-center', autoClose: 5000 });
      return;
    }
    if (!emailRegex.test(email)) {
      toast.warning("Email is not valid", { position: 'top-center', autoClose: 5000 });
      return;
    }

    // Password presence
    if (!password) {
      toast.warning("Password is required", { position: 'top-center', autoClose: 5000 });
      return;
    }
    if (!confirmPassword) {
      toast.warning("Confirm Password is required", { position: 'top-center', autoClose: 5000 });
      return;
    }

    // Password complexity
    if (!passwordRegex.test(password)) {
      toast.warning(
        "Password must be at least 6 characters, include letters, numbers, and a special character",
        { position: 'top-center', autoClose: 5000 }
      );
      return;
    }

    // Match passwords
    if (password !== confirmPassword) {
      toast.error("Passwords do not match", { position: 'top-center', autoClose: 5000 });
      return;
    }

    // All validations passed, proceed to API call
    try {
      await signUp({ name: name.trim(), email: email.trim(), password });
      toast.success("Signup successful", { position: 'top-center', autoClose: 5000 });
      setSubmitData({ name: "", email: "", password: "", confirmPassword: "" });
      router.push('/login');
    } catch (error) {
      console.error(error);
      toast.error(
        `Error creating user: ${error.response?.data?.message || 'Unknown error'}`,
        { position: 'top-center', autoClose: 5000 }
      );
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="bg-gray-800 min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 md:px-8 lg:px-16 lg:gap-x-12">
          {/* Illustration: hidden on mobile and tablet, visible on laptop+ */}
          <div className="hidden lg:flex lg:w-6/12 justify-center">
            <div className="relative w-full max-w-6xl aspect-[3/2]">
              <Image
                src="https://cdn.mos.cms.futurecdn.net/VFLt5vHV7aCoLrLGjP9Qwm-970-80.jpg.webp"
                alt="Onboarding handshake illustration"
                height={1500}
                width={1300}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Signup Form */}
          <div className="w-full lg:w-6/12 mt-12 lg:mt-0">
            <form onSubmit={handleSubmitData} className="bg-gray-700 p-6 sm:p-8 lg:p-10 rounded-xl shadow-2xl">
              <h2 className="text-3xl sm:text-4xl font-medium text-white text-center mb-6">
                Sign up for an account
              </h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="user_name" className="block text-gray-300 mb-1 font-medium">
                    Username
                  </label>
                  <input
                    id="user_name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={submitData.name}
                    onChange={(e) => setSubmitData({ ...submitData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-gray-300 mb-1 font-medium">
                    Email
                  </label>
                  <input
                    id="user_email"
                    name="email"
                    type="email"
                    placeholder="123@ex.com"
                    className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={submitData.email}
                    onChange={(e) => setSubmitData({ ...submitData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="user_password" className="block text-gray-300 mb-1 font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="user_password"
                      name="password"
                      type={showPassword.password ? "text" : "password"}
                      placeholder="Password"
                      className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-12"
                      value={submitData.password}
                      onChange={(e) => setSubmitData({ ...submitData, password: e.target.value })}
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility('password')}
                      className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
                    >
                      {showPassword.password ? (
                        <EyeIcon className="h-6 w-6 text-gray-400" />
                      ) : (
                        <EyeSlashIcon className="h-6 w-6 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor="confirm_password" className="block text-gray-300 mb-1 font-medium">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirm_password"
                      name="confirmPassword"
                      type={showPassword.confirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-12"
                      value={submitData.confirmPassword}
                      onChange={(e) => setSubmitData({ ...submitData, confirmPassword: e.target.value })}
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility('confirmPassword')}
                      className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
                    >
                      {showPassword.confirmPassword ? (
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup_Page_Client;