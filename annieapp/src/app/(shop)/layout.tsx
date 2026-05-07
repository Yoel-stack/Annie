
import React from 'react'
import Footer from '@/src/components/ui/footer/Footer';
import {TopMenu} from '@/src/components/ui/top-menu/TopMenu';


export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <TopMenu />
      <div>{children}</div>
      <Footer />
    </main>
  );
};
