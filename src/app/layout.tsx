import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./navigation";
import Image from "next/image";
import { Inter } from "next/font/google";
import Provider from "./Provider";
import ThemeSwitch from "./ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });
const headingClass =
  "mt-4 mb-4 text-5xl md:text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center";

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
      <body className={inter.className + "bg-white dark:bg-gray-900 text-gray-900 dark:text-white"}>
        <Provider>
        
          <header> <ThemeSwitch /> 
            <h1 className={headingClass}>ascionemagro</h1>
 </header><div className=" mx-4 md:mx-32 ">
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=EnWAdXJgqjo"
            >
              <Image
                src="/snail.svg"
                alt="snail Logo"
                className="dark:invert float-right m-4"
                width={112}
                height={100}
                priority
              />
            </a>
         
          
            <span className="text-xl font-extrabold leading-none tracking-tight  text-center ">
              progettazione grafica e art direction
            </span>
            <div className="mt-2">
              <Navigation />
            </div>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
