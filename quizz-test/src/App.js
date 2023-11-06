import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Header from './layouts/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  );
}

export default App;
