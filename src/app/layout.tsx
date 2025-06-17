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
  title: "Seguros Camporino - Tu tranquilidad, nuestra prioridad",
  description: "Cotizá online tu seguro de auto, hogar, salud y más. Atención personalizada, sin trámites complicados.",
   keywords: [
    "seguros Camporino",
    "seguros online Argentina",
    "seguros para autos",
    "cotizar seguro",
    "seguros baratos",
  ],
  openGraph: {
  title: "Seguros Camporino - Tu tranquilidad, nuestra prioridad",
  description: "Cotizá online tu seguro de auto, hogar, salud y más. Atención personalizada, sin trámites complicados.",
  url: "https://seguroscamporino.com",
  siteName: "Seguros Camporino",
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Seguros Camporino",
    },
  ],
  type: "website",
},
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.className}>

        <Navbar />
        {children}
        <Toaster position="top-center" />
        <Footer />
      </body>

    </html>

  );
}
