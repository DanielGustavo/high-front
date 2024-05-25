'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';

import StyledComponentsRegistry from './StyledComponentsRegistry';

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
