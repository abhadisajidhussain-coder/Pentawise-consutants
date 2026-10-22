
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Montserrat, Roboto, Dela_Gothic_One } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const delaGothic = Dela_Gothic_One({
  subsets: ["latin"],
  variable: "--font-dela-gothic",
  weight: "400",
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
      <body className={`${montserrat.variable} ${roboto.variable} ${delaGothic.variable}`}>
        <div className="site-top-background">
          <Navbar />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
