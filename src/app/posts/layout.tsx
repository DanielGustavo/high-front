import React, { PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';

const DefaultHeader = dynamic(
  () => import('@/components/DefaultHeader'),
  { ssr: false }
);

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <DefaultHeader />
      {children}
    </>
  );
}
