import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import ActiveSectionContext from "@/context/active-section-context";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Poppins({ subsets: ["latin"],weight:'400' });

export const metadata = {
  title: "Aaditya Padte",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <ActiveSectionContextProvider>
          <Navbar />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
