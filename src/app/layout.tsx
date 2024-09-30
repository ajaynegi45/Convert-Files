import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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


const departureMono = localFont({
  src: "./fonts/DepartureMono-Regular.woff",
  variable: "--departure-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Convert Files - Secure & Fast",
  description: "Fast and secure file converter that transforms any file type into compatible formats directly on your device. Powered by WebAssembly, your files stay safe as nothing is uploaded to a server. Enjoy hassle-free, offline file conversions tool that keeps your data private.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${departureMono.variable} ${geistSans.variable} ${geistMono.variable} `}>
    <main>
      <Navbar/>
        {children}
      {/*<SpeedInsights />*/}
      <Footer/>
    </main>
    </body>
    </html>
  );
}
