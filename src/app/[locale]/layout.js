import './globals.css'
import RootLayout from './layout-ga';
import { PrePageProvider } from './context/prePageContext';

const { NextIntlClientProvider } = require('next-intl');
const { notFound } = require('next/navigation');

export const metadata = {
  title: 'Oxygen Token',
  description: 'Landing page Oxygen',
  icon: '../favicon.ico'
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
      <body>
        <PrePageProvider>
        <RootLayout/>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        </PrePageProvider>
        
      </body>
    </html>
  );
}

export default LocaleLayout;