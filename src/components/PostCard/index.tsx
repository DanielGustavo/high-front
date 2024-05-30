import React from 'react';
import Image from 'next/image';

import Avatar from '@/components/Avatar';

import {
  AuthorContainer,
  Container,
  Footer,
  PostData,
  PostThumbnail,
  Section,
} from './styles';

const PostCard: React.FC = () => {
  return (
    <Container>
      <AuthorContainer>
        <Avatar
          size={20}
          src="https://miro.medium.com/v2/resize:fill:25:25/1*BJWRqfSMf9Da9vsXG9EBRQ.jpeg"
        />

        <p>Netflix Technology Blog</p>
      </AuthorContainer>

      <Section>
        <PostData>
          <h1>
            RecSysOps: Best Practices for Operating a Large-Scale Recommender
            System
          </h1>

          <p>by Ehsan Saberian and Justin Basilico</p>

          <Footer>
            <p>Sep 30, 2022</p>
          </Footer>
        </PostData>

        <PostThumbnail>
          <Image
            src="https://miro.medium.com/v2/resize:fill:200:134/1*ytQFiP4-oh_QHyOfN6UyKQ.jpeg"
            width={160}
            height={107}
            alt="title"
          />
        </PostThumbnail>
      </Section>
    </Container>
  );
};

export default PostCard;
