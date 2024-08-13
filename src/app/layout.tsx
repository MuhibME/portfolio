import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect"


const font = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight:['100','200','300','400','600','700','800'],
  variable:'--font-jetbriansMono'
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Muhib Mehboob's Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.variable}>
          <Header/>
          <StairEffect/>
          <PageTransition>
            {children}
          </PageTransition>
          
        </body>
    </html>
  );
}
