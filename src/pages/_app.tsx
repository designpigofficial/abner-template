import { ChakraProvider } from "@chakra-ui/react";

import { AppProps } from "next/app";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    cssVarPrefix: "ck",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
