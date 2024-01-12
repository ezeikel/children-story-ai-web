'use client';

import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import styled from 'styled-components';
import StyledComponentsRegistry from '../lib/StyledComponentsRegistry';
import GlobalStyle from '../GlobalStyle';
import Header from './components/Header/Header';

const tommySoft = localFont({
  src: [
    {
      path: './fonts/Tommy-Soft-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Tommy-Soft-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Tommy-Soft-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Tommy-Soft-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-tommy-soft',
});

const Body = styled.body`
  height: 100vh;
`;

const Main = styled.main`
  min-height: calc(100vh - 100px);
  background-color: var(--color-peach);
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Body className={tommySoft.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Header />
          <Main>{children}</Main>
        </StyledComponentsRegistry>
        <Analytics />
      </Body>
    </html>
  );
}
