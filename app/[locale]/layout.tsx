import type { Metadata } from "next";
import { Inter, Tilt_Warp } from "next/font/google";
import "./globals.css";
import type React from "react"; // Import React
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const tiltWarp = Tilt_Warp({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tiltwarp",
});

export const metadata: Metadata = {
  title: "Yanis Dessaint - Portfolio",
  description: "Développeur Web - 20 ans",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-inter min-h-screen bg-background antialiased",
          inter.variable,
          tiltWarp.variable,
        )}
      >
        <Providers params={params}>
          <main>{children}</main>
          <Toaster richColors />
        </Providers>
      </body>
    </html>
  );
}
