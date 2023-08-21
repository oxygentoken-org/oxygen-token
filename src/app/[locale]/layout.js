import './globals.css'
import Head from 'next/head';
//import RootLayout from './layout-ga';

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

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default LocaleLayout;