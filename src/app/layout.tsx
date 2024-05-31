import React from 'react';
import { Roboto_Slab, Roboto_Flex } from 'next/font/google';
import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';

import Providers from './Providers';

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--robotoSlab',
});

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--robotoFlex',
});

export const metadata: Metadata = {
  title: 'High',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${robotoSlab.variable} ${robotoFlex.variable}`}>
          {children}
          <ToastContainer />
        </body>
      </html>
    </Providers>
  );
}
