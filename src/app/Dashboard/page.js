// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";

// export default function Utsav() {
//     const [quote, setQuote] = useState({ text: "", author: "" });
//     const [displayedText, setDisplayedText] = useState("");
//     const [isFetching, setIsFetching] = useState(true);
//     const [isTransitioning, setIsTransitioning] = useState(false);

//     useEffect(() => {
//         const fetchQuotes = async () => {
//             try {
//                 const res = await fetch("/quotes.json"); // Fetch from the local JSON file
//                 if (!res.ok) {
//                     throw new Error("Failed to fetch quotes");
//                 }
//                 const quotes = await res.json();
//                 if (quotes.length > 0) {
//                     setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
//                 }
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 setIsFetching(false);
//             }
//         };

//         fetchQuotes();

//         const intervalId = setInterval(() => {
//             fetchQuotes();
//         }, 5000); // Fetch a new quote every 5 seconds

//         return () => clearInterval(intervalId);
//     }, []);

//     useEffect(() => {
//         if (isFetching || isTransitioning) return;

//         const animateQuote = () => {
//             setIsTransitioning(true);

//             // Clear previous quote and animate new one
//             setDisplayedText(""); // Clear displayed text before animating new quote
//             const words = quote.text.split(' ');
//             let index = 0;

//             const displayNextWord = () => {
//                 if (index < words.length) {
//                     setDisplayedText((prev) => prev + (prev ? ' ' : '') + words[index]);
//                     index++;
//                 } else {
//                     setIsTransitioning(false); // Animation complete
//                 }
//             };

//             const intervalId = setInterval(displayNextWord, 100); // Adjust delay for word-by-word speed

//             return () => clearInterval(intervalId);
//         };

//         animateQuote();
//     }, [quote]);

//     // Clean up author string
//     const cleanAuthor = (author) => {
//         return author?.split(',')[0]?.trim() || "Unknown";
//     };

//     return (
//         <div className="flex flex-col items-center justify-center p-8 bg-gray-900 min-h-screen text-white">
//             <div className="w-full max-w-4xl p-6 bg-gray-800 rounded-md shadow-md">
//                 <h2 className="text-3xl font-bold mb-4 animate-slide-in">Dashboard</h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Task Summary */}
//                     <Link href="/showtask">
//                         <div className="p-4 bg-gray-700 rounded-md shadow-md animate-slide-in flex flex-col items-center justify-center text-center text-3xl cursor-pointer">
//                             <h3 className="font-semibold mb-2 text-3xl">Show Task</h3>
//                         </div>
//                     </Link>

//                     {/* Task Creation */}
//                     <Link href="/addtask">
//                         <div className="p-4 bg-gray-700 rounded-md shadow-md animate-slide-in flex flex-col items-center justify-center text-center text-3xl cursor-pointer">
//                             <h3 className="font-semibold mb-2 text-3xl">Create New Task</h3>
//                         </div>
//                     </Link>

//                     {/* Motivational Line */}
//                     <div className="p-4 bg-gray-700 rounded-md shadow-md animate-slide-in">
//                         <h3 className="text-xl font-semibold mb-2">Thoughts</h3>
//                         <div className="mb-4">
//                             <p className="whitespace-pre-wrap">{displayedText}</p>
//                             <p className="text-blue-400">{cleanAuthor(quote.author)}</p>
//                         </div>
//                     </div>

//                     {/* Links & Updates */}
//                     <div className="p-4 bg-gray-700 rounded-md shadow-md animate-slide-in">
//                         <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
//                         <p>Keep track of the latest updates and features added to the application.</p>
//                         <div className="flex justify-center mt-4">
//                             <a
//                                 href="https://github.com/utsavmehta24"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                             >
//                                 Follow on GitHub
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// File: /pages/dashboard.js

import Link from 'next/link';

export default function Utsav() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <header className="p-6">
        <h1 className="text-4xl font-bold">Tiny LLM Dashboard</h1>
        <p className="mt-2 text-gray-400">Manage your AI models efficiently</p>
      </header>

      <main className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Create Model Card */}
        <Link href="/" passHref>
          <div className="cursor-pointer group block p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition md:p-10 md:h-auto">
            <div className="flex items-center justify-center h-32 md:h-64 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl group-hover:opacity-90">
              <span className="text-6xl md:text-8xl font-bold text-white">+</span>
            </div>
            <h2 className="mt-6 text-2xl font-semibold group-hover:text-blue-400">Create New Model</h2>
            <p className="mt-2 text-gray-400">Upload a text file or paste content to train a new model.</p>
          </div>
        </Link>

        {/* Use Model Card */}
        <Link href="/" passHref>
          <div className="cursor-pointer group block p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition md:p-8 md:h-auto">
            <div className="flex items-center justify-center h-32 md:h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl group-hover:opacity-90">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-32 md:w-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M9 16h6M9 8h6" />
              </svg>
            </div>
            <h2 className="mt-6 text-2xl font-semibold group-hover:text-pink-400">Your Models</h2>
            <p className="mt-2 text-gray-400">Access and query the models you've already trained.</p>
          </div>
        </Link>
      </main>

      <footer className="p-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Tiny-LLM Dashboard
      </footer>
    </div>
  );
}