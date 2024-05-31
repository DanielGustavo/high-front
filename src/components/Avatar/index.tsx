import React from 'react';
import FeatherIcon from 'feather-icons-react';
import Image from 'next/image';

import { TAvatar } from '@/components/types/Avatar/TAvatar';

import { Container } from './styles';

const Avatar: React.FC<TAvatar> = ({ src, size = 32, userName }) => {
  return (
    <Container size={size}>
      {src ? (
        <Image
          height={size}
          width={size}
          alt={`${userName} avatar`}
          src={src}
        />
      ) : (
        <FeatherIcon icon="user" size={size / 1.5} />
      )}
    </Container>
  );
};

export default Avatar;
