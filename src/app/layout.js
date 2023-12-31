import Navbar from "@/Component/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/Component/Footer/Footer";
import Providers from "./Context/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Info Nexus",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </body>
      </Providers>
    </html>
  );
}