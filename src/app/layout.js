import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arsal Iftikhar",
  description: "Arsal Iftikhar | Website Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-black-800`}>
        {children}
      </body>
    </html>
  );
}
