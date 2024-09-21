import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "J3L Cotizar",
  description: "J3L Cotizar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container w-full flex align-center justify-center flex-wrap	mt-4">
          {/*}
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            J3L
          </h1>{*/}
          <Image src="/logos/logoblue.png" width={124} height={48}></Image>
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
