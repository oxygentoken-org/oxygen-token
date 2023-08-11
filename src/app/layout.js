"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import TagManager, {TagManagerArgs} from 'react-gtm-module';
import { useEffect } from 'react';
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

  const tagManagerArgs = {
    gtmId: gtmId,
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);


  return (<>
    <Head>
       <title>Oxygen Token</title> 
    </Head>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </>
  )
}
