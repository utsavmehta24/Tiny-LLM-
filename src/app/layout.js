import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import UserProvider from "@/context/userProvider";
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});
export const metadata = {
  stylesheets: [
    {
      href: "https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css",
      rel: "stylesheet",
    },
    {
      href: "https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css",
      rel: "stylesheet", 
    },
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <Navbar />
          < ToastContainer />
          {children}
        </UserProvider>
      </body>
    </html >
  );
}
