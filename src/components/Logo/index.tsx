import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/static/img/logo.svg';
import simpleLogo from '@/static/img/simpleLogo.svg';

import { TLogo } from '@/components/types/Logo/TLogo';

const Logo: React.FC<TLogo> = ({ simple, onClick }) => {
  return (
    <Link
      href="/posts"
      style={{ display: 'flex', alignItems: 'center' }}
      onClick={onClick}
    >
      {simple ? (
        <Image height={25} src={simpleLogo} alt="High logo" />
      ) : (
        <Image height={30} src={logo} alt="High logo" />
      )}
    </Link>
  );
};

export default Logo;
