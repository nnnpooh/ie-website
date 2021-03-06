import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Link from 'next/link';
import {
  MantineProvider,
  AppShell,
  Navbar,
  Header,
  Title,
} from '@mantine/core';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider
        theme={{ fontFamily: 'Prompt' }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          padding='md'
          navbar={
            <Navbar width={{ base: 300 }} height={500} p='xs'>
              <ul>
                <li>
                  <Link href='/'>
                    <a>Home</a>
                  </Link>
                </li>

                <li>
                  <Link href='/faculties'>
                    <a>Faculty (All)</a>
                  </Link>
                </li>

                <li>
                  <Link href='/research_center'>
                    <a>Research Center</a>
                  </Link>
                </li>

                <li>
                  <Link href='/facebook_feed'>
                    <a>Facebook Feed</a>
                  </Link>
                </li>
              </ul>
            </Navbar>
          }
          header={
            <Header height={60} p='xs'>
              <Title>IE Website Test</Title>
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </>
  );
}

export default MyApp;
