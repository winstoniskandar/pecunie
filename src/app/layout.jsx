import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pecunie | AI Data Agent",
  description: "AI Data Agent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.2/css/all.css" />
      </head>
      <body className={`${inter.className}`}>
        <Header />
        <div className={"pt-20"}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
