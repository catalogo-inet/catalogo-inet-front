"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";
import { GlobalProvider } from "@/context/GlobalProvider";
import { FiltersProvider } from "@/context/FiltersProvider";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Catalogo INET",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <FiltersProvider>
        <GlobalProvider>
          <body className={inter.className}>
            <Layout>{children}</Layout>
          </body>
        </GlobalProvider>
      </FiltersProvider>
    </html>
  );
}
