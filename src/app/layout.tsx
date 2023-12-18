import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '../styles/globals.scss';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Трудовые резервы',
  description:
    'Общественно полезный фонд кадрового и спортивно-культурного развития “Трудовые резервы”',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={roboto.variable}>
      <body>
        <div className="page__wrapper">
          <Header/>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
