import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/ui/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plandentall",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-6xl mx-auto">
          <header>
            <Sidebar />
          </header>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
