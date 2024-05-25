'use client';

import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ButtonCTA from '@/components/ButtonCTA';

import { Container, ContentContainer } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />

      <ContentContainer>
        <section>
          <div>
            <h1>Stay curious.</h1>
            <p>
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
          </div>

          <ButtonCTA variation="gray" size="medium" width="213px">
            Start reading
          </ButtonCTA>
        </section>
      </ContentContainer>

      <Footer />
    </Container>
  );
}
