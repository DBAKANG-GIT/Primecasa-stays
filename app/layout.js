import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import SiteFooter from "./component/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";



const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plusjakarta",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: "PrimeCasa | Premium Short-Stay Rentals for Business & Leisure",
  description: "Discover luxury and affordable short-stay rental homes with PrimeCasa. Perfect for business travelers, vacationers, and families looking for comfort and convenience.",
  keywords: [
    "PrimeCasa", "short-stay rentals", "vacation homes", "luxury apartments",
    "business travel", "temporary housing", "rental apartments", "serviced apartments"
  ],
  authors: [{ name: "PrimeCasa Team", url: "https://primecasa.vercel.app" }],
  creator: "PrimeCasa",
  metadataBase: new URL("https://primecasa.vercel.app"),
  openGraph: {
    title: "PrimeCasa | Premium Short-Stay Rentals",
    description: "Find the perfect luxury rental apartment or vacation home with PrimeCasa.",
    url: "https://primecasa.vercel.app",
    siteName: "PrimeCasa",
    images: [
      {
        url: "/icon/Logo.svg", 
        width: 1200,
        height: 630,
        alt: "PrimeCasa preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
 
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="antialiased font-sans " >
        <Navbar />
        {children}
        <Analytics />
<SpeedInsights />

        <SiteFooter/>
      </body>
    </html>
  );
}
