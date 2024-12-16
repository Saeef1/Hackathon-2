import Header from "./header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Montserrat  from "next/font/local";
import Poppins  from "next/font/local";
import Footer from "./footer";
import "./globals.css";

const montserrat = Montserrat({
  src:"./fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
  variable:"--font-montserrat",
  weight:"100 900"
}) 
const poppins = Poppins({
  src:"./fonts/Poppo/Poppins-Medium.ttf",
  variable:"--font-poppins",
  weight:"100 900"
}) 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} ${poppins.className}antialiased`}
      >
        <Header/>        
        {children}
        <Footer />
      </body>
    </html>
  );
}
