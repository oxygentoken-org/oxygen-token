"use client"
import './globals.css'
import TagManager, {TagManagerArgs} from 'react-gtm-module';
import { useEffect } from 'react';


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
