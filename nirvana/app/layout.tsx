import Navbar from "../components/layout/Navbar";
import localFont from "next/font/local";
import "./globals.css";

const antonSC = localFont({
  src: "./fonts/AntonSC.woff2",
  variable: "--font-anton",
  weight: "400",
  style: "normal",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={antonSC.variable}>
      <body className="bg-transparent">
        <Navbar />
        {children}
      </body>
    </html>
  );
}