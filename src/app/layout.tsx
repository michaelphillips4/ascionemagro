import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./navigation"
import Image from "next/image";
import {Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const headingClass = "mt-4 mb-4 text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center";

export const metadata: Metadata = {
  title: "ascionemagro",
  description:
    "We are studio based in Milan that specializes in visual communication. We focus on a project from the beginning idea through to the final production.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 


  return (
    <html lang="en">
   
      <body className={inter.className + " m-12 mt-4 mb-4 md:m-32 md:mt-4 md:mb-4"}>
        <h1
          className={headingClass}
        >
          ascionemagro {inter.className}
        </h1>

        <a target="_blank" href="https://www.youtube.com/watch?v=EnWAdXJgqjo">
          <Image
            src="/snail.svg"
            alt="snail Logo"
            className="dark:invert float-right m-4"
            width={112}
            height={100}
            priority
          />
        </a>

        <div className="">
          
              <span className="text-xl font-extrabold leading-none tracking-tight text-gray-900 text-center " >
                progettazione grafica e art direction
              </span>
           
            <div className="mt-2">
             <Navigation />
            </div>
         

          {children}
        </div>

      </body>
    </html>
  );
}
