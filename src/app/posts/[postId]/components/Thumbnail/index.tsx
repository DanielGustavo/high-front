'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { TThumbnail } from '@/app/types/posts/Post/Thumbnail/TThumbnail';

import { Container } from './styles';

const Thumbnail: React.FC<TThumbnail> = ({ src, title }) => {
  const [height, setHeight] = useState(undefined as undefined | number);

  if (!src) return;

  return (
    <Container height={height}>
      <Image
        src={src}
        alt={`"${title}" thumbnail`}
        fill
        objectFit="contain"
        onLoad={(e) => setHeight((e.target as any).naturalHeight)}
      />
    </Container>
  );
};

export default Thumbnail;
