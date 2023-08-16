"use client"
import Navbar from "@/Component/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/Component/Footer/Footer";
import { AuthContextProvider } from "./Context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Info Nexus",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className={inter.className}>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </body>
      </AuthContextProvider>
    </html>
  );
}
