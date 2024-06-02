'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';

import { AuthProvider } from '@/contexts/AuthContext';

import StyledComponentsRegistry from './StyledComponentsRegistry';
import { HeaderProvider } from '@/contexts/HeaderContext';

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <AuthProvider>
        <HeaderProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </HeaderProvider>
      </AuthProvider>
    </StyledComponentsRegistry>
  );
}
