import {Harmattan } from "next/font/google";
import "./globals.css";
import SideNavbar from "./components/SideNavbar";
import { DarkModeProvider } from "../app/components/DarkMode/DarkModeContext";


const harmattan = Harmattan({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: "Aimad Bouchouaf",
  description: "This Is My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={harmattan.className}>
      <DarkModeProvider>
        <SideNavbar />
        {children}
      </DarkModeProvider>
    </body>
  </html>
  );
}
