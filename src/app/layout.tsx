import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Seguros Camporino",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>

        <Navbar />
        {children}
        <Toaster position="top-center" />
        <Footer />
      </body>

    </html>

  );
}
