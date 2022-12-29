import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";
import Layout from "Components/Layout";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </ThemeProvider>
  );
}
