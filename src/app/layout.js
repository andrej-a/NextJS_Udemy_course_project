import Header from '@/components/Header/Header';
import './globals.css';
import Background from '@/components/MainBackground/Background';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Background />
        <Header />
        {children}
      </body>
    </html>
  );
}
