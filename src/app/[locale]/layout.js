import './globals.css'
import Head from 'next/head';
import RootLayout from './layout-ga';

const { NextIntlClientProvider } = require('next-intl');
const { notFound } = require('next/navigation');

export const metadata = {
  title: 'Oxygen Token',
  description: 'Landing page Oxygen',
}
 

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
      <Head>
      <title>Oxygen Token</title>
      <meta name='description' content='Reduci tus emisiones de CO2 con Oxygen'/>
      <link rel='icon' href='./favicon.ico'/>
      </Head> 
      <body>
        <RootLayout/>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        
      </body>
    </html>
  );
}

export default LocaleLayout;