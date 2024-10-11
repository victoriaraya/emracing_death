import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import { Marcellus } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-marcellus",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Meaningful EndCare",
  description: "End-of-life doula",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marcellus.className} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
