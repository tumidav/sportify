import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sportify",
  description:
    "Streamline local sports events with easy registration, smart scheduling, and seamless communication—all in one platform.",
    icons:{
      icon:"/assets/images/logo.png"
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.variable} antialiased`}>
          {/* <header className="flex justify-end items-center p-4 gap-4 h-16"></header> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
 