import type { Metadata } from 'next';
import './globals.css';
import ClientShell from '@/components/ClientShell';

export const metadata: Metadata = {
  title: 'Gurukulam Public School | CBSE Affiliated Thrissur',
  description: 'Gurukulam Public School, Thrissur (CBSE Affiliation No. 930215, Estd. 1992). First school in Thrissur sanctioned with Atal Tinkering Laboratory (ATL Lab) by NITI Aayog.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover' as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className="antialiased bg-[#FAFAF8] text-[#3B3B3B] min-h-screen flex flex-col" 
        suppressHydrationWarning
      >
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
