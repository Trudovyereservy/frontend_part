import type { Metadata } from 'next';
// import { Inter, Roboto } from 'next/font/google';
// import './globals.scss';
import '../styles/globals.scss';
// import styles from '../styles/styles.scss';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Трудовые резервы',
  description:
    'Общественно полезный фонд кадрового и спортивно-культурного развития “Трудовые резервы”',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <div className='page__wrapper'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
