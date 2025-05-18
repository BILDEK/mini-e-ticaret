// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Sadece Inter
import './globals.css';
 

import Header from '@/components/Header'; // DOĞRU IMPORT
import Footer from '@/components/Footer'; // DOĞRU IMPORT


const inter = Inter({ subsets: ['latin'] }); // Sadece Inter tanımlanıyor

export const metadata: Metadata = {
  title: 'Mini E-Ticaret Sitem',
  description: 'Harika ürünlerle dolu mini e-ticaret sitemiz!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header /> 
        <main className="flex-grow container mx-auto py-8 px-4">
          {children}
        </main>
        <Footer /> 
      </body>
    </html>
  );
}