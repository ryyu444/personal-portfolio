import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './_components/(navigation)/navbar/Navbar';
import Footer from './_components/(navigation)/footer/Footer';
import { ThemeProvider } from './_contexts/ThemeContext/ThemeContext';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Ryan's Portfolio",
  description: 'A website showcasing my work and skills',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
