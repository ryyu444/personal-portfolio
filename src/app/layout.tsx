import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './_components/(navigation)/navbar/Navbar';
import Footer from './_components/(navigation)/footer/Footer';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Ryan's Portfolio",
  description: 'A showcase of me and my work',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
