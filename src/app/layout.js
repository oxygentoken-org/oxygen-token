"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import TagManager, {TagManagerArgs} from 'react-gtm-module';
import { useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oxygen Token',
  description: 'Landing Page de Oxygen Token',
}

export default function RootLayout({ children }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

  const tagManagerArgs = {
    gtmId: gtmId,
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);


  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
