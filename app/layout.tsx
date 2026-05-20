import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jivra | Intelligent Digital Experiences',
  description: 'Jivra builds premium websites, AI solutions, and modern software products for ambitious brands.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
