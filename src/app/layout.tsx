import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alicia Olofsson',
  description: 'My portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <link rel='icon' href='/images/favicon.ico' sizes='any' />
      <body className={inter.className}>
        <nav>
          <Navbar />
        </nav>
        {children}
      </body>
    </html>
  );
}
