import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import NavBar from "@/components/Navbar";
import { useState } from "react";
import CartContext from "@/lib/context/Cart";

export default function App({ Component, pageProps }: AppProps) {
  const [items, setItems] = useState({});
  // return <Component {...pageProps} />;
  return (
    <ChakraProvider>
      <CartContext.Provider value={{ items, setItems }}>
        <Flex w="full" minH={"100vh"} bgColor={"gray.100"}>
          <NavBar />
          <Box maxW={"70vw"} m={"auto"}>
            <Component {...pageProps} />
          </Box>
        </Flex>
      </CartContext.Provider>
    </ChakraProvider>
  );
}
