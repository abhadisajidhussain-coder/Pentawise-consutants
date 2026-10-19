import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Pentawise Consultants",
  description: "Expert education and consultancy services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
