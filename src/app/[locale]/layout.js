import './globals.css'
import { Inter } from 'next/font/google'
import TagManager, {TagManagerArgs} from 'react-gtm-module';
//import { useEffect } from 'react';
import Head from 'next/head';
import RootLayout from './layout-ga';

const { NextIntlClientProvider } = require('next-intl');
const { notFound } = require('next/navigation');



function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}

async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (<>
    <Head>
       <title>Oxygen Token</title> 
    </Head>
    <html lang={locale}>
      <body>
        <RootLayout/>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
    </>
  );
}

export default LocaleLayout;

/*
export default function RootLayout({ children }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";
  const tagManagerArgs = {
    gtmId: gtmId,
  };
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (<>
    
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </>
  )
}
*/