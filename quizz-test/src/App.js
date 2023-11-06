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
  Container,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Header from './layouts/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Feedback from './pages/Feedback';
import Profile from './pages/Profile';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container className="mt-5" style={{ minWidth: '936px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
    </ChakraProvider>
  );
}

export default App;
