import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/static/img/logo.svg';

const Logo: React.FC = () => {
  return (
    <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
      <Image height={30} src={logo} alt="High logo" />
    </Link>
  );
};

export default Logo;
