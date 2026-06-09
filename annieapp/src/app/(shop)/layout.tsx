
import React from 'react'
import Footer from '@/src/components/ui/footer/Footer';
import { TopMenu } from '@/src/components';
import AdvertisingBar from '@/src/components/ui/advertising/AdvertisingBar';
import Sidebar from '@/src/components/ui/sidebar/Sidebar';


export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="layout-container">
      <AdvertisingBar />
      <Sidebar />
      <TopMenu />

      <div className="content-grow">{children}</div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
};
