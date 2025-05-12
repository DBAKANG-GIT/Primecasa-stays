import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import SiteFooter from "./component/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plusjakarta",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: "PrimeCasa",
  description: "A ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="antialiased font-sans " >
        <Navbar />
        {children}
        <SiteFooter/>
      </body>
    </html>
  );
}
