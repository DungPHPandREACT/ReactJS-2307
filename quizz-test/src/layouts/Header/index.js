import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, Navbar, NavbarBrand } from 'reactstrap';
import './styles.css';
import { Button, Stack, useDisclosure } from '@chakra-ui/react';
import ModalAuth from './ModalAuth';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const statusAuth = useRef('login');

  const handleOpenModalAuth = status => {
    statusAuth.current = status;
    onOpen();
  };

  return (
    <>
      <ModalAuth
        initialRef={initialRef}
        finalRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        statusAuth={statusAuth.current}
      />
      <Navbar color="dark" dark sticky="top">
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <NavbarBrand>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                alt="logo"
                src="/logo192.png"
                style={{
                  height: 40,
                  width: 40,
                }}
              />
              <span style={{ marginLeft: '8px' }}>Quizz Test</span>
            </div>
          </NavbarBrand>

          <div className="pages">
            <span style={{ marginLeft: '8px', marginRight: '8px' }}>
              <NavLink className="nav-bar-item" to="/">
                ReactJS
              </NavLink>
            </span>
            <span style={{ marginLeft: '8px', marginRight: '8px' }}>
              <NavLink className="nav-bar-item" to="/">
                Javascript
              </NavLink>
            </span>
            <span style={{ marginLeft: '8px', marginRight: '8px' }}>
              <NavLink className="nav-bar-item" to="/">
                HTML
              </NavLink>
            </span>
            <span style={{ marginLeft: '8px', marginRight: '8px' }}>
              <NavLink className="nav-bar-item" to="/">
                CSS
              </NavLink>
            </span>
          </div>

          <Stack spacing={4} direction="row" align="center">
            <Button
              colorScheme="teal"
              size="sm"
              onClick={() => handleOpenModalAuth('login')}
            >
              Đăng nhập
            </Button>

            <Button
              colorScheme="teal"
              size="sm"
              variant="outline"
              onClick={() => handleOpenModalAuth('register')}
            >
              Đăng ký
            </Button>
          </Stack>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
