import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin: Facebook - Connect with friends and the world around you on Facebook.",
  description: "Admin Page: Facebook is a social media platform that allows you to connect with friends and the world around you.",
};

export default function AdminLayout({ children }) {
  return (
    <>
    <span>Admin Navbar</span>
    {children}
    </>
  );
}
