import React, { PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';

const AuthenticatedHeader = dynamic(
  () => import('@/components/AuthenticatedHeader'),
  { ssr: false }
);

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <AuthenticatedHeader />
      {children}
    </>
  );
}
